import React from 'react'

export const  MenuFigure = ({image,width}) => {
 return (
       <figure className="header__figure">
           <img src={image}  width={width}/>
        </figure>
 )}