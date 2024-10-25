import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SectionThree () {

    return (
      <div className="section-three" style={{
        marginLeft:"80px", 
        backgroundImage:"url(images/section3.jpg",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
        <div className="row g-3"
        style={{
          backgroundColor:"brown",
          padding:"20px"

        }}>
          <div className="col-md-1 card-top-icon" style={{}}>
          <span class="ico-circle"> <i class="bi bi-calendar" ></i></span>
          </div>  
          <div className="col-md-3 card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
          <div className="col-md-1 card-top-icon">
          <span class="ico-circle"><i class="bi bi-eye"></i></span>
          </div>
          <div className="col-md-3 card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
          <div className="col-md-1 card-top-icon">
          <span class="ico-circle"> <i class="bi bi-trophy" ></i></span>
          </div>
          <div className="col-md-3 card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
        </div>

        <div className="section-three-bottom"style={{
          textAlign:"center",
          padding:"20px"
        }}>
          <div className='row g-1'>

         
          <div className='col-md-5 g-0'>
          <div className="card-bottom-left">
                <h1>Poverty rate in Kenya</h1>
                <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. 
                    Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, 
                    cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una 
                    galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. 
                </p>
                <p>
                No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos 
                    electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la c
                    reación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente 
                    con software de autoedición, como por ejemplo Aldus PageMaker, 
                    el cual incluye versiones de Lorem Ipsum.
                </p>
            </div>
          </div>
            
            <div className="col-md-7">
              <div className="row justify-content-center" >
              <div className=" col-12 col-md-6 col-12 card1"   style={{
                backgroundImage: "url(./images/hero1.jpg)",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
              }}>
              <a class="" href="" >
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
        
            <div class="col-12 col-md-6 card1"   style={{
                backgroundImage: "url(./images/hero1.jpg)",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
              }}>
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

            <div class="col-12 col-md-6 card1"   style={{
                backgroundImage: "url(./images/hero1.jpg)",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
              }}>
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

            <div class="col-12 col-md-6 card1"   style={{
                backgroundImage: "url(./images/hero1.jpg)",
                backgroundRepeat:"no-repeat",
                cursor:"pointer"
              }}>
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