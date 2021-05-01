import ItemCount from "../Counter/ItemCount"

const ItemDetail = ({detail}) =>{
    
    let discount = detail.price + 800;
    console.log(discount);

    return(
        <>
            <img src={detail.img} className="imagen-detail" alt="detail"/>
            <div className="card-body detail-content">
                <h3 className="item-detail text-secondary">{detail.title}</h3>
                <p className="item-detail"><b>Precio:</b><i className="discount-before">${discount}</i> ${detail.price}</p>
                <p className="item-detail"><b>Descripción: </b><i>{detail.description}</i></p>
                <div className=""><ItemCount stock={detail.stock} detail={detail}/>
                </div>
            </div>
        </>
)};

export default ItemDetail;
