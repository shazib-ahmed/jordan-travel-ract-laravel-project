import React from 'react'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../css/Style.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faComment,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import article from "../../images/Petra-ruins-jordan-day-8-XL.jpg";

const TwoColumnBlog = () => {
    return (
        <>
            <Row>
                <Col md={6}>
                    <div className='fullWidth-wrapper'>
                        <div className='fullWidth-top'>
                            <div className='article-image'>
                                <img src={article} alt='article' />
                            </div>
                            <span>category name</span>
                        </div>
                        <div className='fullWidth-bottom two-column-bottom'>
                            <span className='blog-title'>
                                Article Title Lorem ipsum dolor sit amet, eam et quidam
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                            </p>
                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <NavLink id='read-more' to='#'>Read more</NavLink>
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
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='fullWidth-wrapper'>
                        <div className='fullWidth-top'>
                            <div className='article-image'>
                                <img src={article} alt='article' />
                            </div>
                            <span>category name</span>
                        </div>
                        <div className='fullWidth-bottom two-column-bottom'>
                            <span className='blog-title'>
                                Article Title Lorem ipsum dolor sit amet, eam et quidam
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                            </p>
                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <NavLink id='read-more' to='#'>Read more</NavLink>
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
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='fullWidth-wrapper'>
                        <div className='fullWidth-top'>
                            <div className='article-image'>
                                <img src={article} alt='article' />
                            </div>
                            <span>category name</span>
                        </div>
                        <div className='fullWidth-bottom two-column-bottom'>
                            <span className='blog-title'>
                                Article Title Lorem ipsum dolor sit amet, eam et quidam
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                            </p>
                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <NavLink id='read-more' to='#'>Read more</NavLink>
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
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='fullWidth-wrapper'>
                        <div className='fullWidth-top'>
                            <div className='article-image'>
                                <img src={article} alt='article' />
                            </div>
                            <span>category name</span>
                        </div>
                        <div className='fullWidth-bottom two-column-bottom'>
                            <span className='blog-title'>
                                Article Title Lorem ipsum dolor sit amet, eam et quidam
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                            </p>
                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <NavLink id='read-more' to='#'>Read more</NavLink>
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
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default TwoColumnBlog