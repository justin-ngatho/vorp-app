import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function SectionThree() {
  return (
    <div
      className="section-three"
      style={{
        marginLeft: "80px",
        backgroundImage: "url(images/section3.jpg",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="section-three-container">
        <div className="section-three-top">
          <div
            className="row g-0 mt-3 mb-2 px-2"
            style={{
              backgroundColor: "brown",
              // padding: "20px",
              color: "white",
            }}
          >
            <div className="col-md-1 card-top-icon" style={{}}>
              <span class="ico-circle">
                {" "}
                <i class="bi bi-calendar"></i>
              </span>
            </div>
            <div className="col-md-3 card-top">
              <h1>Mission</h1>
              <p>
                To alleviate poverty, promote access to healthcare services and
                improve the socioeconomic welfare of the most vulnerable groups
                within the communities.
              </p>
            </div>
            <div className="col-md-1 card-top-icon">
              <span class="ico-circle">
                <i class="bi bi-eye"></i>
              </span>
            </div>
            <div className="col-md-3 card-top">
              <h1>Vision </h1>
              <p>
                A society with access to equitable resources and Opportunities.
              </p>
            </div>
            <div className="col-md-1 card-top-icon">
              <span class="ico-circle">
                {" "}
                <i class="bi bi-trophy"></i>
              </span>
            </div>
            <div className="col-md-3 card-top">
              <h1>Goal</h1>
              <p>
                VORP-EA empowers vulnerable communities by improving access to
                basic healthcare, economic opportunities and essential
                resources.
              </p>
            </div>
          </div>
        </div>
        <div
          className="section-three-bottom"
          style={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div className="row g-1">
            <div className="col-md-4 g-0">
              <div className="card-bottom-left">
                <h1>Poverty rate in EAST AFRICA</h1>
                <p>
                  Poverty is a persistent challenge in East Africa, with over
                  40% of the population struggling to meet basic needs. Limited
                  employment opportunities, inadequate healthcare, and
                  insufficient education structures, especially in rural areas,
                  contribute to this crisis. These factors can lead to social
                  tensions and hinder progress. VORP-EA is actively working to
                  address poverty in East Africa. We are committed to supporting
                  individuals and making a real difference in their lives. We do
                  this by ensuring the services we provide are tailored to the
                  needs of the community. Together, we can create a future full
                  of hope and equal opportunities for everyone
            
                </p>
              </div>
            </div>

            <div className="col-md-7">
              <div className="row justify-content-center g-3 ">
                <div
                  className=" col-12 col-md-6 col-12  card1"
                  style={{
                    backgroundImage: "url(./images/hero1.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                  }}
                >
                  <a class="" href="">
                    <p>Our Core Values</p>
                    <p class="small">
                      Trust <br /> Racial and gender equity <br />{" "}
                      socio-environmental justice <br /> Respect, Dialogue, and
                      Collaboration <br />
                      Excellence and Transparency
                    </p>
                    <div class="go-corner" href="">
                      <div class="go-arrow">→</div>
                    </div>
                  </a>
                </div>

                <div
                  class="col-12 col-md-6 card1"
                  style={{
                    backgroundImage: "url(./images/team.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a class="" href="">
                    <p>The Team</p>
                    <p class="small"></p>
                    <div class="go-corner" href="">
                      <div class="go-arrow">→</div>
                    </div>
                  </a>
                </div>

                <div
                  class="col-12 col-md-6 card1"
                  style={{
                    backgroundImage: "url(./images/contributors.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a class="" href="">
                    <p>Contributors</p>
                    <p class="small"></p>
                    <div class="go-corner" href="">
                      <div class="go-arrow">→</div>
                    </div>
                  </a>
                </div>

                <div
                  class="col-12 col-md-6 card1"
                  style={{
                    backgroundImage: "url(./images/newsletter.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a class="" href="">
                    <p>Newsletter</p>
                    <p class="small"></p>
                    <div class="go-corner" href="">
                      <div class="go-arrow">→</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
