import React from 'react'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../css/Style.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
    faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";
import user from "../../images/apprentice.jpg";
import article from "../../images/Petra-ruins-jordan-day-8-XL.jpg";

const MainContent = () => {
    return (
        <>
            <Row>
                <Col md>
                    <div className='fullWidth-wrapper'>
                        <div className='fullWidth-top'>
                            <div className='article-image'>
                                <img src={article} alt='article' />
                            </div>
                            <span>category name</span>
                        </div>
                        <div className='fullWidth-bottom'>
                            <span className='blog-title'>
                                Article Lorem ipsum dolor sit amet, eam et quidam
                            </span>

                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <div className='post-by'>
                                            <div className='user-image'>
                                                <img src={user} atl='user' />
                                            </div>
                                            <span>admin</span>
                                        </div>
                                    </Col>
                                    <Col md>
                                        <div className='article-rating'>
                                            <span>Rating : </span>
                                            <span> 3.8/5</span>
                                        </div>
                                    </Col>
                                    <Col md>
                                        <div className='article-comments'>
                                            <div className='total-comment'>
                                                <FontAwesomeIcon icon={faComment} />
                                                <span> 6</span>
                                            </div>
                                            <div className='total-like'>
                                                <FontAwesomeIcon icon={faHeart} />
                                                <span> 6</span>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <p className='inner-desc'>
                                    Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                                </p>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <div className='inner-middle-content'>
                        <h1>Lorem ipsum dolor sit amet h1</h1>
                        <p>
                            Die Volg Detailhandels AG gehört zur fenaco und ist seit vielen Jahren auf den kleinflächigen Lebesmitteldetailhandel konzentriert. Die Prima-Läden können von den grossen Erfahrungen profitieren, welche Volg mit der Betreuung und Belieferung von Dorfläden erworben hat.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <div className='agency-content-wrapper' >
                        <div className='agency-image' id='innerPage-middle-Image'>
                            <img src={article} alt='agency' />
                        </div>
                    </div>
                </Col>
                <Col md>
                    <div className='agency-content-wrapper' id='innerPage-image-desc'>
                        <p>
                            Vestibulum dictum elit id magna vulputate, sed pulvinar ante gravida. Mauris tincidunt, felis semper mollis molestie
                        </p>
                        <ul>
                            <li>Sed et lorem non purus rhoncus posuere.</li>
                            <li>Sed et lorem non purus rhoncus posuere.</li>
                            <li>Mauris nec augue placerat, blandit nulla sem.</li>
                            <li>Morbi ut elit vehicula, elementum massa non leo..</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md>
                    <div className='inner-middle-bottom'>
                        <h2>Lorem ipsum dolor sit amet h2</h2>
                        <p>
                            Die Volg Detailhandels AG gehört zur fenaco und ist seit vielen Jahren auf den kleinflächigen Lebesmitteldetailhandel konzentriert. Die Prima-Läden können von den grossen Erfahrungen profitieren, welche Volg mit der Betreuung und Belieferung von Dorfläden erworben hat. Blindtext bzw. Link. Weitere wichtige texte zu Prima.
                        </p>
                        <span>
                            <FontAwesomeIcon icon={faQuoteLeft} />
                            “Pri aeque dicit interpretaris te, id falli audiam detracto per. Cetero volutpat deterruisset usu ut, vero facete consequat vis ea. Id vel diam mollis. “
                        </span>
                        <h3>Lorem ipsum dolor sit amet h3</h3>
                        <p>
                            Die Volg Detailhandels AG gehört zur fenaco und ist seit vielen Jahren auf den kleinflächigen Lebesmitteldetailhandel konzentriert. Die Prima-Läden können von den grossen Erfahrungen profitieren, welche Volg mit der Betreuung und Belieferung von Dorfläden erworben hat.
                        </p>
                    </div>
                </Col>
            </Row>
            <div className='inner-buttons'>
                <b>buttons</b>
                <Row>
                    <Col md>
                        <button>read more</button>
                    </Col>
                    <Col md>
                        <button>read more</button>
                    </Col>
                    <Col md>
                        <button>read more</button>
                    </Col>
                    <Col md>
                        <button>read more</button>
                    </Col>
                </Row>
                <p>
                    Die Volg Detailhandels AG gehört zur fenaco und ist seit vielen Jahren auf den kleinflächigen Lebesmitteldetailhandel konzentriert. Die Prima-Läden können von den grossen Erfahrungen profitieren, welche Volg mit der Betreuung und Belieferung von Dorfläden erworben hat.
                </p>
            </div>

            <div className='inner-bottom-section'>
                <Row>
                    <Col md>
                        <div className='inner-bottom-image'>
                            <img src={article} alt='bottom-image' />
                        </div>
                    </Col>
                    <Col md>
                        <div className='inner-bottom-image'>
                            <img src={article} alt='bottom-image' />
                        </div>
                    </Col>
                </Row>
                <p>
                    Die Volg Detailhandels AG gehört zur fenaco und ist seit vielen Jahren auf den kleinflächigen Lebesmitteldetailhandel konzentriert. Die Prima-Läden können von den grossen Erfahrungen profitieren, welche Volg mit der Betreuung und Belieferung von Dorfläden erworben hat.
                </p>
            </div>
        </>
    )
}


export default MainContent