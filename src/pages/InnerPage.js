import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from '../component/breadcrumb/BreadCrumb'
import MainContent from '../component/innerpage/MainContent';
import BlogSidebar from '../component/blogpage/BlogSidebar';
import FooterSection from '../component/footer/FooterSection'

const InnerPage = () => {
  return (
      <>
          <BreadCrumb />
          <Container>
              <Row>
                  <Col md={8}>
                    <MainContent/>
                  </Col>
                  <Col md={4}>
                  <BlogSidebar />
                  </Col>
              </Row>
          </Container>
          <FooterSection/>
      </>
  )
}


export default InnerPage