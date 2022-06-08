
import '../components/Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




function Blog(props) {
  const contenuto = props.articoli.map(articolo => (
    <div className="single-card" key={articolo.id}>
      <div className='ctn-card'>
        <div className='backgroud-ctn' style={{
          backgroundImage: `url(${articolo.img})`
        }}>  
        </div>
        <div className='ctn-text'>
          <div className='cont-date'>
            <h6 className='date-card'>{articolo.data}</h6>
          </div>
          <h2 className='title-card'>{articolo.testo}</h2>
          <p className='descrizio-card'>{articolo.descrizione}</p>
          <div className='container-btn'>
            <h4 className='button-card'><a href="#" role="button" style={{ color: "white" }}>{articolo.btn}</a> <span className='arrow' style={{ marginLeft: "10px" }}><FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} /> </span></h4>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="cont-card ">
        <div className="col-md-8">
          <div className="three-cards">
            {contenuto}
          </div>
        </div>
      </div>
    </>
  );
}
export default Blog;

