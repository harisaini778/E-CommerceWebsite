import { Container,ListGroup,Row,Col, Navbar, Button } from "react-bootstrap";
import { BsPlayCircle } from "react-icons/bs";
import "./Home.css";

const Home = () => {

    return (
        <div className="main-home-div">
            <Navbar className="bg-secondary h-50" variant= "dark">
           <Container className="d-flex justify-content-center">
                    <h2 className="home-title1">Get Our Latest Playlist</h2>
                     <span className="nav-img">
            <BsPlayCircle/>
            </span>
            </Container>
            </Navbar>
            <Container><h1 className="home-title2">Tours</h1></Container>
            <div className="d-flex justify-content-center">
                <ListGroup className="list-group">
                    <ListGroup.Item>
                        <Row>
                            <Col className="m-2">August 16</Col>
                            <Col className="m-2">DETROIT, MI</Col>
                            <Col className="m-2">DTE ENERGY MUSIC THEATRE</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   
      </ListGroup.Item>
      <ListGroup.Item><Row>
                            <Col className="m-2">August 28</Col>
                            <Col className="m-2">TORONTO, ON</Col>
                            <Col className="m-2">BUDWEISER STAGE</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item><Row>
                            <Col className="m-2">September 26</Col>
                            <Col className="m-2">BRISTOV, VA</Col>
                            <Col className="m-2">JIGGY LUBE LIVE</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item><Row>
                            <Col className="m-2">September 29</Col>
                            <Col className="m-2">PHOENIX, AZ</Col>
                            <Col className="m-2">AK-CHIN PAVILION</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   </ListGroup.Item>
      <ListGroup.Item><Row>
                            <Col className="m-2">October 10</Col>
                            <Col className="m-2">LAS VEGAS, TH</Col>
                            <Col className="m-2">T-MOBILE ARENA</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                    </Row>   </ListGroup.Item>
                             <ListGroup.Item>
                        <Row>
                            <Col className="m-2">November 16</Col>
                            <Col className="m-2">CONCORD, MT</Col>
                            <Col className="m-2">CONCORD PAVILION</Col>
                            <Col><Button className="bg-info buy-btn pt-2"><h5>Buy Tickets</h5></Button></Col>
                        </Row>   
      </ListGroup.Item>
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
