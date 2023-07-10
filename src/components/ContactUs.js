import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, ListGroup, Nav, Navbar } from "react-bootstrap";
import { BsEnvelope, BsPhone, BsGeo, BsInstagram, BsFacebook, BsSpotify, BsYoutube } from "react-icons/bs";
import ContactUsImg from "./assets/ContactUs.jpg";
import PianoImg from "./assets/piano.jpeg";
import "./ContactUs.css";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://e-commerce-website-5bb04-default-rtdb.firebaseio.com/userData.json", formData)
      .then((response) => {
        console.log(response);
        alert("Form submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Something went wrong");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      });
  };

  return (
    <div className="main-contact-div">
      <img src={ContactUsImg} alt="ContactUsImg" className="img" />
      <Container className="get-in-touch">
        <h1>Get in touch</h1>
      </Container>
      <Container className="container-contact-content">
        <Row>
          <Col xs={12} md={12} lg={6}>
            <Card>
              <Card.Img variant="top" src={PianoImg} className="piano-img" />
              <Card.Body className="d-flex justify-content-center">
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div>
                      <span className="icon">
                        <BsEnvelope />
                      </span>
                      <h3>Email:</h3>
                      <p>info@awesomeband.com</p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <span className="icon">
                        <BsPhone />
                      </span>
                      <h3>Phone:</h3>
                      <p>+1 123-456-7890</p>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div>
                      <span className="icon">
                        <BsGeo />
                      </span>
                      <h3>Address:</h3>
                      <p>123 Music Street, City, Country</p>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Card className="cool-form">
              <Card.Body className="pb-4">
                <Form className="label-start" onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                      <Form.Label>
                        <h5>First Name:</h5>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridName" className="mb-3">
                      <Form.Label>
                        <h5>Last Name:</h5>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Row>

                  <Form.Group controlId="formGridEmail" className="mb-3">
                    <Form.Label>
                      <h5>Email:</h5>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridPhone" className="mb-3">
                    <Form.Label>
                      <h5>Phone:</h5>
                    </Form.Label>
                    <Form.Control
                      type="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridMessage" className="mb-3">
                    <Form.Label className="label-start">
                      <h5>Message:</h5>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Navbar className="bg-light" variant="light">
        <Container>
          <Navbar.Brand>
            <h1>The Generics</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link>
                <span style={{ color: "black", fontSize: "2em" }}>
                  <BsSpotify />
                </span>
              </Nav.Link>
              <Nav.Link>
                <span style={{ color: "black", fontSize: "2em" }}>
                  <BsYoutube />
                </span>
              </Nav.Link>
              <Nav.Link>
                <span style={{ color: "black", fontSize: "2em" }}>
                  <BsFacebook />
                </span>
              </Nav.Link>
              <Nav.Link>
                <span style={{ color: "black", fontSize: "2em" }}>
                  <BsInstagram />
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default ContactUs;
