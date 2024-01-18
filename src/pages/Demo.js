import React from "react";
import { Button, Card, Col, Form,  Row } from "react-bootstrap"; // Assuming you've installed and imported react-bootstrap
import "./Home.css";
import Layout from "../component/Layout";
import Navbar from "../component/Navbar";

function MyCard() {
  return (
    <>
    <Navbar/>
    <Layout>
    <div className="Page">
      <Card className="Card">
        <Card.Body className="CardBody">
          <h1 className="h1">Farmer Registration</h1>
          <Form className="ml-0 ms-0">
            <Row>
              <Form.Group as={Col} controlId="formGridAadhar">
                <Form.Label>Aadhar Card number</Form.Label>
                <Form.Control
                  type="text"
                  pattern="^[0-9]{11}$"
                  title="Please enter 11 numeric digits"
                  className="FormInput"
                  placeholder="Enter Aadhar Number"
                  maxLength="11"
                  required // Add this if you want to make the field mandatory
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPan">
                <Form.Label>Pan Card number</Form.Label>
                <Form.Control
                  type="text"
                  pattern="[A-Za-z]{5}[0-9]{4}[A-Z]{1}"
                  title="Please enter a valid Pan Card number"
                  className="FormInput"
                  placeholder="Enter Pan Number"
                  maxLength="10"
                  required
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="First Name"
                  className="FormInput"
                  placeholder="Enter First Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Middle Name</Form.Label>
                <Form.Control
                  type="Middle Name"
                  className="FormInput"
                  placeholder="Enter Middle Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="Last Name"
                  placeholder="Enter Last Name"
                  className="FormInput"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Village</Form.Label>
                <Form.Select
                  type="Village"
                  placeholder="Chose"
                  className="FormInput"
                >
                  <option>Choose...</option>
                  <option>..</option>
                  <option>...</option>
                  <option>....</option>
                  <option></option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label> Cluster</Form.Label>
                <Form.Control
                  type="Cluster"
                  placeholder="Enter Cluster"
                  className="FormInput"
                  readOnly
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="Place"
                  placeholder="Enter Place"
                  className="FormInput"
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Religion</Form.Label>
                <Form.Select
                  type="Religion"
                  placeholder="Chose"
                  className="FormInput"
                >
                  <option>Choose...</option>
                  <option>Hindu</option>
                  <option>Muslim</option>
                  <option>Sikh</option>
                  <option></option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Marital Status</Form.Label>
                <Form.Select
                  type="Marital Status"
                  placeholder="Chose"
                  className="FormInput"
                >
                  <option>Choose...</option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Unmarried</option>
                  <option></option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  type="Gender"
                  placeholder="Enter Your Gender"
                  className="FormInput"
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option></option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Birth Date</Form.Label>
                <Form.Control
                  type="Birth Date"
                  placeholder="Enter Birth date"
                  className="FormInput"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="Mobile number"
                  placeholder="Enter Mobile number"
                  className="FormInput"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="Email"
                  placeholder="Enter Email"
                  className="FormInput"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  type="Qualification"
                  placeholder="Enter Qualification"
                  className="FormInput"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Communication Address</Form.Label>
                <Form.Control
                  type="Communication Address"
                  placeholder="Enter Communication Address"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Permanent Address</Form.Label>
                <Form.Control
                  type="Permanent Address"
                  placeholder="Enter Permanent Address"
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>IFSC Code</Form.Label>
                <Form.Control
                  type="IFSC Code"
                  placeholder="Enter IFSC Code"
                  className="FormInput"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Payment Bank Name</Form.Label>
                <Form.Control
                  type="Payment Bank"
                  placeholder="Enter Payment Bank Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Account No</Form.Label>
                <Form.Control
                  type="Account No"
                  placeholder="Enter Account No"
                  className="FormInput"
                />
              </Form.Group>
            </Row>

            <Button className="mb-3 ms-4 mt-3" variant="primary" type="Save">
              Save
            </Button>
            <Button className="mb-3 ms-4 mt-3" variant="primary" type="Clear">
              Clear
            </Button>
            <Button className="mb-3 ms-4 mt-3" variant="primary" type="Exit">
              Exit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
    </Layout>
    </>
  );
}

export default MyCard;
