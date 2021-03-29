import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import {Link} from "react-router-dom";

const Item = ({id, item, img, title}) => {
    
    <ItemDetailContainer item={item}/>
    return(
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img}/>
            <div className="card-body"><p className="card-text">{title}</p></div>
            <button><Link to={`/Item/${id}`}>Detalles</Link></button>
        </div>
    );}

export default Item;

