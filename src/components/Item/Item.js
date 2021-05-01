import {Link} from "react-router-dom";

const Item = ({id, item, img, title}) => {
    
    return(
            <div className="col-md-4 col-lg-6 col-xs-6 mt-4" >
                <div className="card text-center">
                    <img src={img} className="card-image" alt="Avatar" />
                    <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <Link to={`/Item/${id}`} className="btn btn-outline-secondary" >Show Details</Link>           
                    </div>
                </div>
            </div>
    );}

export default Item;

