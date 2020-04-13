/* eslint-disable */
require('dotenv').config();
const fs = require('fs')
const path = require('path')
const webpack = require ('webpack')
const withFonts = require('next-fonts')
const lessToJS = require('less-vars-to-js')
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const withSass = require('@zeit/next-sass')
const withPlugins = require('next-compose-plugins')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

//Tema Personalizado
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './client/styles/antd-custom.less'), 'utf8')
)
const nextConfig = {
	env: {
		prueba: process.env.prueba || 'prueba2',
	},
	distDir: '.next',
};
module.exports =
  	withCSS(
		withLess({
			lessLoaderOptions: {
			javascriptEnabled: true,
			modifyVars: themeVariables, 
			importLoaders: 1,
			localIdentName: "[local]___[hash:base64:5]",
			},
			webpack: (config, { isServer }) => {
					if (isServer) {
						config.node = {
							fs: 'empty'
						}

						const antStyles = /antd\/.*?\/style.*?/;
						const origExternals = [...config.externals];
						config.externals = [
							(context, request, callback) => {
								if (request.match(antStyles)) return callback();
								if (typeof origExternals[0] === 'function') {
									origExternals[0](context, request, callback);
								} else {
									callback();
								}
							},
							...(typeof origExternals[0] === 'function' ? [] : origExternals),
						];

						config.module.rules.unshift({
							test: antStyles,
							use: 'null-loader',
						});
					}

					config.plugins.push(
						new AntdDayjsWebpackPlugin({
							preset: 'antdv3'
						})
					);

				return config;
			},
			distDir: 'build',
			enableSvg: true
		}),
		withSass,
		withFonts
	)

