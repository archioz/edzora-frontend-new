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
import { Link } from 'react-router-dom'


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
                                <a href='https://www.facebook.com/edzoraofficial/' target='_blank'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a href='https://www.instagram.com/edzora_official/' target='_blank'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>

                            </div>
                        </Col>
                        <Col md={4}>
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled ">
                                <li className="mb-2"><Link to='/about-us' className=" text-decoration-none">About us</Link></li>
                                <li className="mb-2"><Link to='/privacy-policy' className=" text-decoration-none">Privacy policy</Link></li>
                                <li className="mb-2"><Link to='/terms-of-service' className=" text-decoration-none">Terms of service</Link></li>
                                <li className="mb-2"><Link to='/refund-policy' className=" text-decoration-none">Refund policy</Link></li>
                                <li className="mb-2"><Link to='/contact' className=" text-decoration-none">Contact us</Link></li>

                            </ul>
                        </Col>
                        <Col md={4}>
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled ">
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                                    edzoraofficial@gmail.com
                                </li>
                                <li className="mb-3">
                                    <FontAwesomeIcon icon={faPhone} className="me-2" />
                                    +91 8903693309
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                                    1/11, Pasumalai, Madurai, Tamil nadu, India
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <hr className="my-5" />
                    <div className="text-center ">
                        <p className="mb-0">&copy; 2025 Edzora. All rights reserved.</p>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer