import '../components/Items.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Item(props) {

    return (

        <div class="work col-md-6 col-lg-4">
            <h5 className='title'>{props.title}</h5>
            <p className='desc'>{props.subtitle}</p>
            <a href="#" style={{ color: "black" }}>{props.descrizio}  <span className='arrow' style={{ marginLeft: "10px" }}><FontAwesomeIcon icon={faArrowRight} style={{ color: "#000094" }} /> </span> </a>
        </div>
    )
}

export default Item;
