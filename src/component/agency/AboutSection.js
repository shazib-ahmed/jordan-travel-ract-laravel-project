import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../css/Style.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import banner1 from "../../images/banner1.jpg";


const AboutSection = () => {
  return (
    <>
      <section id='agency-about'>
        <Container>
          <Row>
            <Col md>
              <div className="section-title">
                <h2>About <strong>agency</strong></h2>
                <span>
                  some information about agency
                </span>
                <hr></hr>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md>
              <div className='agency-content-wrapper'>
                <h3>Lorem ipsum dolor sit amet, assum quidam te nec</h3>
                <div className='agency-social'>
                  <ul>
                    <li>
                      <NavLink to='#'>
                        <FontAwesomeIcon icon={faFacebookF} />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>
                        <FontAwesomeIcon icon={faTwitter} />
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to='#'>
                        <FontAwesomeIcon icon={faGooglePlusG} />
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md>
              <div className='agency-content-wrapper'>
                <div className='agency-image'>
                  <img src={banner1} alt='agency' />
                </div>
              </div>
            </Col>
            <Col md>
              <div className='agency-content-wrapper'>
                <span>
                  Travel <strong>Jordan</strong> Agency
                </span>
                <p>
                  Quot autem fierent vix ex. Possim similique vituperata eu pro, erat aperiam singulis at duo, usu ea utinam sapientem similique. Ius id quaeque blandit, mei stet forensibus complectitur eu.
                </p>
                <b>Populo delenit recusabo est in, in cum quas vulputate:</b>
                <ul>
                  <li>Sed et lorem non purus rhoncus posuere.</li>
                  <li>Sed et lorem non purus rhoncus posuere.</li>
                  <li>Mauris nec augue placerat, blandit nulla sem.</li>
                  <li>Morbi ut elit vehicula, elementum massa non leo..</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AboutSection;