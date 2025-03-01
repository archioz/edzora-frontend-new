import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col, Card, Form } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar expand="lg" fixed="top" className="navbar">
                <Container>
                    <Navbar.Brand href="/">Edzora</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#products">Products</Nav.Link>
                            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header