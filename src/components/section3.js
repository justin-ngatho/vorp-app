

export default function SectionThree() {
  return (
    <div
      className="section-three"
      style={{
        marginLeft: "80px",
        backgroundImage: "url(images/section3.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "blur(5px)",
        color: "black",
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
            <div className="col-md-5 g-0">
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
              <div className="row  g-3 ">
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  Our Impact
                </h1>
                <div
                  className="  col-md-6   cardi"
                  style={{
                    backgroundImage: "url(./images/hero1.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    class=""
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div class="card-content">
                      <p class="card-title">Health</p>
                      <p class="card-para">
                        We provide accessible healthcare services and promote
                        health education to prevent disease and improve
                        well-being.
                      </p>
                    </div>
                  </a>
                </div>

                <div
                  class="col-12 col-md-6 cardi"
                  style={{
                    backgroundImage: "url(./images/team.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    class=""
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div class="card-content">
                      <p class="card-title">livelihoods AND Learning</p>
                      <p class="card-para">
                        We empower individuals through skills training and
                        education, creating opportunities for sustainable
                        livelihoods.
                      </p>
                    </div>
                  </a>
                </div>

                <div
                  class="col-12 col-md-6 cardi"
                  style={{
                    backgroundImage: "url(./images/contributors.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    class=""
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div class="card-content">
                      <p class="card-title">Human Rights</p>
                      <p class="card-para">
                        We advocate for the rights of marginalized groups and
                        work to ensure their voices are heard.
                      </p>
                    </div>
                  </a>
                </div>

                <div
                  class=" col-md-6 cardi"
                  style={{
                    backgroundImage: "url(./images/newsletter.jpg)",
                    backgroundRepeat: "no-repeat",
                    cursor: "pointer",
                    backgroundSize: "cover",
                  }}
                >
                  <a
                    class=""
                    href=""
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <div class="card-content">
                      <p class="card-title"> Environment</p>
                      <p class="card-para">
                        We promote sustainable practices and climate resilience
                        to protect the environment and safeguard communities.
                      </p>
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
