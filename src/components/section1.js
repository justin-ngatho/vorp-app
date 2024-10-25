
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div className="container-section1">
      <div className="section1-container">
        <div className="row g-0">
            <div class="col-md-4 card1"   style={{
                backgroundImage: "url(./images/hero1.jpg)",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
              }}>
              <a class="" href="#">
                <p>This is heading</p>
                <p class="small">
                  Card description with lots of great facts and interesting
                  details.
                </p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div class="col-md-4 card1"  style={{
                backgroundImage: "url(./images/hero1.jpg)",
                 backgroundRepeat:"no-repeat",
                 cursor:"pointer",
              }}>
              <a class="" href="#">
                <p>This is heading</p>
                <p class="small">
                  Card description with lots of great facts and interesting
                  details.
                </p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </div>
            <div class="col-md-4 card1"  style={{
                backgroundImage: "url(./images/hero1.jpg)",
                 backgroundRepeat:"no-repeat",
                 cursor:"pointer"
              }}>
              <a class="" href="#"
             >
                <p>This is heading</p>
                <p class="small">
                  Card description with lots of great facts and interesting
                  details.
                </p>
                <div class="go-corner" href="#">
                  <div class="go-arrow">→</div>
                </div>
              </a>
            </div>
        </div>
      </div>
      <div className="section1-container2">
        <div
          className="row g-0"
          style={{
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <div className="col-12 col-md-4">
            <h1>Who We Are</h1>
            <br />
            <p>
              {" "}
              <i class="bi bi-chevron-right"></i>
            </p>
          </div>
          <div className="col-12 col-md-8">
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y
              archivos de texto. Lorem Ipsum ha sido el texto de relleno
              estándar de las industrias desde el año 1500, cuando un impresor
              (N. del T. persona que se dedica a la imprenta) desconocido usó
              una galería de textos y los mezcló de tal manera que logró hacer
              un libro de textos especimen. No sólo sobrevivió 500 años, sino
              que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue
              popularizado en los 60s con la creación de las hojas "Letraset",
              las cuales contenian pasajes de Lorem Ipsum, y más recientemente
              con software de autoedición, como por ejemplo Aldus PageMaker, el
              cual incluye versiones de Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
