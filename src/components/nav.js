import { useMemo ,useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapse from 'react-bootstrap/Collapse';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Nav() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   // State to track visibility of each section
   const [openStates, setOpenStates] = useState(null);

   // Function to toggle the visibility of a specific section
   const toggleFade = (index) => {
     
     setOpenStates(openStates === index ? null : index);
 
   };

  return (
    <div className="container" style={{width:"80px", border:"solid",borderWidth:'0.1px', borderColor:"grey",borderBottomColor:"white"}}>
    <div className='navbar-button' >
    <img src='./images/list.svg' style={{width:"50px"}} onClick={handleShow}/>
    </div>
    
     <div className='container-top'>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img style={{ width: "100px" }} src="./images/logo.jpeg" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="links-container">
          <div className="section-two-content">
          <Card className='card-navi'
            style={{
              width: "25vw",
              backgroundColor: "white",
              borderColor: "white",
              margin: "0 auto",
              
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item
                style={{
                  backgroundColor: "white",
                  textTransform: "uppercase",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <Button
                  onClick={() => toggleFade(0)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 0}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    textTransform: "none",
                    color: "black",
                  }}
                >
                  About Us
                </Button>

                <Collapse in={openStates === 0}>
                  <div
                    id="example-collapse-text"
                    style={{ paddingBottom: "15px", textAlign:"center", fontStyle:"none" }}
                  >
                    <a href=''>Core VALUES</a>
                    <br/>
                    <br/>
                    <a href=''>Annual Reports</a>
                    <br /><br/>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "white",
                  textTransform: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <Button
                  onClick={() => toggleFade(1)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 0}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Our Support
                </Button>
                <br />
                <Collapse in={openStates === 1}>
                <div
                    id="example-collapse-text"
                    style={{ paddingBottom: "15px",textAlign:"center", }}
                  >
                    <a href=''>The Team</a>
                    <br/><br/>
                    <a href=''>contributers</a>
                    <br /><br/>
                    <a href=''>USA Donor Hub</a><br/><br/>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "white",
                  color: "black",
                  cursor: "pointer",
                  textTransform: "none",
                }}
              >
                <Button
                  onClick={() => toggleFade(2)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 0}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Our Impact
                </Button>
                <br />
                <Collapse in={openStates === 2}>
                <div
                    id="example-collapse-text"
                    style={{ paddingBottom: "15px",textAlign:"center", }}
                  >
                    <a href=''>Core VALUES</a>
                    <br/><br/>
                    <a href=''>Annual Reports</a>
                    <br /><br/>
                  </div>
                </Collapse>
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "white",
                  textTransform: "uppercase",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <Button
                  onClick={() => toggleFade(3)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 0}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Scope Of Work
                </Button>
                <br />
                <Collapse in={openStates === 3}>
                <div
                    id="example-collapse-text"
                    style={{ paddingBottom: "15px",textAlign:"center", }}
                  >
                    <a href=''>FeaturedProjects</a>
                    <br/><br/>
                    <a href=''>Youth Programs</a>
                    <br /><br/>
                  </div>
                </Collapse>
                
              </ListGroup.Item>
              <ListGroup.Item
                style={{
                  backgroundColor: "white",
                  textTransform: "uppercase",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <Button
                  onClick={() => toggleFade(4)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 4}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Our Impact
                </Button>
                <br />
                <Collapse in={openStates === 4}>
                <div
                    id="example-collapse-text"
                    style={{ textAlign:"center",gap:"100px" }}
                  >
                    <a href=''>In Motion</a>
                    <br/><br/>
                    <a href=''>Newsletter</a>
                    <br /><br/>
                  </div>
                </Collapse>                
              </ListGroup.Item>
              <ListGroup.Item>
              <Button
                //   onClick={() => toggleFade(4)}
                  aria-controls="fade-text-1"
                  aria-expanded={openStates === 0}
                  style={{
                    backgroundColor: "white",
                    borderColor: "white",
                    width: "75vw",
                    height: "100%",
                    textAlign: "left",
                    color: "black",
                  }}
                >
                  Contact Us
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
          </div>
          <div className='container-bottom' >
             <i class="bi bi-facebook"></i>
             <i class="bi bi-twitter-x"></i>
             <i class="bi bi-tiktok"></i>
             <i class="bi bi-youtube"></i>
      </div>
        </Offcanvas.Body>
      </Offcanvas>
      </div>

      
      </div>
  );
}

export default Nav;