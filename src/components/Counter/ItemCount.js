import React, { useContext, useState } from "react";
import Counter from "./Counter";
import CartContext from "../../ReactContext/CartContext";

const ItemCount = ( {stock, detail} ) => {
    const {addItem, removeItem, clear, isInCart, cart} = useContext(CartContext )
    const [NuevoStock, setNuevoStock] = useState(stock);
    
    const onAdd = (q) => {
        if (q <= NuevoStock){
            // alert(`Has agregado ${q} elementos al carrito`);
            setNuevoStock( NuevoStock - q );
            addItem(detail, q);
        } 
    };
    return(
        <div className="mx-auto">
            <Counter initial={0} stock={NuevoStock} onAdd={onAdd} item={detail} />
        </div>
    );
};



export default ItemCount;