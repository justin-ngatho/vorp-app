export default function SectionTwo() {
  return (
    <div className=" section-two" style={{ marginLeft: "80px" }}>
      <div
        className="row g-2"
        style={
          {
            // marginRight: "0px",
          }
        }
      >
        <div
          className="col-md-6  section-2-img"
          style={
            {
              //  overflow: "hidden"
            }
          }
        >
          <img
            src="./images/section2.jpg"
            alt="image"
            className="img-fluid"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
        <div className="col-md-6  section-2-card ">
          <div className="p-3">
            <h1 className=" text-center" style={{ color: "blue" }}>
              Our Focus
            </h1>
            <p className=" text-md-start">
              We believe in the potential of every human being. We recognize
              that diversity carries a wealth of lived experiences, unique
              perspectives, knowledge, skills, and empathy that are essential in
              building a better society. We are deeply aware of how
              discriminatory histories hinder our collective progress and shared
              humanity. Our approach focuses on individual empowerment,
              community development and systemic change.
            </p>
            <p className="text-center text-md-start">
              Our impact in the community:
              <br /> • Protecting the vulnerable: We identify and support
              at-risk communities <br /> • Promoting inclusion: We empower
              marginalized groups to participate fully in society <br />•
              Securing a just future: We advocate for climate justice and ensure
              the voices of vulnerable communities are heard.
            </p>
          </div>
        </div>
      </div>

      <div
        className="row g-0 "
        style={{
          marginRight: "0px",
        }}
      >
        <div className="col-md-6 col-12">
          <div className="p-3">
            <h1 className="text-center" style={{ color: "blue" }}>
              What We Stand For
            </h1>
            <p className="text-md-start">
              The Voice of Reconciliation and Pacification East Africa (VORP-EA)
              advocates for justice, equality and the dignity of all people,
              regardless of their background. We are dedicated to uplifting
              marginalized people throughout East Africa, particularly ethnic,
              religious, and linguistic minorities, who are frequently denied
              basic rights as a result of systematic discrimination. We believe
              that true reconciliation and long-term peace can only be achieved
              if everyone has the opportunity to freely practice their faiths,
              preserve their cultures, and participate fully in public life.
            </p>
            <p className="text-md-start">
              Our work is built in a great respect for human rights and a shared
              vision of a society where diversity is celebrated rather than
              feared; where every voice is heard and everyone has the
              opportunity to grow. Guided by the needs of the communities we
              serve, we work to promote intercommunal understanding, social
              justice, and the challenge of power systems that perpetuate
              exclusion and injustice. We aim to create long-term,
              transformative change through grassroots activities and
              collaborative partnerships, ensuring that the most vulnerable are
              no longer left behind. We envision an East Africa where everyone
              can thrive and reach their full potential.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-12" style={{}}>
          <img
            src="./images/section2.jpg"
            alt="image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>
      </div>
    </div>
  );
}
