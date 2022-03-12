import React from 'react'
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationPin,
    faTty,
    faEnvelope,

} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebookF,
    faTwitter,
    faGooglePlusG,
    faYoutube,
    faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const FooterSection = () => {
    return (
        <>
            <footer id='footer'>
                <div className='news-letter'>
                    <Container>
                        <Row>
                            <Col md={7}>
                                <h3>Subscribe to our newsletter!</h3>
                            </Col>
                            <Col md={5}>
                                <div className='form-box'>
                                    <input placeholder='Enter your email here' />
                                    <Link to='#'>Subscribe</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='footer-links'>
                    <Container>
                        <Row>
                            <Col md>
                                <div className='footer-wrapper'>
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li>
                                            <Link to='#'>home</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>jordan tours</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>about jordan</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>agency</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>client feedback</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>blog</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md>
                                <div className='footer-wrapper'>
                                    <h3>Tours of Jordan</h3>
                                    <ul>
                                        <li>
                                            <Link to='#'>jordan classic tour</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>petra tour</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>jordan holidays</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>tour jordan </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Jordan Tours Petra, Wadi Rum </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md>
                                <div className='footer-wrapper'>
                                    <h3>Information</h3>
                                    <ul>
                                        <li>
                                            <Link to='#'>Website T&C </Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Privacy Policy</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Payment Options</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Your Local Tour Agent</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>FAQ's</Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md>
                                <div className='footer-wrapper'>
                                    <h3>Contact Info</h3>
                                    <ul className='footer-contact'>
                                        <li>
                                            <FontAwesomeIcon icon={faLocationPin} />
                                            <ul>
                                                <li>Happy Family Stores Building</li>
                                                <li>No:6 - 2nd Floor</li>
                                                <li>7th Circle- Abdullah Ghosheh St.</li>
                                            </ul>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faTty} />
                                            <span>+96278-53-11117</span>
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faEnvelope} />
                                            <span>info@traveljordanagency.com</span>
                                        </li>
                                    </ul>
                                    <div className='footer-social'>
                                        <Link to='#' className='footer-social-icon'>
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </Link>
                                        <Link to='#' className='footer-social-icon'>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </Link>
                                        <Link to='#' className='footer-social-icon'>
                                            <FontAwesomeIcon icon={faGooglePlusG} />
                                        </Link>
                                        <Link to='#' className='footer-social-icon'>
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </Link>
                                        <Link to='#' className='footer-social-icon'>
                                            <FontAwesomeIcon icon={faPinterest} />
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='footer-copyright'>
                    <Container>
                        <Row>
                            <Col md>
                                <div className='copyright'>
                                    Copyright © 2015 <Link to='#'>Jordan Travel Agency.</Link> All rights reserved.
                                </div>
                            </Col>
                            <Col md>
                                <div className='brand-logo'>
                                    <Link to='#'>
                                        <img src={logo} alt='brand-logo' />
                                    </Link>
                                </div>
                            </Col>
                            <Col md>
                                <div className='useful-links'>
                                    <Link to='#'>Contact Us</Link>
                                    <span></span>
                                    <Link to='#'>Terms of Use</Link>
                                    <span></span>
                                    <Link to='#'>Privacy Policy</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        </>
    )
}

export default FooterSection;