import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FullWidthBlog from '../component/blogpage/FullWidthBlog';
import TwoColumnBlog from '../component/blogpage/TwoColumnBlog';
import BlogSidebar from '../component/blogpage/BlogSidebar';
import BreadCrumb from '../component/breadcrumb/BreadCrumb';
import FooterSection from '../component/footer/FooterSection';

const BlogPage = () => {
    return (
        <>
            <BreadCrumb/>
            <Container id='BlogSection'>
                <Row>
                    <Col md={8}>
                        <FullWidthBlog />
                        <TwoColumnBlog />
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

export default BlogPage