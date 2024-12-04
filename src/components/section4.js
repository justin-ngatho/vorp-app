export default function SectionFour() {
  return (
    <div className="section-four" style={{ marginLeft: "80px" }}>
      <div className="section-four-container ">
        <div className="row">
          <div className="col-md-7 " style={{
            
            lineHeight:"35px"
          }}>
            <h2>Making a difference in East Africa</h2>
          <center>  <p>
              VORP-EA has made significant strides in improving the lives of
              vulnerable communities in East Africa. Our achievements include:
              <ul className="text-center" style={{
                textAlign:"center",
                listStyle:"none"
              }}>
                <li>Enhanced Healthcare Access: We've expanded access to healthcare
                services for thousands of people.</li>
              <li>Empowered Communities: Our
              skills training programs have empowered over 5,000 individuals to
              secure sustainable livelihoods.</li>
              <li>Environmental Sustainability:
              We've promoted sustainable practices and implemented initiatives
              to protect the environment. Our accomplishments are a testament to
              our commitment to creating a more just and equitable society.</li>
                </ul> 
               
            </p></center>
          </div>
          <div className="col-md-4">
            <img
              src="./images/logo.jpeg"
              alt="logo"
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
