import React from "react";
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from 'react-elastic-carousel';
import ReactPlayer from 'react-player'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
} from "@fortawesome/free-solid-svg-icons";
import user1 from "../../images/user1.png";


const FeedbackSection = () => {


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 2 },
    ]


    return (
        <>
            <section id='feedback'>
                <Container>
                    <Row>
                        <Col md>
                            <div className="section-title">
                                <h2>Our clients Feedback</h2>
                                <hr></hr>
                            </div>
                        </Col>
                    </Row>
                    <Carousel breakPoints={breakPoints}>
                        <div className='feedback-item'>
                            <div className="feedback-content">
                                <div className="feedback-text">
                                    <p>
                                        Words will fail how to describe our gratefulness with the Travel Jordan Agency and to Mr. Hani for his assistance all throughout with our tour in Jordan.
                                    </p>
                                    <p>
                                        As amatuer in travel uncertainty cannot be avoided but with the help of Mr. Hani and the Travel Jordan Agency everything was erased and excitement took place. From the marketing strategy up to the assistance with our needs? Its all "WOW"!
                                    </p>
                                    <p>
                                        With the goal of having an adventurous and enjoyable trip well, all I can say is GOALS MET!
                                    </p>
                                </div>
                                <div className="feedback-user">
                                    <div className="user-image">
                                        <img src={user1} alt='user-pro-pic' />
                                        <div className="user-name">
                                            <b>Debbie</b>
                                            <span>blogger</span>
                                        </div>
                                    </div>
                                    <div className="user-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='feedback-item'>
                            <div className="feedback-content">
                                <div className="feedback-text video-feedback">
                                    <ReactPlayer width='100%' height='210px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                                    <p>
                                        Nunc vitae volutpat dui. Integer urna ex, porttitor ac euismod quis, blandit ut ligula. Ut tincidunt ligula in pulvinar hendrerit.


                                        <p>
                                            Nunc vitae volutpat dui. Integer urna ex, porttitor ac euismod quis, blandit ut ligula. Ut tincidunt ligula in pulvinar hendrerit.
                                        </p>
                                    </p>
                                </div>
                                <div className="feedback-user">
                                    <div className="user-image">
                                        <img src={user1} alt='user-pro-pic' />
                                        <div className="user-name">
                                            <b>Debbie</b>
                                            <span>blogger</span>
                                        </div>
                                    </div>
                                    <div className="user-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='feedback-item'>
                            <div className="feedback-content">
                                <div className="feedback-text">
                                    <p>
                                        Words will fail how to describe our gratefulness with the Travel Jordan Agency and to Mr. Hani for his assistance all throughout with our tour in Jordan.
                                    </p>
                                    <p>
                                        As amatuer in travel uncertainty cannot be avoided but with the help of Mr. Hani and the Travel Jordan Agency everything was erased and excitement took place. From the marketing strategy up to the assistance with our needs? Its all "WOW"!
                                    </p>
                                    <p>
                                        With the goal of having an adventurous and enjoyable trip well, all I can say is GOALS MET!
                                    </p>
                                </div>
                                <div className="feedback-user">
                                    <div className="user-image">
                                        <img src={user1} alt='user-pro-pic' />
                                        <div className="user-name">
                                            <b>Debbie</b>
                                            <span>blogger</span>
                                        </div>
                                    </div>
                                    <div className="user-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='feedback-item'>
                            <div className="feedback-content">
                                <div className="feedback-text video-feedback">
                                    <ReactPlayer controls='true' width='100%' height='210px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                                    <p>
                                        Nunc vitae volutpat dui. Integer urna ex, porttitor ac euismod quis, blandit ut ligula. Ut tincidunt ligula in pulvinar hendrerit.


                                        <p>
                                            Nunc vitae volutpat dui. Integer urna ex, porttitor ac euismod quis, blandit ut ligula. Ut tincidunt ligula in pulvinar hendrerit.
                                        </p>
                                    </p>
                                </div>
                                <div className="feedback-user">
                                    <div className="user-image">
                                        <img src={user1} alt='user-pro-pic' />
                                        <div className="user-name">
                                            <b>Debbie</b>
                                            <span>blogger</span>
                                        </div>
                                    </div>
                                    <div className="user-rating">
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                        <FontAwesomeIcon icon={faStar} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </Container>
            </section>
        </>
    )
}


export default FeedbackSection;