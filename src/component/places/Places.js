import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner1 from "../../images/banner1.jpg";


const Places = () => {
  return (
      <>
          <section className='places-section'>
              <Row>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
                  <Col md={3}>
                      <div className='places-wrapper'>
                          <img src={banner1 } alt='places-image' />
                          <div className='places-desc'>
                              <b>Petra</b>
                              <span>Lorem ipsum dolor sit amet, assum quidam te nec</span>
                          </div>
                      </div>
                  </Col>
              </Row>
          </section>
      </>
  )
}


export default Places