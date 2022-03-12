import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomTour from '../component/customtour/CustomTour';
import CustomTourSideBar from '../component/customtour/CustomTourSideBar';
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';

const CustomTourPage = () => {
  return (
      <>
      <BreadCrumb/>
      <Container>
          <Row>
              <Col md={6}>
                <CustomTour/>
              </Col>
              <Col md={6}>
                <CustomTourSideBar/>
              </Col>
          </Row>
      </Container>
      <FooterSection/>
      </>
  )
}

export default CustomTourPage