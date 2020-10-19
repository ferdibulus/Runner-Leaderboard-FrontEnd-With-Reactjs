import React, { Component } from 'react'
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Runner Leaderboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="https://www.technocodee.com/">@created by ferdibulus</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                <hr></hr>
                <br/>
            </div>
        )
    }
}
