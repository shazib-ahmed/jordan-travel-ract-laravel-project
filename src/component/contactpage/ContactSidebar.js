import React from 'react'
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faTty,
  faEnvelope,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";


const ContactSidebar = () => {
  return (
    <>
      <div className='request-tour'>
        <NavLink to='/custom-tour'>
          <FontAwesomeIcon icon={faBars} />
          <h4>Request a Tour</h4>
        </NavLink>
      </div>
      <div className='contact-info'>
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
      </div>
    </>
  )
}

export default ContactSidebar