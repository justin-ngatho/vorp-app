import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function SectionThree () {

    return (
      <div className="section-three" style={{marginLeft:"80px"}}>
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
            
            </div>
        </div>
      </div>
    );
}