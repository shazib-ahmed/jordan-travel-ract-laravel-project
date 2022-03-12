import React from 'react'
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUsers,
    faFlag,
} from "@fortawesome/free-solid-svg-icons";

const CounterSection = () => {
  return (
      <>
          <section className='agency-counter'>
              <Container>
                  <Row>
                      <Col md>
                          <div className='agency-counter-wrapper'>
                              <div className='counter-content'>
                                  <FontAwesomeIcon icon={faUsers} />
                                  <span>195</span>
                              </div>
                              <b>Happy Clients</b>
                          </div>
                      </Col>
                      <Col md>
                          <div className='agency-counter-wrapper'>
                              <div className='counter-content'>
                                  <FontAwesomeIcon icon={faFlag} />
                                  <span>5</span>
                              </div>
                              <b>Year Experience</b>
                          </div>
                      </Col>
                      <Col md>
                          <div className='agency-counter-wrapper'>
                              <div className='counter-content'>
                                  <FontAwesomeIcon icon={faUsers} />
                                  <span>195</span>
                              </div>
                              <b>Lorem Ipsum</b>
                          </div>
                      </Col>
                      <Col md>
                          <div className='agency-counter-wrapper'>
                              <div className='counter-content'>
                                  <FontAwesomeIcon icon={faUsers} />
                                  <span>25</span>
                              </div>
                              <b>Tours Number</b>
                          </div>
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
  )
}

export default CounterSection;