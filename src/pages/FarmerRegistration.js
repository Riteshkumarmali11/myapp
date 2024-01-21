<<<<<<< HEAD
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../component/Layout";
import Navbar from "../component/Navbar";
import "../static/page.css";

=======
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Layout from '../component/Layout';
import Navbar from '../component/Navbar';
import '../static/page.css';
//hiii  compcare
>>>>>>> aa90ede4916642a8e814a6b2b164fe33d56ac076
const FarmerRegistration = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ... your existing form submission logic
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, birthDate: date });
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const panCardRegex = /^[A-Z]{5}\[1-9]{4}[A-Z]$/; // Updated PAN card format regex

    if (!formData.Email || !emailRegex.test(formData.Email)) {
      newErrors.Email = "Enter a valid email address";
    }

    if (!formData.PanCard || !panCardRegex.test(formData.PanCard)) {
      newErrors.PanCard = "Enter a valid PAN card number";
    }

    // ... additional field validations
    // Example: Validate Mobile Number
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.MobileNumber || !mobileRegex.test(formData.MobileNumber)) {
      newErrors.MobileNumber = "Enter a valid 10-digit mobile number";
    }

    // Add more field validations as needed

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <Navbar />
      <Layout>
        <Container>
          <Form className="mt-2" onSubmit={handleSubmit}>
            <h2 className="mb-4 farmer">Registration Form</h2>
            <hr className="bold-hr" />
            <h2 className="Heading">Personal Data</h2>

            <Row className="mb-1" >
              <Col>
                <Form.Group as={Col} controlId="CustomerType">
                  <Form.Label>Customer Type</Form.Label>
                  <Form.Select type="CustomerType" placeholder="Choose">
                    <option>Choose...</option>
                    <option>Farmer</option>
                    <option>supervisor</option>
                    <option>Harvester</option>
                    <option>Transporter</option>
                    <option>User</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="AadharCard">
                  <Form.Label>Aadhar Card No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Aadhar card No"
                    name="Aadhar Card"
                    maxLength={12}
                    value={formData.Aadharcard}
                    onChange={handleInputChange}
                    isInvalid={!!errors.Aadharcard}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Aadharcard}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="PanCard">
                  <Form.Label>Pan Card No</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Pan card No"
                    name="PanCard"
                    maxLength={10}
                    value={formData.PanCard || ""}
                    onChange={validateForm}
                    isInvalid={!!errors.PanCard}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.PanCard}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Mobile Number">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    type="Mobile Number"
                    placeholder="Enter your Mobile Number"
                    name="Mobile Number"
                    maxLength={10}
                    value={formData.MobileNumber}
                    onChange={handleInputChange}
                    isInvalid={!!errors.MobileNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.MobileNumber}
                  </Form.Control.Feedback>
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
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Middle Name">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Middle Name"
                    name="Middle Name"
                    value={formData.MiddleName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.middleName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.middleName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="LastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Last Name"
                    name="LastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col className="Birthdate">
                <Form.Group as={Col} controlId="birthDate">
                  <Form.Label>Birth Date</Form.Label>
                  <DatePicker
                    selected={formData.birthDate}
                    onChange={handleDateChange}
                    dateFormat="MM/dd/yyyy" // You can customize the date format
                    className="form-control"
                    // Set the width of the input box
                    placeholderText="Select a date"
                    isInvalid={!!errors.birthDate}
                  />
                  {/* Use Form.Control.Feedback for validation */}
                  {errors.birthDate && (
                    <Form.Control.Feedback type="invalid">
                      {errors.birthDate}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="Marital Status">
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select type="Marital Status" placeholder="Choose">
                    <option>Choose...</option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                    <option></option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col} controlId="Gender">
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
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="Religion">
                  <Form.Label>Religion</Form.Label>
                  <Form.Select
                    type="text"
                    placeholder="Select your Religion"
                    name="Religion"
                    value={formData.Religion}
                    onChange={handleInputChange}
                    isInvalid={!!errors.Religion}
                  >
                    <option>Choose...</option>
                    <option>Hinduism</option>
                    <option>Islam</option>
                    <option>Christianity</option>
                    <option>Sikhism</option>
                    <option>Judaism</option>
                    {/* Add more options as needed */}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    {errors.Religion}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email"
                    name="Email"
                    value={formData.Email}
                    onChange={validateForm}
                    isInvalid={!!errors.Email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Email}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Qualification">
                  <Form.Label>Qualification</Form.Label>
                  <Form.Control
                    type="Qualification"
                    placeholder="Enter your Qualification"
                    name="Qualification"
                    value={formData.Qualification}
                    onChange={handleInputChange}
                    isInvalid={!!errors.Qualification}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Qualification}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="Permanent Address">
                  <Form.Label>Permanent Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Permanent Address"
                    name="firstName"
                    value={formData.PermanentAddress}
                    onChange={handleInputChange}
                    isInvalid={!!errors.PermanentAddress}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.PermanentAddress}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Place">
                  <Form.Label>Place</Form.Label>
                  <Form.Control
                    type="Place"
                    placeholder="Enter your Place"
                    name="Place"
                    value={formData.place}
                    onChange={handleInputChange}
                    isInvalid={!!errors.place}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.place}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <hr className="bold-hr" />
            </Row>
            <h2 className="Heading">Office Data</h2>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="Cluster">
                  <Form.Label>Cluster</Form.Label>
                  <Form.Control
                    type="text"
                    readOnly
                    placeholder="Enter Cluster"
                    name="Cluster"
                    value={formData.cluster}
                    onChange={handleInputChange}
                    isInvalid={!!errors.cluster}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.cluster}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Village">
                  <Form.Label>Village</Form.Label>
                  <Form.Control
                    type="Village"
                    placeholder="Enter your Village"
                    name="firstName"
                    value={formData.village}
                    onChange={handleInputChange}
                    isInvalid={!!errors.village}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.village}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="Employee Code">
                  <Form.Label>Employee Code</Form.Label>
                  <Form.Control
                    type="Employee Code"
                    placeholder="Enter your Employee Code"
                    name="Employee Code"
                    value={formData.EmployeeCode}
                    onChange={handleInputChange}
                    isInvalid={!!errors.EmployeeCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.EmployeeCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="Account Number">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your Account Number"
                    name="firstName"
                    value={formData.AccountNumber}
                    onChange={handleInputChange}
                    isInvalid={!!errors.AccountNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.AccountNumber}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="IFSC Code">
                  <Form.Label>IFSC Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your IFSC Code"
                    name="lastName"
                    value={formData.IFSCCode}
                    onChange={handleInputChange}
                    isInvalid={!!errors.IFSCCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.IFSCCode}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="Payment Bank Name">
                  <Form.Label>Payment Bank Name</Form.Label>
                  <Form.Control
                    type="Payment Bank Name"
                    placeholder="Enter your Payment Bank Name"
                    name="Payment Bank Name"
                    value={formData.PaymentBankName}
                    onChange={handleInputChange}
                    isInvalid={!!errors.PaymentBankName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.PaymentBankName}
                  </Form.Control.Feedback>
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
