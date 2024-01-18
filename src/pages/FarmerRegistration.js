import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import Navbar from '../component/Navbar';
import Layout from '../component/Layout';
import '../static/page.css';

const FarmerRegistration = () => {
  const [formData, setFormData] = useState({
    // ... your existing state properties
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... your existing form submission logic
  };

  const validateForm = (data) => {
    const errors = {};
    // ... your existing validation logic
    return errors;
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Container>
          <Form className="mt-2" onSubmit={handleSubmit}>
            <h2 className="mb-4 farmer">Farmer Registration</h2>

            <Row className="mb-1" style={{width:'30rem'}}>
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Aadhaar Card No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
              </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.middleName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.middleName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Village</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.village}
                    onChange={handleInputChange}
                    isInvalid={!!errors.village}
                  />
                  <Form.Control.Feedback type="invalid">{errors.village}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Cluster</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.cluster}
                    onChange={handleInputChange}
                    isInvalid={!!errors.cluster}
                  />
                  <Form.Control.Feedback type="invalid">{errors.cluster}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Place</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.place}
                    onChange={handleInputChange}
                    isInvalid={!!errors.place}
                  />
                  <Form.Control.Feedback type="invalid">{errors.place}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Religion</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={formData.religion}
                    onChange={handleInputChange}
                    isInvalid={!!errors.religion}
                  />
                  <Form.Control.Feedback type="invalid">{errors.religion}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Pan Card Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.panCardNumber}
                    onChange={handleInputChange}
                    isInvalid={!!errors.panCardNumber}
                  />
                  <Form.Control.Feedback type="invalid">{errors.panCardNumber}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select type="Marital Status" placeholder="Choose" >
                    <option>Choose...</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Birth Data</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Birth Date"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select type="Last Name" placeholder="Enter Your Gender">
                    <option>Choose...</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Qualification"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Permanent Address"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Other Activity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Mobile Number"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>


            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Email"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>Kisan Khazana Card No.</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Employee Code</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Mobile Number"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>


            <Row className="mb-3">
              <Col>
                <Form.Group controlId="firstName">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Permanent Address"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.firstName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="lastName">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">{errors.lastName}</Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="email">
                  <Form.Label>Payment Bank Name</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Mobile Number"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            {/* Add more rows for additional fields */}

            <Button className="mb-3 ms-4 center" variant="primary" type="Save">
              Save
            </Button>
            <Button className="mb-3 ms-4 center" variant="warning" type="Clear">
              Clear
            </Button>
            <Button className="mb-3 ms-4 center" variant="warning" type="Exit">
              Exit
            </Button>
          </Form>
        </Container>
      </Layout>
    </>
  );
};

export default FarmerRegistration;
