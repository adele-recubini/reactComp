
import Item from "./Items";
import Items from "../items.json"
import icona from '../img/icona.svg'
import '../components/Items.css'




export const ItemsContainer = (props) => {

    return (
        <>
            <div className="contrainerjson ">
                <div className="col-md-7">
                    <div className="three-card-logo">
                        <div className="logo">
                            <img src={icona} />

                        </div>
                    </div>
                    <div className="three-card-title">
                        <h2>{props.title}</h2>
                        <div style={{ color: "#000094", width: "55px", height: "4px", border: "1px solid #000094", backgroundColor: "#000094" }}></div>
                        <p >{props.descrizio}</p>
                    </div>

                    <div className="three-card">
                        {JSON.parse(JSON.stringify(Items)).map(item => {
                            return <Item key={item.id} title={item.title} subtitle={item.subtitle} descrizio={item.descrizio} />;
                        })}
                    </div>

                </div>
            </div>
        </>
    );
};
export default ItemsContainer;