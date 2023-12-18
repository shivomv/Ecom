import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const SignUp = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const validationErrors = {};
    if (!formData.customerName) {
      validationErrors.customerName = 'Customer name is required';
    }
    if (!formData.mobileNumber) {
      validationErrors.mobileNumber = 'Mobile number is required';
    }
    if (!formData.password) {
      validationErrors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    // If there are validation errors, update the state and return
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If validation passes, continue with your signup logic
    console.log('Form submitted:', formData);
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="bg-light">
              <h2 className="text-center mb-0">Sign Up</h2>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="customerName">
                  <Form.Label>Customer Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="customerName"
                    placeholder="Enter your name"
                    value={formData.customerName}
                    onChange={handleChange}
                    autoComplete=''
                    required
                  />
                  {errors.customerName && <div className="text-danger">{errors.customerName}</div>}
                </Form.Group>

                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number:</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter your mobile number"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    autoComplete=''
                    required
                  />
                  {errors.mobileNumber && <div className="text-danger">{errors.mobileNumber}</div>}
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete=''
                    required
                  />
                  {errors.password && <div className="text-danger">{errors.password}</div>}
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password" 
                    required
                  />
                  {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                  Sign Up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
