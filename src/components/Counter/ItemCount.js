import React, { useContext, useEffect, useState } from "react";
import Counter from "./Counter";
import CartContext from "../../ReactContext/CartContext";

const ItemCount = ( {stock, detail} ) => {
    const {addItem} = useContext(CartContext);
    const [nuevoStock, setNuevoStock] = useState(stock);

   
    const onAdd = (q) => {
        if (q < stock){
            addItem(detail, q);
            setNuevoStock(stock - q) ;
        };
    };
    useEffect( () =>{
        setNuevoStock(stock)
    },[stock]);

   
    return(
        <div className="mx-auto">
            <Counter initial={0} stock={nuevoStock} onAdd={onAdd} item={detail}/>
        </div>
    );
};

export default ItemCount;