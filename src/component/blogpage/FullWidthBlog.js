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
import user from "../../images/apprentice.jpg";
import article from "../../images/Petra-ruins-jordan-day-8-XL.jpg";

const FullWidthBlog = () => {
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
                                Article Title Lorem ipsum dolor sit amet, eam et quidam
                            </span>
                            <p>
                                Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem. Ad sed dolor ridens, cum te nulla rationibus. Sit no ignota interesset, id erant legere usu, pri paulo salutandi scribentur an.
                            </p>
                            <div className='read-more'>
                                <Row>
                                    <Col md>
                                        <NavLink id='read-more' to='/innerpage'>Read more</NavLink>
                                    </Col>
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
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default FullWidthBlog