
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <Container fluid >
        <div className="section1-container">
      <Row className="no-gutters">
        <Col md={4} >
          <Card className="card-no-space " style={{backgroundImage:"url(/images/hero1.jpg)", height:"40vh", width:"100%"}}>
            <Card.Body style={{}}>
              <Card.Title style={{color:"white", fontWeight:"bolder", textShadow:"2px 2px 8px rgba(0, 0, 0, 0.6)"}}>Card 1</Card.Title>
              <Card.Text style={{color:"white",textShadow:"5px 5px 18px rgba(0, 0, 0, 0.6)"}}>
                This is some text inside Card 1.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-no-space bg-image-2" style={{backgroundImage:"url(/images/hero1.jpg)", height:"40vh"}}>
            <Card.Body>
              <Card.Title style={{color:"white"}}>Card 2</Card.Title>
              <Card.Text>
                This is some text inside Card 2.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="card-no-space bg-image-3" style={{backgroundImage:"url(/images/hero1.jpg)", height:"40vh"}}>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is some text inside Card 3.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>                
      </div>
      <div className="section1-container2" style={{marginLeft:"80px"}}>
        <div className="content-left" style={{backgroundColor:"brown", color:"white", width:"40%", 
            textAlign: "center", paddingTop:"2rem"}}>
            <h1>Who we Are</h1>
            <br/>
           <p><i class="bi bi-chevron-right"></i></p> 
        </div>
        <div className="content-right" style={{backgroundColor:"brown", color:"white", width:"60%",
            paddingRight:"20px", paddingTop:"2rem" }}>
            <p>We One Action Network (WOAN) is a registered 501 c3 nonprofit organization based in Stanley, North Carolina (USA). We are committed to creating opportunities for bright minds and creative \
                souls in Kenya, where a vast majority of youth lack the basic opportunity to strengthen their ability.</p>
            <br/>
           <p>WOAN-supported initiatives and projects are designed to encourage the highest standards of creativity and long-term self-reliance. Since our inception in 2018, we have positioned ourselves 
            as part of the solution
             by listening and engaging with local leaders that understand what those gaps are and why.</p> 
        </div>
      </div>
    </Container>
  );
};

export default CardComponent;
