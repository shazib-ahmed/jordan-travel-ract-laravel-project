import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';
import Testimonial from '../component/testimonial/Testimonial';
import TestimonialSidebar from '../component/testimonial/TestimonialSidebar';

const TestimonialPage = () => {
    return (
        <>
            <BreadCrumb />
            <Container>
                <Row>
                    <Col md>
                        <div className="section-title">
                            <h2>Why People <strong>Say</strong></h2>
                            <span className='feedBack-Page-tile'>
                                some information about agency
                            </span>
                            <hr></hr>
                            <span className='feedBack-page-desc'>As local tour operator we will show you the best places to visit in jordan,also this page will guide you what each attraction has to offer.</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <Testimonial />
                    </Col>
                    <Col md={4}>
                        <TestimonialSidebar />
                    </Col>
                </Row>
            </Container>
            <FooterSection />
        </>
    )
}


export default TestimonialPage