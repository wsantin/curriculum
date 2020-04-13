import React,{Fragment} from 'react'
import {Icon} from 'antd'
import "./styles.css"

export const ServicesHome = () => {
   return(
        <Fragment>
              <article className="service__article">
                  <div className="service__article--container">
                     <h3 className="service__article--title">
                        Desarrollo de Aplicaciones
                     </h3>
                     <p className="service__article--content">
                       La construcción de nuestros productos digitales pasa por varias fases como
                       la investigación de usuarios, el prototipado de la aplicación en diferentes calidades,
                       Análisis de Requerimientos y testing.
                       Entre nuestras metodologías utilizadas destacan las siguientes:
                     </p>
                    <ul className="service__article--point">
                      <li>
                        <Icon type="caret-right"
                              style={{ fontSize: '25px',color: "rgb(255, 79, 0)" }}/>
                        <span>Design Sprint</span>
                      </li>
                      <li>
                        <Icon type="caret-right"
                              style={{fontSize: '25px', color: "rgb(255, 79, 0)"}}/>
                        <span>CX Research y UX Testing</span>
                      </li>
                      <li>
                        <Icon type="caret-right"
                              style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                        <span>Design Thinking</span>
                      </li>
                      <li>
                        <Icon type="caret-right"
                              style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                        <span>Diseño Centrado en el Usuario</span>
                      </li>
                    </ul>
                  </div>
                  <figure className="service__article--figure">
                     <img src="/images/prueba.png" width={"450px"}/>
                  </figure>
              </article>

          <article className="service__article">
            <div className="service__article--container">
              <h3 className="service__article--title">
                Auditorias de Seguridad Informática
              </h3>
              <p className="service__article--content">
                Evaluamos la seguridad de tu empresa con diferentes técnicas y métodos,
                en esta nueva era digital es importante que tu infraestructura de red y seguridad
                se adapte a tus necesidades de negocio garantizando la disponibilidad   y acceso
                a tus sistemas de información.
                Entre nuestro Servicios Destacan:
              </p>
              <ul className="service__article--point">
                <li>
                  <Icon type="caret-right"
                        style={{ fontSize: '25px',color: "rgb(255, 79, 0)" }}/>
                  <span>Protección de correo electrónico</span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)"}}/>
                  <span>Pentesting de Aplicaciones Web</span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                  <span>Protección de los endpoints y servers</span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                  <span>Seguridad de red de su organización</span>
                </li>
              </ul>
            </div>
            <figure className="service__article--figure">
              <img src="/images/prueba.png" width={"450px"}/>
            </figure>
          </article>


          <article className="service__article">
            <div className="service__article--container">
              <h3 className="service__article--title">
                Estrategias de Marketing
              </h3>
              <p className="service__article--content">
                Nos encargamos del posicionamiento de tu marca a través de estrategias
                de marketing.
                Creamos, ejecutamos campañas efectivas para que
                puedas captar esos clientes potenciales que tu negocio
                necesita.
                Entre nuestros servicios destacan:
              </p>
              <ul className="service__article--point">
                <li>
                  <Icon type="caret-right"
                        style={{ fontSize: '25px',color: "rgb(255, 79, 0)" }}/>
                  <span>Email Marketing</span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)"}}/>
                  <span>Marketing Basados en Datos</span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                  <span>Estrategia y Marketing Digital </span>
                </li>
                <li>
                  <Icon type="caret-right"
                        style={{fontSize: '25px', color: "rgb(255, 79, 0)" }}/>
                  <span>Inbound y Outbound Marketing</span>
                </li>
              </ul>
            </div>
            <figure className="service__article--figure">
              <img src="/images/prueba.png" width={"450px"}/>
            </figure>
          </article>

        </Fragment>
   )
}