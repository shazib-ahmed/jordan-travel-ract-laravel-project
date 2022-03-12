import React from "react";
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faImage,
    faCalendarDays,
    faUserGroup,
    faStar,
    faCaretUp,
    faAnglesRight,
    faAngleLeft,
    faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <>
            <header id="header">
                <div className="hero-slider">
                    <div id="slider-left-icon">
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </div>
                    <div id="slider-right-icon">
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                    <Container>
                        <Row>
                            <Col md>
                                <div className="slider-content">
                                    <div className="slider-search-box">
                                        <div className="slider-box-top">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                            <input placeholder="search offers" />
                                        </div>
                                        <div className="slider-box-middle">
                                            <FontAwesomeIcon id="middle-box-arrow" icon={faCaretUp} />
                                            <div className="slider-input-box mb-3">
                                                <input placeholder="Select attraction" />
                                                <span>
                                                    <FontAwesomeIcon icon={faImage} />
                                                </span>
                                            </div>
                                            <div className="slider-box-double">
                                                <div className="slider-input-box">
                                                    <input placeholder="Arrival" />
                                                    <span>
                                                        <FontAwesomeIcon icon={faCalendarDays} />
                                                    </span>
                                                </div>
                                                <div className="slider-input-box">
                                                    <input placeholder="Departure" />
                                                    <span>
                                                        <FontAwesomeIcon icon={faCalendarDays} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="slider-box-double">
                                                <div className="slider-input-box">
                                                    <input placeholder="Adults" />
                                                    <span>
                                                        <FontAwesomeIcon icon={faUserGroup} />
                                                    </span>
                                                </div>
                                                <div className="slider-input-box">
                                                    <input placeholder="Children" />
                                                    <span>
                                                        <FontAwesomeIcon icon={faUserGroup} />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="slider-input-box">
                                                <input placeholder="Hotel Preference" />
                                                <span>
                                                    <FontAwesomeIcon icon={faStar} />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="slider-bottom-box">
                                            <Link to="#">search for tours</Link>
                                            <Link to="#">
                                                <FontAwesomeIcon icon={faAnglesRight} />
                                                advanced search
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="special-offer-hero">
                                        <div className="special-offer-top">
                                            <span>Special offers to</span>
                                        </div>
                                        <div className="special-offer-middle">
                                            <div className="offer-left">
                                                <span>PETRA, JORDAN</span>
                                            </div>
                                            <div className="offer-right">
                                                <span>started at</span>
                                                <span>$85</span>
                                            </div>
                                        </div>
                                        <div className="special-offer-bottom">
                                            <i>Price is per person and it includes all taxes and fees.</i>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </header>
        </>
    );
}

export default HeroSection;