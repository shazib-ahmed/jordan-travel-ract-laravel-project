import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';
import Places from '../component/places/Places';

const PlacesPage = () => {
  return (
    <>
      <BreadCrumb />
      <Container>
        <Row>
          <Col md>
            <div className="section-title">
              <h2>Places <strong>To Visit</strong></h2>
              <span className='feedBack-Page-tile'>
                some information about agency
              </span>
              <hr></hr>
              <span className='feedBack-page-desc'>As local tour operator we will show you the best places to visit in jordan,also this page will guide you what each attraction has to offer.</span>
            </div>
          </Col>
        </Row>
        <Places/>
      </Container>
      <FooterSection />
    </>
  )
}


export default PlacesPage