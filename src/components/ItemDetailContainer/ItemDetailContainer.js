import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([]);
    const {id} = useParams();
      useEffect(() => {
          new Promise((todoBien, todoMal) => {
            setTimeout(() => {
                todoBien([{
                  id : 1,
                  title : 'jean',
                  price : 5000,
                  img: "https://jc-moda.com/wp-content/uploads/2019/10/bermuda-atr.jpg",
                  genero:"hombre",
                  stock: 5},
                  {
                    id : 2,
                  title : 'pantalon',
                  price : 6000,
                  img: "https://http2.mlstatic.com/D_NQ_NP_653255-MLA43802165234_102020-O.jpg",
                  genero:"mujer",
                  stock: 6}]
                );
            }, 2000);
          }).then((resultado) =>{
              setDetail(resultado.filter(d => d.id === parseInt(id) ) [0]);
              setLoading(false)
              })
      }, [id])
      return(
          <div className="container">
            {
              loading ? 
              <p>Loading...</p>
              :
                <ItemDetail detail2 = {detail} />
            }
          </div>
      )
}









// const ItemDetail = ({detail2: detail}) => {
//   return(
//       <div className="card" style={{width: "18rem"}}>
//         <img src={detail.img} className="card-img-top" alt={detail.title}/>
//           <div class="card-body">
//           <h5 class="card-title">{detail.title}</h5>
//           <p class="card-text">${detail.price}</p>
//           <a href="#" class="btn btn-success">añadir al carrito</a>
//            <ItemCount stock={detail.stock} detail={detail}/>
//           </div>
//         </div>
//   )
// };

















export default ItemDetailContainer;