import React from "react";
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSquareCheck,
    faWindowRestore,
    faGears,
    faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const TravelUsSection = () => {
    return (
        <>
            <section id='TravelUs'>
                <Container>
                    <Row>
                        <Col md>
                            <div className="section-title">
                                <h2>Why travel with us?</h2>
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices sem elit, vitae vulputate sapien molestie sit amet. Integer eget venenatis metus.
                                </span>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <div className="travel-wrapper">
                                <div className="travel-content">
                                    <div className="left-content float-right">
                                        <b>Our Capability</b>
                                        <span>
                                            Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis rhoncus vel in leo
                                        </span>
                                    </div>
                                    <div className="right-content">
                                        <FontAwesomeIcon icon={faSquareCheck} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="travel-wrapper">
                                <div className="travel-content flex-row-reverse">
                                    <div className="left-content float-left">
                                        <b>Our Significance</b>
                                        <span>
                                            Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis rhoncus vel in leo
                                        </span>
                                    </div>
                                    <div className="right-content">
                                        <FontAwesomeIcon icon={faWindowRestore} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="travel-wrapper">
                                <div className="travel-content">
                                    <div className="left-content float-right">
                                        <b>Our Choice </b>
                                        <span>
                                            Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis rhoncus vel in leo
                                        </span>
                                    </div>
                                    <div className="right-content">
                                        <FontAwesomeIcon icon={faGears} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="travel-wrapper">
                                <div className="travel-content flex-row-reverse">
                                    <div className="left-content float-left">
                                        <b>Our Promise </b>
                                        <span>
                                            Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis rhoncus vel in leo
                                        </span>
                                    </div>
                                    <div className="right-content">
                                        <FontAwesomeIcon icon={faCalendarDays} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}


export default TravelUsSection;