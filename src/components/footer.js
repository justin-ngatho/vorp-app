
export default function Footer () {
    var today = new Date();
    return (
      <div className="footer" style={{ marginLeft: "80px",  }}>
        <div className="top-footer">
        <div
          className="row justify-content-center "
          style={{
            backgroundColor: "#1A2421",
            color: "white",
            
            
          }}
        >
             
          <div className="col-md-4">
            <h3>What we do</h3>
            <p>
              Our whole deal is to build communities that can bounce back from
              anything. We're working towards a future where everyone can live
              their best life, no matter what's going on around them.
            </p>
          </div>
          
          <div className="col-md-5">
            <h3>Contact Us</h3>
            <p>Phone: +254 727098070 | Email: vorp.eafrica@gmail.com</p>
          </div>  
              
        </div>
        </div>
        <div className="bottom-footer">
          <div className="row justify-content-center mt-3 mb-0">
            <div className="col-8">
              <p>
                Fatima Apartments, Arwing Kodhek off Marcus Garvey, Kilimani |
                Phone: +254 727098070 | Email: vorp.eafrica@gmail.com
              </p>
              <br />
              <p>
                Copyright <i class="bi bi-c-circle"></i> {today.getFullYear()}
                Voice of Reconciliation and Pacification
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}