
import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div className="container-section1">
      <div className="section1-container">
        <div className="row g-0">
          <div
            class="col-md-4 card1"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
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
          <div
            class="col-md-4 card1"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
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
          <div
            class="col-md-4 card1"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
            }}
          >
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
        </div>
      </div>
      <div className="section1-container2">
        <div
          className="row g-0 mt-3 mb-3"
          style={{
           
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
              The Voice of Reconciliation and Pacification East Africa (VORP-EA)
              was registered in October 2024 in Kenya as a Non-Governmental
              Organization, under section 10 of the Non-Governmental
              Organizations Co-ordination Act, 2013 (PBO Act) with an aim of
              transforming lives of the underprivileged in the community. VORP -
              EA is a human rights organization based in Nairobi-Kenya that
              works with ethnic, religious and linguistic minorities as well as
              other disadvantaged populations. Millions of people are denied
              basic rights due to their differences. We work closely with
              vulnerable communities to protect their rights to their beliefs,
              cultures, equitable educational and employment opportunities and
              full participation in public life. We work with disadvantaged
              populations to protect their rights and foster intercommunal
              understanding. We are guided by the needs indicated by our
              community support system, which is interwoven into the fabric of
              these communities throughout East Africa. Together, we challenge
              Power systems that exclude and suppress our communities' varied
              and vulnerable members.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
