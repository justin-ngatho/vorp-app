import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SectionThree () {

    return (
      <div className="section-three" style={{marginLeft:"80px", backgroundImage:"url(images/section3.jpg",backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}>
        <div className="section-three-top">
          <div className="card-top-icon" style={{}}>
          <span class="ico-circle"> <i class="bi bi-calendar" ></i></span>
          </div>  
          <div className="card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
          <div className="card-top-icon">
          <span class="ico-circle"><i class="bi bi-eye"></i></span>
          </div>
          <div className="card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
          <div className="card-top-icon">
          <span class="ico-circle"> <i class="bi bi-trophy" ></i></span>
          </div>
          <div className="card-top">
            <h1>Mission</h1>
            <p>Building a better future for vulnerable and disadvantaged children to 
                have access to mentorship programs, various means of education, food items, 
                and other basic human needs.</p>
          </div>
        </div>

        <div className="section-three-bottom">
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
            <div className="card-bottom-right">
              <div className="row">
        <div class="col-md-6">
          <div class="work-box">
            <a href="img/work-3.jpg" data-lightbox="gallery-mf">
              <div class="work-img">
                <img src="images/9.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Mavrito Lana Dere</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="work-box">
            <a href="img/work-4.jpg" data-lightbox="gallery-mf">
              <div class="work-img">
                <img src="./images/9.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Bindo Laro Cado</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="work-box">
            <a href="img/work-5.jpg" data-lightbox="gallery-mf">
              <div class="work-img">
                <img src="/images/9.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Studio Lena Mado</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="work-box">
            <a href="img/work-6.jpg" data-lightbox="gallery-mf">
              <div class="work-img">
                <img src="./images/9.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="work-content">
                <div class="row">
                  <div class="col-sm-8">
                    <h2 class="w-title">Studio Big Bang</h2>
                    <div class="w-more">
                      <span class="w-ctegory">Web Design</span> / <span class="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="w-like">
                      <span class="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
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