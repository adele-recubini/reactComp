import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Main(props) {
  return (

    <div className="jumbotron jumbotron-fluid" style={{
      backgroundImage: `url(https://images5.alphacoders.com/725/725726.jpg)`,
      height: "100%",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
      <div className="containerl" style={{ color: "black", marginLeft: "9px", marginBottom: "100px", borderColor: "#D8E0E0", width: "280px", backgroundColor: "#D8E0E0", fontSize: "smaller" }}>  <a href="#" style={{ color: "black", marginLeft: "3px" }}> {props.link}</a></div>
      <div className="container" style={{ maxWidth: "900px" }} >
        <h4 style={{ color: "white", fontWeight: "bold", padding: "5px", }} className="display-4">{props.title}</h4>
        <h6 style={{ color: "white", paddingBottom: "25px", textAlign: "justify", paddingTop: "25px", paddingBottom: "25px", maxWidth: "550px" }} className="lead">{props.descrizio}</h6>

        <a className="btn btn-primary btn-lg" href="#" role="button" style={{ backgroundColor: "#000094", border: "#000094", padding: "10px" }}>{props.textbtn} <span className='arrow' style={{ marginLeft: "10px" }}><FontAwesomeIcon icon={faArrowRight} style={{ color: "white" }} /> </span></a>
      </div>
    </div>
  );
}
export default Main;
