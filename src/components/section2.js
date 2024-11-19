
export default function SectionTwo () {

    return (
      <div className=" section-two" style={{ marginLeft: "80px" }}>
        <div
          className="row g-0"
          style={{
            marginRight: "0px",
          }}
        >
          <div className="col-md-6 section-2-img">
            <img
              src="./images/section2.jpg"
              alt="image"
              className="img-fluid"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="col-md-6 p-0 section-2-card ">
            <div className="p-3">
              <h1 className=" text-center" style={{ color: "blue" }}>
                Our Focus
              </h1>
              <p className=" text-md-start">
                We believe in the human potential. All human potential. We know
                that the immense ethnic, cultural, linguistic and difference in
                religion that surrounds us has lived the experiences, insights,
                knowledge, skills and empathy required to construct a better
                society. We are aware of discriminatory history from all around
                the world, and we can attest to how marginalizing individuals
                and groups based on limited ideas of their worth has left us all
                worse off. We aim to overcome these hurdles not just because we
                believe in people, but also because we understand that the
                future is only secure for all of us if we work together to
                construct it. Our work is thus about individuals, communities
                and structures; these combination addresses these issues fairly
                overcoming the most formidable obstacles to human growth.
              </p>
              <p className="text-center text-md-start">
                We are working with vulnerable populations to create a society
                in which they may live peacefully and equally with others. What
                we do to make the changes: <br /> • Combatting victimization by
                identifying communities at risk and supporting those working to
                defend them
                <br /> • Challenging marginalization by promoting the inclusion
                of vulnerable communities in sustainable development and society
                <br />• Realizing climate justice by ensuring that the voices,
                live experience and knowledge of vulnerable communities are
                included in participation in policies addressing the climate
                crisis.
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
                The Voice of Reconciliation and Pacification East Africa
                (VORP-EA) advocates for justice, equality and the dignity of all
                people, regardless of ethnicity, religion, language, or social
                background. We are dedicated to uplifting marginalized people
                throughout East Africa, particularly ethnic, religious, and
                linguistic minorities, who are frequently denied basic rights as
                a result of systematic discrimination.
              </p>
              <p className="text-md-start">
                We think that true reconciliation and long-term peace can only
                be accomplished if everyone has the opportunity to freely
                practice their faiths, preserve their cultures, have equal
                access to education and career opportunities, and fully
                participate in public life. Our work is built in a great respect
                for human rights and a shared vision of a society where
                diversity is celebrated rather than feared; where every voice is
                heard and everyone has the opportunity to grow. Guided by the
                needs of the communities we serve, we work to promote
                intercommunal understanding, social justice, and the challenge
                of power systems that perpetuate exclusion and injustice. We
                hope to achieve long-term, transformative change through
                grassroots activities and collaborative partnerships, ensuring
                that the most vulnerable are no longer left behind and are
                instead crucial to the future of our shared society.
              </p>
              <p>
                We advocate for a more inclusive, peaceful, and just East
                Africa, where all people, regardless of background, can reach
                their full potential.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12" style={{}}>
            <img
              src="./images/section2.jpg"
              alt="image"
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    );
}