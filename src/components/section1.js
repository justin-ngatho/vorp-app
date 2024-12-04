import React from "react";


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
          {/* <h1>SCOPE OF WORK</h1> */}
          <div
            class="col-md-3 cardi"
            style={{
              backgroundImage: "url(./images/hero1.jpg)",
              backgroundRepeat: "no-repeat",
              cursor: "pointer",
              backgroundSize: "cover",
               
            }}
          >
            <a class="" href="#" style={{
              textDecoration:"none"
            }}>
              <div class="card-content">
                <p class="card-title">Health</p>
                <p class="card-para">
                  We are working to improve health and well-being by providing
                  access to quality healthcare and promoting healthy lifestyles.
                  We are particular in improving maternal and child health.
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
            <a class="" href="#" style={{
              textDecoration:"none"
            }}>
              <div class="card-content">
                <p class="card-title">Livelihoods and Education</p>
                <p class="card-para">
                  We are empowering individuals with the skills and knowledge
                  they need to thrive. By investing in education and skills
                  training, we are equipping individuals with the tools to
                  secure sustainable livelihoods.
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
            <a class="" href="#" style={{
              textDecoration:"none"
            }}>
              <div class="card-content">
                <p class="card-title">Environmental and Climate Justice</p>
                <p class="card-para">
                  We are committed to protecting our planet. We are working to
                  promote sustainable practices and climate resilience.
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
            <a class="" href="#" style={{
              textDecoration:"none"
            }}>
              <div class="card-content">
                <p class="card-title">Social Protection and Advocacy</p>
                <p class="card-para">
                  We are standing up for the rights of marginalized groups,
                  ensuring their voices are heard and their needs are met.
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
