import React from "react";
import { Container, Nav,Navbar } from "react-bootstrap";
import musicImg from "./assets/music.jpg";
import { Row, Col } from "react-bootstrap";
import "./About.css";
import {BsFacebook, BsInstagram, BsSpotify, BsYoutube} from "react-icons/bs"

const About = () => {
  return (
    <div className="main-div">
      <Container>
        <h1>About</h1>
      </Container>
      <Container>
        <Row>
          <Col xs={12} md={12} lg={4}>
            <img src={musicImg} alt="musicImg" className="band-img" />
          </Col>
          <Col xs={12} md={12} lg={8}>
            <p className="about-text1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="about-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
      <Navbar className="bg-light" variant="light">
        <Container>
        <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
        <Navbar.Toggle  aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
              <Nav.Link><span style={{ color: 'black', fontSize: '2em' }}>
    <BsSpotify/>
  </span></Nav.Link>
            <Nav.Link><span style={{ color: 'black', fontSize: '2em' }}>
    <BsYoutube/>
  </span></Nav.Link>
            <Nav.Link><span style={{ color: 'black', fontSize: '2em'}}>
    <BsFacebook/>
              </span></Nav.Link>
              <Nav.Link>
                <span style={{ color: 'black', fontSize: '2em' }}>
    <BsInstagram/>
  </span>
              </Nav.Link>
          </Nav>
          </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
  );
};

export default About;