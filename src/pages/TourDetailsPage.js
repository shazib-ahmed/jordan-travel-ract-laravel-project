import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from '../component/breadcrumb/BreadCrumb'
import TourMainContent from '../component/tourdetails/TourMainContent'
import TourDetailsSideBar from '../component/tourdetails/TourDetailsSideBar'
import FooterSection from '../component/footer/FooterSection'

const TourDetailsPage = () => {
    return (
        <>
            <BreadCrumb />
            <Container>
                <Row>
                    <Col md={8}>
                        <TourMainContent />
                    </Col>
                    <Col md={4}>
                        <TourDetailsSideBar />
                    </Col>
                </Row>
            </Container>
            <FooterSection />
        </>
    )
}

export default TourDetailsPage