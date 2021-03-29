
const ItemDetail = ({detail2: detail}) =>{
    return(
    <div>
        <div className="col-6">
        </div>
        <img src={detail.img} className="imagen"></img>
        <div className="col-6 ml-5 mr-5">
            <h3>{detail.price}</h3>
            <h3>{detail.title}</h3>
        </div>
    </div>
)};

export default ItemDetail;
