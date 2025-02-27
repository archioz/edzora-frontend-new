import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card, Form } from 'react-bootstrap'
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons'

import {
    faRocket,
    faShieldHalved,
    faGem,
    faCreditCard,
    faQuestionCircle,
    faEnvelope,
    faPhone,
    faLocationDot,
    faArrowRight,
    faStar
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
    return (
        <>
            <footer className="text-light py-5">
                <Container>
                    <Row className="g-4">
                        <Col md={4}>
                            <h5>About Edzora</h5>
                            <p className="">Your premier destination for premium digital products and solutions that elevate your professional workflow.</p>
                            <div className="social-icons d-flex gap-3">
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTwitter} />
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div>
                        </Col>
                        <Col md={4}>
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled ">
                                <li className="mb-2"><a href="#home" className=" text-decoration-none">Home</a></li>
                                <li className="mb-2"><a href="#products" className=" text-decoration-none">Products</a></li>
                                <li className="mb-2"><a href="#about" className=" text-decoration-none">About Us</a></li>
                                <li className="mb-2"><a href="#contact" className=" text-decoration-none">Contact</a></li>
                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled ">
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                    support@digitalmarket.com
                                </li>
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                                    +1 (555) 123-4567
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                                    123 Digital Street, Tech City
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr className="my-5" />
                    <div className="text-center ">
                        <p className="mb-0">&copy; 2024 DigitalMarket. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer