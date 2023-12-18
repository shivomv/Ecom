import React from 'react';
import {  Container, Navbar, Nav, Button, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Assets/img/logo.png'

const Mynav = () => {
  const [showLoginModal, setShowLoginModal] = React.useState(false);
  const [showSearchModal, setShowSearchModal] = React.useState(false);

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleLoginModalShow = () => setShowLoginModal(true);

  const handleSearchModalClose = () => setShowSearchModal(false);
  const handleSearchModalShow = () => setShowSearchModal(true);

  return (
    <>
      <Navbar className='sticky-top bg-nav'>
        < Container>
          <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src={logo}
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav className="mx-auto">
            <div className="d-none d-md-flex">
              <Form className="d-flex me-2">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="mr-2 border border-dark"
                />
                <Button variant="outline-dark" >
                  <i className="fas fa-search"></i>
                </Button>
              </Form>
            </div>
            <div className="d-md-none">
              <Button variant="outline-dark" onClick={handleSearchModalShow}>
                <i className="fas fa-search"></i>
              </Button>
            </div>
          </Nav>
          <Nav className="navright">
            <Button variant="outline-dark" onClick={handleLoginModalShow}>
              <span className="d-none d-md-flex">Login</span>
              <span className="d-md-none">
                <i className="fas fa-user"></i>
              </span>
            </Button>
            <Nav.Link className="text-danger"  as={Link} to='favorite'>
              <i className="fas fa-heart"></i>
            </Nav.Link>
            <Nav.Link as={Link} to='cart'>
              <i className="fas fa-cart-shopping"></i> <sup className="text-danger text-bolder">23</sup>
            </Nav.Link>
          </Nav>
        </ Container>
      </Navbar>

      {/* Search Modal */}
      <Modal show={showSearchModal} onHide={handleSearchModalClose}>
        <Modal.Body>
          {/* Include the search form within the modal body */}
          <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="mr-2 border border-dark"
            />
            <Button variant="outline-dark" type="submit">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Your login form goes here */}
          <Form>
            <Form.Group controlId="formUsername">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter your username" autoComplete="username" />
            </Form.Group>
            <Form.Group controlId="formPassword" className='mt-3'>
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" autoComplete="current-password" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Login
            </Button>
            <div className="mt-3">
              <p>Don't have an account? <Link to='/signup' onClick={handleLoginModalClose}>Sign up</Link></p>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Mynav;
