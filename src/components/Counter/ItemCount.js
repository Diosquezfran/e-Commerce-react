import React, { useState } from "react";
import Counter from "./Counter" 

const ItemCount = ( {stock} ) => {
    const [NuevoStock, setNuevoStock] = useState(stock);
    
    const onAdd = (q) => {
        if (q <= NuevoStock){
            alert(`Has agregado ${q} elementos al carrito`);
            setNuevoStock( NuevoStock - q );
        } else{
            alert(`Solo contamos con ${NuevoStock} unidad/es`);
        };
    };
    console.log(NuevoStock)
    console.log(stock)
    return(
        <div className="mx-auto">
            <Counter initial={0} stock={NuevoStock} onAdd={onAdd} />
        </div>
    );
};



export default ItemCount;