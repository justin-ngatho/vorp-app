
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div className="container-section1">
      <div className="section1-container">
        <div className="row g-0">
          <div className="col-md-4">
        <Card style={{ 
          backgroundImage:"url(./images/hero1.jpg)",
          color:"white",
          textAlign:"center",
          height:"18rem",
           }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-4">
        <Card style={{ 
          backgroundImage:"url(./images/hero1.jpg)",
          color:"white",
          textAlign:"center",
          height:"18rem",
         }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </div>
        <div className="col-md-4">
        <Card style={{ 
          backgroundImage:"url(./images/hero1.jpg)",
          color:"white",
          textAlign:"center",
          height:"18rem",
          borderRadius:"0"
         }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        </div>
        </div>
      </div>
      <div className="section1-container2">
        <div className="row g-0" style={{
          marginRight:"80px",
          marginTop:"80px",
          marginBottom:"80px"
        }}>
          <div className="col-md-4">
            <h1>Who We Are</h1>
            <br/>
            <p> <i class="bi bi-chevron-right"></i></p>
          </div>
          <div className="col-md-8">
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y 
              archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las 
              industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) 
              desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
              especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente
               con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
