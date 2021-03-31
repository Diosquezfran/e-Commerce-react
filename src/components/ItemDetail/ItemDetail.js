import ItemCount from "../Counter/ItemCount"

const ItemDetail = ({detail2: detail}) =>{
    return(
    <div>
        <div className="col-6">
        </div>
        <img src={detail.img} className="imagen"></img>
        <div className="col-6 ml-5 mr-5">
            <h5>Precio: ${detail.price}</h5>
            <h5>Tipo: {detail.title}</h5>
        </div>
        <ItemCount stock={detail.stock}/>
    </div>
    
)};

export default ItemDetail;
