import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import {Link} from "react-router-dom";

const Item = ({id, item, img, title}) => {
    
    return(
            <div className="col-md-3 " >
                <div className="card text-center">
                    <img src={img} alt="Avatar" />
                    <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <Link to={`/Item/${id}`} className="btn btn-outline-primary" >Detalles</Link>           
                    </div>
                </div>
            </div>
    );}

export default Item;

