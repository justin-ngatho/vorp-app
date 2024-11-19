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
      <div
        className="row g-3"
        style={{
          backgroundColor: "brown",
          padding: "20px",
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
            within the communities
          </p>
        </div>
        <div className="col-md-1 card-top-icon">
          <span class="ico-circle">
            <i class="bi bi-eye"></i>
          </span>
        </div>
        <div className="col-md-3 card-top">
          <h1>Vision </h1>
          <p>A society with access to equitable resources and Opportunities.</p>
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
            VORP-EA endeavors to empower vulnerable communities by ensuring
            equitable access to basic health care, economic opportunities and
            resources, consequently promoting social and economic well-being and
            eliminating poverty through long-term community-driven projects.
          </p>
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
                Poverty in East Africa is a major issue. More than 40% of the
                population barely makes ends meet. It's difficult because there
                aren't enough employment, healthcare is in disarray, and schools
                are few, particularly in rural areas. This perpetuates the
                pattern of people not having much going on, resulting in some
                real friction between people.
                <p>
                  {" "}
                  However, VORP-EA that is actively working to address this
                  issue. We’re all about helping people and making a difference
                  in their life. Interested in education, teaching people new
                  skills, and improving farming for all. We don't simply swoop
                  in and tell people what to do; we collaborate with the
                  community to ensure that their services benefit those in most
                  need.
                </p>
              </p>
              <p>
                By collaborating and supporting these programs, we can
                completely turn things around in East Africa. It's as if we're
                all working together to ensure that everyone has an equal
                opportunity for a better life. Let's keep it real and work
                toward a future full of hope and equal opportunities for
                everyone
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
                    Trust <br/> Racial and gender equity <br/> socio-environmental
                    justice <br/> Respect, Dialogue, and Collaboration <br/>
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
                  backgroundImage: "url(./images/hero1.jpg)",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              >
                <a class="" href="">
                  <p>This is heading</p>
                  <p class="small">
                    Card description with lots of great facts and interesting
                    details.
                  </p>
                  <div class="go-corner" href="">
                    <div class="go-arrow">→</div>
                  </div>
                </a>
              </div>

              <div
                class="col-12 col-md-6 card1"
                style={{
                  backgroundImage: "url(./images/hero1.jpg)",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              >
                <a class="" href="">
                  <p>This is heading</p>
                  <p class="small">
                    Card description with lots of great facts and interesting
                    details.
                  </p>
                  <div class="go-corner" href="">
                    <div class="go-arrow">→</div>
                  </div>
                </a>
              </div>

              <div
                class="col-12 col-md-6 card1"
                style={{
                  backgroundImage: "url(./images/hero1.jpg)",
                  backgroundRepeat: "no-repeat",
                  cursor: "pointer",
                }}
              >
                <a class="" href="">
                  <p>This is heading</p>
                  <p class="small">
                    Card description with lots of great facts and interesting
                    details.
                  </p>
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
  );
}
