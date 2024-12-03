import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardComponent = () => {
  return (
    <div
      className="container-section1"
      style={{
        marginLeft: "80px",
      }}
    >
      <div className="section1-container">
        <div className="row g-0">
          <div
            class="col-md-3 cardi"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundSize: "cover",
            }}
          >
            <a class="" href="#">
              <div class="card-content">
                <p class="card-title">Health</p>
                <p class="card-para">
                  We provide accessible healthcare services and promote health
                  education to prevent disease and improve well-being.
                </p>
              </div>
            </a>
          </div>
          <div
            class="col-md-3 cardi"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundSize: "cover",
            }}
          >
            <a class="" href="#">
              <div class="card-content">
                <p class="card-title">Livelihoods & Learning</p>
                <p class="card-para">
                  We empower individuals through skills training and education,
                  creating opportunities for sustainable livelihoods.
                </p>
              </div>
            </a>
          </div>
          <div
            class="col-md-3 cardi"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundSize: "cover",
            }}
          >
            <a class="" href="#">
              <div class="card-content">
                <p class="card-title">Environment</p>
                <p class="card-para">
                  We promote sustainable practices and climate resilience to
                  protect the environment and safeguard communities
                </p>
              </div>
            </a>
          </div>
          <div
            class="col-md-3 cardi"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundSize: "cover",
            }}
          >
            <a class="" href="#">
              <div class="card-content">
                <p class="card-title">human Rights</p>
                <p class="card-para">
                  We advocate for the rights of marginalized groups and work to ensure their voices are heard.
                </p>
              </div>
            </a>
          </div>
          
        </div>
      </div>
      <div className="section1-container2">
        <div className="row g-0 mt-3 mb-3" style={{}}>
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
              is human rights organization dedicated to transforming the lives
              of marginalized communities and promoting social justice across
              East Africa. Registered in 2024 as a Non-Governmental
              Organization, and based in Nairobi, Kenya, we focus on empowering
              ethnic, religious, and linguistic minorities, as well as other
              marginalized groups. At VOPR-EA, we deeply understand the needs,
              aspirations, and priorities of the communities we serve. We
              believe that everyone, regardless of their background, deserves
              equal rights and opportunities. By working closely with these
              communities, we are committed to promoting their rights and
              ensuring they have access to education, employment, cultural
              expression, and full participation in public life. The communities
              we serve are at the heart of our mission. Their voices guide our
              interventions, which are rooted in the principles of humanity,
              impartiality, neutrality, and independence. Through advocacy,
              collaboration, and community-driven initiatives, we exist to
              create positive, meaningful, and lasting change in East Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
