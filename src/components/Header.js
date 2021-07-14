import React from 'react'
import {Container, Navbar, Nav, } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="secondary" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#home">SVU-API</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">ABOUT</Nav.Link>
                    <Nav.Link href="#link">DOCS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}
