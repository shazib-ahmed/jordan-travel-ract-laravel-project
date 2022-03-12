import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const BreadCrumb = () => {

  let getPageTitle = window.location.pathname.toString()
  let pageTitle = getPageTitle.slice( 1 )

  return (
    <>
      <section id='breadCrumb' className="hero-slider">
        <Container>
          <Row>
            <Col md>
              <div className='breadcrumb-content'>
                <h2>{ pageTitle }</h2>
                <ul>
                  <li>
                    <NavLink to='#'>
                      <FontAwesomeIcon icon={faHouseChimney} />
                      home
                    </NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <NavLink to='#'>
                      Innerpage Title
                    </NavLink>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </li>
                  <li>
                    <NavLink to='#'>
                      3rd Level Innerpage
                    </NavLink>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default BreadCrumb;