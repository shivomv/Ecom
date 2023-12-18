import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const View2 = () => {
  return (
    <>
      <Navbar expand="lg" >
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand>Hello</Navbar.Brand>
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <Nav.Link as={Link} to='/view1'>View1</Nav.Link>
            <Nav.Link as={Link} to='/view2'>View2</Nav.Link>
            <Nav.Link as={Link} to='/view3'>View3</Nav.Link>
            <Nav.Link as={Link} to='/view4'>View4</Nav.Link>
            <Nav.Link as={Link} to='/view5'>View5</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default View2