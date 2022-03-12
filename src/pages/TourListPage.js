import React from 'react'
import TourSearchBar from '../component/tourlist/TourSearchBar'
import TourSearchResult from '../component/tourlist/TourSearchResult'
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';

const TourListPage = () => {
    return (
        <>
            <BreadCrumb />
            <Container>
                <Row>
                    <Col md={4}>
                        <TourSearchBar />
                    </Col>
                    <Col md={8}>
                        <TourSearchResult />
                    </Col>
                </Row>
            </Container>
            <FooterSection />
        </>
    )
}


export default TourListPage