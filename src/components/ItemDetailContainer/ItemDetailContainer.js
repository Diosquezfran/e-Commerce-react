import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../Config/Firebase";

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false)
    const [detail, setDetail] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const db = getFirestore();
        db.collection('items').doc(id)
        .get()
        .then(res => {
          setDetail({id:res.id, ...res.data()})
        })

    }, [id]);

    return(
          <div className="container d-flex">
            {
              loading ? 
              <p>Loading...</p>
              :
                <ItemDetail detail={detail} />
            }
          </div>
      )
}

export default ItemDetailContainer;
