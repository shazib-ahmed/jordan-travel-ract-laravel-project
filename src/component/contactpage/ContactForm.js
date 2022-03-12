import React from 'react'
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
    return (
        <>
            <section className='contact-section'>
                <Row>
                    <Col md>
                        <div className="form-title">
                            <h3>Contact Form</h3>
                            <p>Lorem ipsum dolor sit amet, eam et quidam aeterno quaerendum. Option patrioque intellegebat est te. Laoreet imperdiet dissentias nec an. Eos at habemus definitionem.</p>
                        </div>
                    </Col>
                </Row>
                <div className='form-box'>
                    <Row>
                        <Col md>
                            <div className='box-content'>
                                <label>* First Name</label>
                                <input placeholder='First Name' />
                            </div>
                        </Col>
                        <Col md>
                            <div className='box-content'>
                                <label>* Last Name</label>
                                <input placeholder='Last Name' />
                            </div>
                        </Col>
                    </Row>
                    <div className='box-content'>
                        <label>* Lorem Ipsum</label>
                        <input placeholder='Lorem Ipsum' />
                    </div>
                    <div className='box-content'>
                        <label>* Lorem Ipsum</label>
                        <input placeholder='Lorem Ipsum' />
                    </div>
                    <div className='box-content'>
                        <label>* Message</label>
                        <textarea placeholder='Message'></textarea>
                    </div>                    
                </div>
                <div className='contact-button'>
                        <button>Send</button>
                    </div>
            </section>
        </>
    )
}

export default ContactForm