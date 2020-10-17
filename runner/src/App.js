// eslint-disable-next-line
import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import {Table} from 'react-bootstrap'
function App(){
  return (
    <div className='container'>
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
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Username</th>
                      <th>Age</th>
                      <th>Sex</th>
                      <th>Distance <i class="fa fa-sort"></i></th>
                      <th>Avg Pace <i class="fa fa-sort"></i></th>
                      <th>Total Time <i class="fa fa-sort"></i></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>25</td>
                      <td>Male</td>
                      <td>5000</td>
                      <td>100</td>
                      <td>25</td>
                    </tr>
                  </tbody>
                </Table>
    </div>
  );
}

export default App;
