import React from 'react'
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const ServiceSection = () => {
    return (
        <>
            <section id='agency-service'>
                <Container>
                    <Row>
                        <Col md>
                            <div className="section-title">
                                <h2>My <strong>service</strong></h2>
                                <span>
                                    Ea deserunt sensibus elaboraret per, quando fastidii mei id.
                                </span>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md>
                            <div className='agency-service-wrapper'>
                                <div className='agency-service-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <b>Sevice Name</b>
                                <p>
                                    Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an.
                                </p>
                            </div>
                        </Col>
                        <Col md>
                            <div className='agency-service-wrapper'>
                                <div className='agency-service-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <b>Sevice Name</b>
                                <p>
                                    Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an.
                                </p>
                            </div>
                        </Col>
                        <Col md>
                            <div className='agency-service-wrapper'>
                                <div className='agency-service-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <b>Sevice Name</b>
                                <p>
                                    Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an.
                                </p>
                            </div>
                        </Col>
                        <Col md>
                            <div className='agency-service-wrapper'>
                                <div className='agency-service-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                                <b>Sevice Name</b>
                                <p>
                                    Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ServiceSection;