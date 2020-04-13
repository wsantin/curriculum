import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import {withRouter} from 'next/router'
import NProgress from 'nprogress'
import '../styles/main.less'

class MyApp extends App {
  constructor() {
      super()
      this.state = {
        userAgent: {
          userAgent: 'pc'
        }
      }
  }
  
  componentDidMount() {
    const {pathname} = this.props;

    if(pathname != '/' ){
      Router.push('/')
    }
    
    const ua = navigator.userAgent;
    let userAgent;
    if (ua.indexOf("Android") > 0 || ua.indexOf("iPhone") > 0 || ua.indexOf("iPad") > 0) {
      userAgent = 'mobile'
    } else {
      userAgent = 'pc'
    }

    this.setState({
      userAgent: {
        userAgent
      }
    })
  }

  render() {

    Router.onRouteChangeStart = (url) => {
      NProgress.start() 
    }
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()

    const {Component, pageProps, router: {pathname}} = this.props;
    const {userAgent} = this.state;
    let myPageProps = {...pageProps, ...userAgent};

    

    return <Component {...myPageProps} />
  } 
}

export default withRouter(MyApp)