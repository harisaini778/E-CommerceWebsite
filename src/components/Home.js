import { Container,ListGroup,Row,Col, Navbar, Button } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";
import "./Home.css";
import videobackground from "./assets/video.mp4";

const Home = () => {

    return (
        <div className="main-home-div">
            <Navbar className="h-20 home-navbar-container" variant= "dark">
           <Container className="d-flex justify-content-center">
                    <h2 className="home-title1">Get Our Latest Playlist</h2>
                     <span className="nav-img">
            <BsPlayCircle/>
            </span>
            </Container>
            </Navbar>
                
      {/* Add the video element with the background video */}
      <video autoPlay muted loop className="background-video">
        <source src={videobackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
            <Container><h1 className="home-title2">Tours</h1></Container>
            <div className="d-flex justify-content-center custom-group-container">
                <ListGroup className="custom-group">
                    <ListGroup.Item className="custom-list-item">
                        <Row>
                            <Col className="m-2">August 16</Col>
                            <Col className="m-2">DETROIT, MI</Col>
                            <Col className="m-2">DTE ENERGY MUSIC THEATRE</Col>
                            <Col><Button className="bg-info buy-btn pt-2 mt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   
      </ListGroup.Item>
      <ListGroup.Item className="custom-list-item"><Row>
                            <Col className="m-2">August 28</Col>
                            <Col className="m-2">TORONTO, ON</Col>
                            <Col className="m-2">BUDWEISER STAGE</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item className="custom-list-item"><Row>
                            <Col className="m-2">September 26</Col>
                            <Col className="m-2">BRISTOV, VA</Col>
                            <Col className="m-2">JIGGY LUBE LIVE</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item className="custom-list-item"><Row>
                            <Col className="m-2">September 29</Col>
                            <Col className="m-2">PHOENIX, AZ</Col>
                            <Col className="m-2">AK-CHIN PAVILION</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item className="custom-list-item"><Row>
                            <Col className="m-2">October 10</Col>
                            <Col className="m-2">LAS VEGAS, TH</Col>
                            <Col className="m-2">T-MOBILE ARENA</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                    </Row>   </ListGroup.Item>               
    </ListGroup>
            </div>
            <Navbar className="bg-info home-footer" variant="dark">
                <Container>
                    <Navbar.Brand><h1>The Generics</h1></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );

}
export default Home;
