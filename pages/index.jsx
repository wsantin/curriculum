import React from 'react';
import { Row, Col, Layout, Card, Space, Timeline, Progress  } from 'antd';

import Page from '../layouts/page';
import {ASSET_PREFIX} from '-utils/constants.jsx'
const { Meta } = Card;

const Index = (props) => {

  const {userAgent} = props
  console.log(ASSET_PREFIX)
  return(
    <>
        <Page
            description={
                'Curriculum Vitae'
            }
            image={ASSET_PREFIX+'/favicons/favicon-16x16.png'}
            title={'Curriculum Vitae'}
        >
          <main>
            <Layout className="layout" >
              <Row type="flex" justify="center" >
                <Col className="content" xs={24} sm={24} md={20} lg={20} xl={10}>
                  <Row>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} className="column-info">
                      <div className="title">
                        <div> 
                          <img className="profile-photo" alt="profile-photo" src={ASSET_PREFIX+"/photo.jpg"}/>
                        </div>
                        <div className="details-space">
                          <span>
                            Peruano de 26 Años, nacido en Sullana
                          </span>

                        </div>
                        <div className="details-space">
                          <Row>
                            <a href="https://wa.me/51991030952?text=Interesado%20curriculum" target="_top">
                              <Space size={13}>
                                <div>
                                  <i className="fab fa-whatsapp"></i>
                                  <i className="fal fa-phone-volume"></i>
                                </div>
                                <div>991030952</div>
                              </Space>
                            </a>
                          </Row>
                          <Row>
                            <a href="https://wa.me/51918558986?text=Interesado%20curriculum" target="_top">
                              <Space size={13}>
                                <div>
                                  <i className="fal fa-phone-volume"></i>
                                </div>
                                <div>918558986</div>
                              </Space>
                            </a>
                          </Row>
                          <Row>
                            <a href="mailto:hugo.93wal@gmail.com?Subject=Interesado%20curriculum" target="_top">
                              <Space size={13}>
                                <i className="fal fa-envelope"></i>
                                <div>hugo.93wal@gmail.com</div>
                              </Space>
                            </a>
                          </Row>
                          <Row>
                            <a href="mailto:mailto:hugo.93wal@protonmail.com?Subject=Interesado%20curriculum" target="_top">
                              <Space size={13}>
                                <i className="fal fa-envelope"></i>
                                <div>hugo.93wal@protonmail.com</div>
                              </Space>
                            </a>
                          </Row>
                        </div>

                        <div className="details-space">
                          <Row>
                            <a href="https://github.com/wsantin" target="_top">
                              <Space size={13}>
                                <i className="fab fa-github"></i>
                                <div>github.com/wsantin</div>
                              </Space>
                            </a>
                          </Row>
                          <Row>
                            <a href="https://www.facebook.com/WHsantin" target="_top">
                              <Space size={13}>
                                <i className="fab fa-facebook-f"></i>
                                <div>facebook.com/WHsantin</div>
                              </Space>
                            </a>
                          </Row>
                        </div> 
                        <div className="details-space">
                          <Row className="sub-title">
                            Actividades
                          </Row>
                          <Row>
                            <ul>
                              <li>Sistemas en la nube</li>  
                              <li>Arquitectura de Sistemas</li>
                              <li>Aplicaciones Web</li>
                              <li>Frontend Y Backend</li>
                              <li>Pentesting</li>
                              <li>Hacking Ético</li>
                              <li>Trabajo en equipo</li>
                            </ul> 
                          </Row>
                        </div>
                        <div className="details-space">
                          <Row className="sub-title">
                            Formación
                          </Row>
                          <Row className="sub-title-content">
                            <strong>Ing. Informática</strong>
                            <span>Universidad nacional de Piura</span>
                          </Row>
                        </div>
                        <div className="details-space">
                          <Row className="sub-title">
                            Intereses 
                          </Row>
                          <Row>
                            <Row gutter={[14, 24]} className="sub-title-content">
                              <Col className="gutter-row" span={6}>
                                <i className="fal fa-futbol fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="fas fa-camera fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="far fa-plane fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="fal fa-cloud-sun fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="far fa-laptop fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="fal fa-headphones fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="fas fa-books fa-2x"/>
                              </Col>
                              <Col className="gutter-row" span={6}>
                                <i className="far fa-gamepad fa-2x"/>
                              </Col>
                            </Row>
                          </Row>
                        </div>

                      </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15} className="column-description" >
                      <div className="context">
                        <div className="title">
                          <h1>WALTER HUGO SANTIN ZAPATA</h1>
                          <div className="title-fin">Desarrollador Software</div>
                          <div className="title-fin">Pentester - Hacking Ético</div>
                        </div>
                        <div className="sub-title">
                          Autodescripción
                        </div>
                        <div className="description">
                          Me apasiona la tecnología, desarrollandome eficientemente con
                          muchas ganas de superación, con nivel de responsabilidad para tareas
                          y trabajo en equipo.
                          Soy programador Fullstack y Analista en busca de Fallos de seguridad
                          en nivel de servidor, servicios y aplicaciones Web.

                        </div>
                  
                        <div className="sub-title">
                          Competencias
                        </div>
                        <div className="sub-title-content">
                          <ul>
                            <li>Comunicación</li>  
                            <li>Flexibilidad</li>
                            <li>Especialista en Frontend y backend</li>
                            <li>Protección de hackers Black</li>
                            <li>Constante interés en seguir aprendiendo</li>                            
                            <li>Hacer bien las cosas</li>
                            <li>Ordenado, Puntual y responsable</li>
                          </ul> 
                        </div>
                        <div className="sub-title">
                          Experiencias Profesionales
                        </div>
                        <div className="sub-title-content">
                          <Timeline mode="left">
                            <Timeline.Item label="2020" className="time-line-item" color="#3D7C6E">
                              <div> 
                                <strong>Agros tech: </strong>
                                <span>Desarrollador Fullstack. Tiempo: Actual</span> 
                              </div>
                            </Timeline.Item>
                            <Timeline.Item label="2019" className="time-line-item" color="gray">
                              <div> 
                                <strong>Nytec Sac: </strong>
                                <span>Analista y desarrollador Web. Soporte en Telefónica. Tiempo: 6 Meses</span> 
                              </div>
                            </Timeline.Item>
                            <Timeline.Item label="2017" className="time-line-item" color="gray">
                              <div> 
                                <strong>Gobierno Regional de Piura: </strong>
                                <span>Analista en seguridad de Información. Desarrollador Aplicaciones Web. Tiempo: 1 Año</span> 
                              </div>
                            </Timeline.Item>
                            <Timeline.Item label="2014" className="time-line-item" color="gray">
                              <div> 
                                <strong>Infonet Soluciones Eirl: </strong>
                                <span>Analista de seguridad en Aplicaciones Web y servidores. Charlas Conferencias. Tiempo: 8 Meses</span> 
                              </div>
                            </Timeline.Item>
                            <Timeline.Item label="2014" className="time-line-item" color="gray">
                              <div> 
                                <strong>Walter Omar Tecnología: </strong>
                                <span>Técnico de computadoras, ensamblaje y reparación. Tiempo: 2 Años</span>
                              </div>
                            </Timeline.Item>
                          </Timeline>
                        </div>
                        
                      </div>
                      <div className="experence">
                        <div className="sub-title">
                          Habilidades 
                        </div>
                        <div className="sub-title-content">
                          <Row gutter={24} style={{fontSize:'0.7rem'}}>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Php</strong></Col>
                                <Col span={9}><Progress percent={60} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Angular</strong></Col>
                                <Col span={9}><Progress percent={50} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>React</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Rest</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Node js</strong></Col>
                                <Col span={9}><Progress percent={90} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>SQL</strong></Col>
                                <Col span={9}><Progress percent={60} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>NoSql</strong></Col>
                                <Col span={9}><Progress percent={60} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>React Native</strong></Col>
                                <Col span={9}><Progress percent={50} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Cms</strong></Col>
                                <Col span={9}><Progress percent={60} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Js/Es6</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Typescript</strong></Col>
                                <Col span={9}><Progress percent={70} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Testing</strong></Col>
                                <Col span={9}><Progress percent={70} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Preprocesadores</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Photoshop</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>UX/UI</strong></Col>
                                <Col span={9}><Progress percent={70} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Git</strong></Col>
                                <Col span={9}><Progress percent={80} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Linux Windows</strong></Col>
                                <Col span={9}><Progress percent={70} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Docker</strong></Col>
                                <Col span={9}><Progress percent={60} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Owasp Security</strong></Col>
                                <Col span={9}><Progress percent={90} showInfo={false} /></Col>
                              </Row>
                            </Col>
                            <Col className="gutter-row" span={6}>
                              <Row>
                                <Col span={15} className="habilidades-item"><strong>Pentesting Ofensive</strong></Col>
                                <Col span={9}><Progress percent={90} showInfo={false} /></Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Layout>
          </main>
        </Page>
            
    </>
  )
}

export default Index;
