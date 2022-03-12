import React from 'react'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../css/Style.css'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightLong,
    faCircle,
    faAngleLeft,
    faAngleRight,
    faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import article from "../../images/Petra-ruins-jordan-day-8-XL.jpg";

const BlogSidebar = () => {
    return (
        <>
            <div className='blog-slideBar'>
                <div className='blog-sidebar-top'>
                    <span id='sidebar-title'>Subnavigation</span>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/'>home</NavLink>
                        </li>
                        <li className='sideBar-submenu'>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/'>About Jordan</NavLink>
                            <ul className='sideBar-sideMenus'>
                                <li>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <NavLink to='/'>Subnavigation link</NavLink>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <NavLink to='/'>Subnavigation link</NavLink>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <NavLink to='/'>Subnavigation link</NavLink>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCircle} />
                                    <NavLink to='/'>Subnavigation link</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/agency'>Agency</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/'>Client Feedback</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/blog'>Blog</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightLong} />
                            <NavLink to='/'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='blog-sidebar-middle'>
                    <div className='middle-slider'>
                        <FontAwesomeIcon className='middle-slider-leftIcon' icon={faAngleLeft}/>
                        <FontAwesomeIcon className='middle-slider-RightIcon' icon={faAngleRight}/>
                        <b>Category Name</b>
                        <hr></hr>
                        <p>Article Title Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className='blog-sidebar-bottom'>
                    <span id='sidebar-title'>Categories</span>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/agency'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/blog'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faAnglesRight} />
                            <NavLink to='/'>Category Name  Lorem Ipsum</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}


export default BlogSidebar