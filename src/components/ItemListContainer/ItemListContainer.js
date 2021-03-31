import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
    const [items, setItems] = useState([]);
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
                  if (id){
                    setItems(resultado.filter( i => i.genero === id));
                  }else
                    {setItems(resultado)}
              })
      })
      return(
          <div className="container">
              <h3>{props.greeting}</h3>
              <ItemList items={items}/>
          </div>
      )
}


export default ItemListContainer;
