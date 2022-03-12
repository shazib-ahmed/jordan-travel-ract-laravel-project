import React from "react";
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import banner1 from "../../images/banner1.jpg";
import { Link } from "react-router-dom";

const WelcomeSection = () => {
    return (
        <>
            <section id="welcome-section">
                <Container>
                    <Row>
                        <Col md>
                            <div className="section-title">
                                <h2>welcome to our agency.</h2>
                                <span>
                                    Whatever your destination, at Travel Jordan Agency we guarantee complete satisfaction and assurance. The clarity of our website, the proficiency and knowledge of our Tour Specialists, and the understanding and enthusiasm of our drivers/guides, allow you to be completely informed before you make your booking
                                    and relax while you travel. Check our most recent travel packages:
                                </span>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md>
                            <div className="welcome-wrapper">
                                <div className="top-content">
                                    <img src={banner1} alt="welcome" />
                                    <div className="pin-content">
                                        <b>8</b>
                                        <span>days</span>
                                    </div>
                                </div>
                                <div className="bottom-content">
                                    <b>jordan classic tour</b>
                                    <span>Discover Jordan in 8 days</span>
                                </div>
                            </div>
                        </Col>
                        <Col md>
                            <div className="welcome-wrapper content-flip">
                                <div className="top-content content-front-card blue-card">
                                    <h3>
                                        Want a
                                        Private tour?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo porttitor neque. Sed tristique elit sit amet orci elementum congue.
                                    </p>
                                    <div className="card-button">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <b>Request an offer</b>
                                    </div>
                                </div>
                                <div className="top-content content-back-card">
                                    <div className="back-top">
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                    </div>
                                    <div className="back-bottom blue-card blue-card-svg">
                                        <FontAwesomeIcon icon={faCaretUp} />
                                        <b>Petra Jordan tour</b>
                                        <span>
                                            Journey back in time to the lost ancient Nabataean kingdom.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md>
                            <div className="welcome-wrapper content-flip">
                                <div className="top-content content-front-card orange-card">
                                    <h3>
                                        Want a
                                        Private tour?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo porttitor neque. Sed tristique elit sit amet orci elementum congue.
                                    </p>
                                    <div className="card-button">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <b>Request an offer</b>
                                    </div>
                                </div>
                                <div className="top-content content-back-card">
                                    <div className="back-top">
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                    </div>
                                    <div className="back-bottom orange-card orange-card-svg">
                                        <FontAwesomeIcon icon={faCaretUp} />
                                        <b>Petra Jordan tour</b>
                                        <span>
                                            Journey back in time to the lost ancient Nabataean kingdom.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md>
                            <div className="welcome-wrapper content-flip">
                                <div className="top-content content-front-card black-card">
                                    <h3>
                                        Looking to
                                        join a group?
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo porttitor neque. Sed tristique elit sit amet orci elementum congue.
                                    </p>
                                    <div className="card-button">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        <b>Request an offer</b>
                                    </div>
                                </div>
                                <div className="top-content content-back-card">
                                    <div className="back-top">
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                        <Link to='#'>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <b>Request an offer</b>
                                        </Link>
                                    </div>
                                    <div className="back-bottom black-card black-card-svg">
                                        <FontAwesomeIcon icon={faCaretUp} />
                                        <b>Petra Jordan tour</b>
                                        <span>
                                            Journey back in time to the lost ancient Nabataean kingdom.</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Link to='#' className='button'>Check all Jordan Tours</Link>
                </Container>
            </section>
        </>
    )
}

export default WelcomeSection;