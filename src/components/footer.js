
export default function Footer () {
    var today = new Date();
    return (
        <div className="footer"style={{marginLeft:"80px", marginRight:"0"}}>
            <div className="row justify-content-center"
            style={{
                backgroundColor:"#1A2421",
                color:"white",
                paddingLeft:"30px",
                paddingRight:"10px"
            }}>
                <div className=" col-md-3">
                    <h3>What we do</h3>
                    <p>We are committed to creating opportunities for bright minds and creative souls in Kenya, 
                        where a vast majority of youth lack the basic opportunity to strengthen their ability.</p>
                </div>
                <div className="col-md-3">
                    <h3>Contact Us</h3>
                    <p>Phone: +254 727098070 | Email: vorp.eafrica@gmail.com</p>
                </div>
                <div className="col-md-3">
                    <h3>Main Links</h3>
                    <ul>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Home</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <h3>Certifications</h3>
                    <br/>

                </div>
            </div>
            <div className="bottom-footer">
            <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <p>Fatima Apartments, Arwing Kodhek off Marcus Garvey, Kilimani
               | Phone: +254 727098070 | Email: vorp.eafrica@gmail.com</p>
                <br/>
            <p>Copyright <i class="bi bi-c-circle"></i> {today.getFullYear()}  
            Voice of Reconciliation and Pacification</p>
          </div>
        </div>
            </div>
        </div>
    )
}