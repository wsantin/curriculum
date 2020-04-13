import React from 'react'
import { Layout } from 'antd';
import './styles.css'

const { Footer } = Layout;

class FooterMain extends React.Component {
  render(){
    return (
      <Footer>
         <div className="footer">
           <figure className="footer__image">
               <img src={"/images/logo.png"} width={"130px"} />
           </figure>
           <div className="footer__images">
               <img src={"/images/icon_facebook.png"} width={"55px"}/>
               <img src={"/images/icon_whatsapp.png"}  width={"55px"} />
           </div>
         </div>
      </Footer>
    )
  }
}

export default FooterMain
