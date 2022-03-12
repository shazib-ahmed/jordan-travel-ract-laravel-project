import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXmark,
  faLocationDot,
  faPerson,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import banner2 from "../../images/banner2.jpg";

const TourSearchResult = () => {
  return (
    <>
      <div className='tour-result-wrapper'>
        <span className='result-title'>
          25 Search Results
        </span>

        <div className='search-category'>
          <span>2 Adult</span>
          <span>
            $30 - $100
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <span>
            Hiking
            <FontAwesomeIcon icon={faXmark} />
          </span>
          <select>
            <option>Sort by</option>
          </select>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>


        <div className='tour-result-details'>
          <Row>
            <Col md={4}>
              <div className='result-wrapper'>
                <div className='result-image'>
                  <img src={banner2} alt='result-image' />
                  <div className='top-span'>
                    <span>8</span>
                    <span>days</span>
                  </div>
                  <div className='bottom-span'>
                    <span>starting</span>
                    <span>$88</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={7}>
              <div className='result-wrapper' id='middle-wrapper'>
                <div className='special-offer'>
                  <span>Special offer</span>
                </div>
                <b>Petra Jordan tour</b>
                <span><FontAwesomeIcon icon={faLocationDot} />Location Region Street Name Number</span>
                <p>
                  Journey back in time to the lost ancient Nabataean kingdom. Donec molestie sed sem sed bibendum. Quisque sit amet tempus nisi, et euismod magna. In at lacus at dolor lobortis.
                </p>

                <div className='tour-result-icon'>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                  <NavLink to='/'>
                    <FontAwesomeIcon icon={faPerson} />
                  </NavLink>
                </div>

                <button>More info</button>
              </div>
            </Col>
            <Col md={1}>
              <div className='result-wrapper'>
                <div className='right-result-content'>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Details</span>
                  </div>
                  <div className='result-grid-right'>
                    <FontAwesomeIcon icon={faListCheck} />
                    <span>Reserve</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default TourSearchResult