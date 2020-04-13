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
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production' ? '/curriculum' : ''

//Tema Personalizado
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
)

module.exports =
  	withCSS(
		withLess({
			lessLoaderOptions: {
				javascriptEnabled: true,
				modifyVars: themeVariables, 
				//importLoaders: 1,
				//localIdentName: "[local]___[hash:base64:5]",
			},
			// exportTrailingSlash:true,
			// exportPathMap: async function (defaultPathMap) {
			// 	return {
			// 	  '/': { page: '/' }
			// 	}
			// },
			assetPrefix: isProd,
			webpack: (config, { isServer }) => {
				if (isServer) {

					// config.node = {
					// 	fs: 'empty'
					// }

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
					new webpack.DefinePlugin({
						'process.env.ASSET_PREFIX': JSON.stringify(isProd),
					}),
					new AntdDayjsWebpackPlugin({
						preset: 'antdv3'
					}),
					new CompressionPlugin({
						compressionOptions: { level: 1 },
					})
				);

				config.resolve.alias["-layouts"] = path.join(__dirname, "layouts");
				config.resolve.alias["-pages"] = path.join(__dirname, "pages");
				config.resolve.alias["-styles"] = path.join(__dirname, "styles");
				config.resolve.alias["-utils"] = path.join(__dirname, "utils");
				
				return config;
			}
		}),
		withSass,
		withFonts
	)

