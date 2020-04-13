import React from 'react'
import  Link from 'next/link'
import { Card } from 'antd';
import { data } from '../../../helpers/dataHome'
import "./styles.css"


export const  HomeExists = () => {
    return(
       <section className="section__home--two">
           <figure>
                <img src={"/images/image_home1.png"}/>
           </figure>
            <div className="home__two--title">
                 <h4>
                   Nodezi existe para poder brindar soluciones digitales a empresas grandes
                   y pequeñas, que solucionen problemas y aporten valor a su negocio.
                   Aplicando las mejoras Tecnologías y estándares de Calidad.
                 </h4>
            </div>
       </section>
    )
}


export const HomeMore = () => {
   return (
       <section className="section__home--more">
            <h3 className="home__more--title">Lo Que Hacemos</h3>
            <div className="home__cards">
              {
                data.map(card => {
                  return (
                    <Card hoverable key={card.id}
                        style={{ width: 280 , height:540}}
                        className="home__card"
                        cover={<img  src={card.image} height={
                          card.height !== undefined? card.height : ''} />}>
                    <h3 className="home__card--title">{card.title}</h3>
                    <p className="home__card--content">
                      {card.content}
                    </p>
                    <Link href={"/servicios"}><a className="home__card--link">CONOCE MÁS</a></Link>
                  </Card>
                  )
                })
              }
            </div>
       </section>
   )
}
