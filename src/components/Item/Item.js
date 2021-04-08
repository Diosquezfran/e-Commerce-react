import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import {Link} from "react-router-dom";

const Item = ({id, item, img, title}) => {
    
    <ItemDetailContainer item={item}/>
    return(
        <div className="card-columns" style={{width:"auto"}}>
            <img src={img} alt="Avatar" style={{width:"20%"}}/>
            <div className="container">
            <h4><b>{title}</b></h4>
            <button className="btn btn-primary"><Link to={`/Item/${id}`} style={{color:"white"}}>Detalles</Link></button>           
            </div>
        </div>

        // <div className="card" style={{width: "15%;"}}>
        //     <img src={img} className="card-img-top" style={{width: "18rem;"}} alt="img"/>
        //     <div className="card-body">
        //      <p className="card-text">{title}</p>
        //      <button><Link to={`/Item/${id}`}>Detalles</Link></button>
        //     </div>

        // </div>









        // <div className="card" style={{width: '18rem'}}>
        //     <img className="card-img-top" src={img}/>
        //     <div className="card-body"><p className="card-text">{title}</p></div>
        //     <button><Link to={`/Item/${id}`}>Detalles</Link></button>
        // </div>
    );}

export default Item;

