import React from 'react'
import { NavLink } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import {
    faLocationDot,
    faPlus,
    faStar,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";
import custom_tour1 from "../../images/custom_tour1.png";
import custom_tour4 from "../../images/custom_tour4.png";
import Oval_plaza_in_Jerash from "../../images/Oval_plaza_in_Jerash.jpg";
import slider from "../../images/slider.jpg";
import user1 from "../../images/user1.png";

const TourMainContent = () => {
    return (
        <>
            <div className='tour-details-wrapper'>
                <div className='top-tour'>
                    <b>Petra -  one of the New Seven Wonders of the World.</b>
                    <span>
                        <FontAwesomeIcon icon={faLocationDot} />
                        Petra, Wadi Rum, The Dead Sea, Jerash, Amman, Ajloun, Karak, Dana, Wadi Rum, Madaba, and Mount Nebo   |   Private Tour
                    </span>
                    <div className='tour-card'>
                        <Row>
                            <Col md>
                                <div className='tour-card-wrapper1'>
                                    <span>starting from</span>
                                    <b>$85</b>
                                    <span>for 1 person</span>
                                </div>
                            </Col>
                            <Col md>
                                <div className='tour-card-wrapper2'>
                                    <span>7 <strong>days</strong></span>
                                    <b>/</b>
                                    <span>8 <strong>night</strong></span>
                                </div>
                            </Col>
                            <Col md>
                                <div className='tour-card-wrapper3'>
                                    <b>Petra</b>
                                    <span>Main Attraction</span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className='tour-share'>
                        <div className='tour-share-content'>
                            <span>Share this tour :</span>
                            <a href='#'>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href='#'>
                                <FontAwesomeIcon icon={faGooglePlusG} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='tour-buttons'>
                <a href='#' className='active'>Overview</a>
                <a href='#'>Reviews (525)</a>
                <a href='#'>Photos (12)</a>
                <a href='#'>Tour Itinerary</a>
                <a href='#'>Hotels Info</a>
                <a href='#'>Q&A</a>
            </div>

            <div className='tour-overview'>
                <div className='overview-image'>
                    <img src={custom_tour1} alt='tour-overview-image' />
                </div>
                <p>
                    <b>About PETRA JORDAN TOUR </b>
                    Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum.
                    Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.

                    Explore Jordan’s famous jewel, Petra, and experience the most stunning sites of Jordan in a week.

                    This trip will cover: Petra, Wadi Rum, The Dead Sea, Jerash, Amman, Ajloun, Karak, Dana, Wadi Rum, Madaba, and Mount Nebo.

                    You will be taken 2,000 years back in time to discover the city of Petra, capital of the Nabataeans. This ancient civilization carved the city into the face of mountains and today it is considered one of the New Seven Wonders of the World.

                    In the north of Jordan you will visit Gerasa (Jerash). Hidden for centuries under the sand, you will see how Jerash has stood the test of time as you wander through its colonnaded streets and grand temples.

                    Please click on any day of the itinerary below for more information!

                    <i>Please click on any day of the itinerary below for more information!</i>
                </p>
            </div>

            <div className='tour-itinerary'>
                <b>tour itinerary</b>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day One – </i>
                        <span>Airport Pickup</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day Two – </i>
                        <span>Castle of Ajloun – Jerash (ancient Gerasa) – Amman Highlight</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day Three – </i>
                        <span>On the way to Petra via the King's Highway</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day Four – </i>
                        <span>Petra</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day Five – </i>
                        <span>Wadi Rum</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day Six – </i>
                        <span>Via Wadi Araba – Jordan Valley – Mujib Bridge – Dead Sea</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className='itinerary-box'>
                    <div className='box-text'>
                        <i>Day seven – </i>
                        <span>Departure</span>
                    </div>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
            <div className='tour-gallery'>
                <span>Gallery</span>
                <div className='tour-image-gallery'>
                    <img src={custom_tour1} alt='tour-gallery' />
                    <img src={custom_tour4} alt='tour-gallery' />
                    <img src={Oval_plaza_in_Jerash} alt='tour-gallery' />
                    <img src={slider} alt='tour-gallery' />
                </div>
            </div>
            <Row>
                <Col md>
                    <div className='occupying'>
                        <b>Occupying Hotel:</b>
                        <span>Hotel preference</span>
                        <div className='tour-star-box'>
                            <div className='starts'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </div>
                    <div className='tour-image-box'>
                        <div className='preview-image'>
                            <img src={custom_tour1} />
                        </div>
                        <div className='preview-image-selector'>
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                            <img src={custom_tour1} />
                        </div>
                    </div>
                </Col>
                <Col md>
                    <div className='tour-image-details'>
                        <div className='details-header'>
                            <span>Day 1 - Le Royal Amman</span>
                            <div className='details-star'>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                        <span className='image-details-desc'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            3rd circle, zahran street, 11183 amman, jordan - <strong>show map</strong>
                        </span>
                        <hr></hr>

                        <p>
                            Towering over Amman, Le Royal is home to a luxurious 3-floor shopping mall. Panoramic fitness rooms, a mudroom and a hairdresser are available at the spa.

                            All elegant rooms at Le Royal Amman have extra-large panoramic windows with views of the city. Interactive TV and high-speed internet are available and guests are welcomed with a complimentary soft drink.
                        </p>
                        <button>find other hotels</button>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md>
                    <div className='marked-rating'>
                        <div className='marked-rating-box'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>55</span>
                    </div>
                    <div className='marked-rating'>
                        <div className='marked-rating-box'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                        </div>
                        <span>15</span>
                    </div>
                    <div className='marked-rating'>
                        <div className='marked-rating-box'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                        </div>
                        <span>10</span>
                    </div>
                    <div className='marked-rating'>
                        <div className='marked-rating-box'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                        </div>
                        <span>5</span>
                    </div>
                    <div className='marked-rating'>
                        <div className='marked-rating-box'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                            <FontAwesomeIcon icon={faStar} className='unmarked-rating' />
                        </div>
                        <span>1</span>
                    </div>
                </Col>
                <Col md>
                    <div className='marked-rating-desc'>
                        <b>Rating 4.62 from 5</b>
                        <span>Lorem ipsum dolor sit amet, congue noster per ut</span>
                    </div>
                </Col>
            </Row>
            <div className='rating-button'>
                <button>Read all reviews</button>
                <button>Write a review</button>
            </div>

            <div className='tour-feedback-user'>
                <div className='user-profile'>
                    <img src={user1} alt='user-image' />
                    <b>Debbie</b>
                    <span>Blogger</span>
                </div>

                <div className='user-feedbacks-box'>
                    <strong>“Good stay”</strong>
                    <div className='user-star-time'>
                        <div className='user-stars'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Reviewed 3 days ago</span>
                    </div>

                    <p>Has te rebum illum partiendo, autem viris gubergren an pro. Qui ea dolor delenit maluisset, has tamquam lobortis mediocritatem te, te quodsi volutpat mea. Eu vim solet tantas feugait, velit mollis scribentur est eu, quo te option euismod. Mei eirmod abhorreant moderatius ne.</p>

                    <NavLink to='#'>more</NavLink>
                </div>
            </div>

            <div className='tour-feedback-user'>
                <div className='user-profile'>
                    <img src={user1} alt='user-image' />
                    <b>Debbie</b>
                    <span>Blogger</span>
                </div>

                <div className='user-feedbacks-box'>
                    <strong>“Good stay”</strong>
                    <div className='user-star-time'>
                        <div className='user-stars'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Reviewed 3 days ago</span>
                    </div>

                    <p>Has te rebum illum partiendo, autem viris gubergren an pro. Qui ea dolor delenit maluisset, has tamquam lobortis mediocritatem te, te quodsi volutpat mea. Eu vim solet tantas feugait, velit mollis scribentur est eu, quo te option euismod. Mei eirmod abhorreant moderatius ne.</p>

                    <NavLink to='#'>more</NavLink>
                </div>
            </div>

            <div className='tour-feedback-user'>
                <div className='user-profile'>
                    <img src={user1} alt='user-image' />
                    <b>Debbie</b>
                    <span>Blogger</span>
                </div>

                <div className='user-feedbacks-box'>
                    <strong>“Good stay”</strong>
                    <div className='user-star-time'>
                        <div className='user-stars'>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <span>Reviewed 3 days ago</span>
                    </div>

                    <p>Has te rebum illum partiendo, autem viris gubergren an pro. Qui ea dolor delenit maluisset, has tamquam lobortis mediocritatem te, te quodsi volutpat mea. Eu vim solet tantas feugait, velit mollis scribentur est eu, quo te option euismod. Mei eirmod abhorreant moderatius ne.</p>

                    <NavLink to='#'>more</NavLink>
                </div>
            </div>


            <div className='share-item'>
                <div className='tour-share'>
                    <div className='tour-share-content'>
                        <span>Share this tour :</span>
                        <a href='#'>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href='#'>
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TourMainContent