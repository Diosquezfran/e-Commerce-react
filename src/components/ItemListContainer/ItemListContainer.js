import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
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
                  img: "https://img.hafter.com.ar/static/timthumb.php?q=86&w=800&src=uploads/estancias/2021/02/20i601mo-PANTALON-FEDRA-Verde2.jpg",
                  genero:"mujer",
                  stock: 6}]
                );
            }, 1000);
          }).then((resultado) =>{
                  if (id){
                    setItems(resultado.filter( i => i.genero === id));
                  }else
                    {setItems(resultado)};
                    setLoading(false);
              })
      })
      return(
        
          <div className="container">
              <h3>{props.greeting}</h3>
              {
                loading ? 
                <p>Loading...</p>
                :
                <ItemList items={items}/>
              }
          </div>
      )
}


export default ItemListContainer;
