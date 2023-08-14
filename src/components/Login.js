import React, { useState, useRef, useContext } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
// import Alert from 'react-bootstrap/Alert';
import "./Login.css";
import { CartContext } from "./CartContextProvider";
import { useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { BsSpotify, BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";
import { Nav } from "react-bootstrap";
import videobackground from "./assets/login.mp4";



const LogIn = () => {
  const cartCtx = useContext(CartContext);
  

  const [isLogIn, setIsLogin] = useState(false);
  const [isExisting, setIsExisting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //  const [errorMessage, setErrorMessage] = useState(""); // New state for error message
  // const [successMessage, setSuccessMessage] = useState(""); // New state for success message
  const navigate = useNavigate();
  const enteredEmail = useRef(null);
  const enteredPassword = useRef(null);

  const submitFormHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    localStorage.setItem("email", email);
    localStorage.setItem("username", cartCtx.username);
    console.log(email);
    console.log(password);
    console.log("form submitted");

    let url = isLogIn
      ? "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAJiORG9Pa0h_QB-68uoy0Si_4Y1DbFksU"
      : "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJiORG9Pa0h_QB-68uoy0Si_4Y1DbFksU";

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((data) => {
        if (data.hasOwnProperty("error")) {
          console.log(data);
          alert(data.error.message);  

          // setErrorMessage(data.error.message)
        
          enteredEmail.current.value = "";
          enteredPassword.current.value = "";
        } else {
          console.log(data);
          enteredEmail.current.value = "";
          enteredPassword.current.value = "";
          cartCtx.loginHandler(data.idToken);
          if (isLogIn) {
            alert("Log in successful");
            // setSuccessMessage("Log in successful");
             navigate("/Store");
          } else {
            alert("Your account is created successfully. Now you can log in using your credentials");
            // setSuccessMessage("Your account is created successfully. Now you can log in using your credentials");
          }
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        alert("An error occurred. Please try again later.");
        // setErrorMessage("An error occurred. Please try again later.");
        enteredEmail.current.value = "";
        enteredPassword.current.value = "";
      });
  };

  const existingAccountHandler = () => {
    setIsExisting((prevState) => !prevState);
    setIsLogin((prevState) => !prevState);
  };

  const handleFocus = (e) => {
    e.target.classList.add("focus");
  };

  const handleBlur = (e) => {
    e.target.classList.remove("focus");
  };

  return (
    <div>
      {/* <Header /> */}
    
          
      {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>} */}
      

      <div className="main-body-login">

      {/* Add the video element with the background video */}
      <video autoPlay muted loop className="background-video">
        <source src={videobackground} type="video/mp4" />
        Your browser does not support the video tag.
        </video>
     
        <Container>
          <Card className="card-body-login">
            <Card.Header className="card-border-login">
              {isLogIn || isExisting ? <h2>Sign In</h2> : <h2>Sign Up</h2>}
            </Card.Header>
            <Card.Body className="card-border-login">
              <Form onSubmit={submitFormHandler}>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label className="mb-2">
                    <h5>Your Email</h5>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    className="mb-2 form-control"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={enteredEmail}
                  />
                  <Form.Label className="mb-2">
                    <h5>Your Password</h5>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    className="mb-2 form-control"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    ref={enteredPassword}
                  />
                  {isLogIn || isExisting ? (
                    <Button size="lg" className="btn-login" type="submit">
                      Log In
                    </Button>
                  ) : (
                    <Button size="lg" className="btn-login" type="submit">
                      Create an Account
                    </Button>
                  )}
                  {isLoading && (
                    <div className="spinner-container">
                      <Spinner animation="grow" variant="danger" className="spinner-container" />
                      <Spinner animation="grow" variant="warning" className="spinner-container" />
                      <Spinner animation="grow" variant="info" className="spinner-container" />
                    </div>
                  )}
                </Form.Group>
              </Form>
            </Card.Body>
            <Card.Footer className="card-border-login">
              {!isExisting ? (
                <p className="existing-account-link" onClick={existingAccountHandler}>
                  Log in with an existing account
                </p>
              ) : (
                <p className="existing-account-link" onClick={existingAccountHandler}>
                  New User? Create an account
                </p>
              )}
            </Card.Footer>
          </Card>
        </Container>
          </div>
              <Navbar className="bg-light navbar-footer-login" variant="light">
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

export default LogIn;