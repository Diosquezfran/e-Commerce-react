import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../Config/Firebase";


const ItemListContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState( [] );
    const {id} = useParams();

    useEffect(()=>{
      const db = getFirestore();
      const items = db.collection("items");
      let arr = [];

      items.get().then(res => {
        if (res.size > 0) {
          res.docs.map(item =>
            arr.push({id:item.id, ...item.data()})
          );
        };

        if(id){
          setItems(arr.filter(item => item.genero === id))
        }else{
          setItems(arr);
        };
        setLoading(false);
      })

    }, [id]);

    return(
          <div>
              <h3 className="text-greeting">{props.greeting}</h3>
               <div className="container ">

                {
                  loading ? 
                  <p>Loading...</p>
                  :
               <ItemList items={items.id, items}/>
                }
                </div>
          </div>
    )
}


export default ItemListContainer;
