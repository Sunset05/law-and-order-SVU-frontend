import React from 'react'
import {Container, Navbar, Nav, } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="secondary" expand="lg" >
            <Container fluid>
                <Navbar.Brand href="/">SVU-API</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/about">ABOUT</Nav.Link>
                    <Nav.Link href="/docs">DOCS</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}
