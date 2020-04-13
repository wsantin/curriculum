import React,{ Component } from 'react';
import './styles.css';

/*Componentes*/
import {MenuFigure} from './MenuImage';
import {MenuList} from './MenuList';


export default class Header extends Component {
   render(){
     return (
        <header className="header">
           <MenuFigure image={"/images/logo.png"} width={"150px"} />
           <MenuList/>
        </header>
     )
   }
}



