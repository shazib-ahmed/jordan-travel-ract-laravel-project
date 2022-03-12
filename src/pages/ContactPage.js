import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from '../component/contactpage/ContactForm';
import ContactSidebar from '../component/contactpage/ContactSidebar';
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';
{/* import GoogleMaps from '../component/contactpage/GoogleMaps'; */}

const ContactPage = () => {
  return (
    <>
      <BreadCrumb />
      <Container>
        <Row>
          <Col md={8}>
            <ContactForm />
          </Col>
          <Col md={4}>
            <ContactSidebar />
          </Col>
        </Row>
      </Container>
      {/* <GoogleMaps /> */}
      <FooterSection />
    </>
  )
}

export default ContactPage