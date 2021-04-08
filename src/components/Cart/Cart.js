import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../ReactContext/CartContext";
import ItemCart from "./ItemCart"

const Cart = () => {
    const {cart, clear} = useContext(CartContext);
    
    let cantidad = 0;
    for(let i = 0; i < cart.length; i++){
        cantidad += cart[i].item.price;
    }


    return(
        <div className="container">
            {cart.map((cart, key) => 
                    <ItemCart key={key} cart={cart} />
            )}
            {cart.length === 0 ? <div><h4>No tenés nada en el carrito</h4><button><Link to="/">home</Link></button></div> : <><li className="list-group-item d-flex justify-content-between align-items-center mt-4">
                Total a pagar<span className="badge bg-primary rounded-pill">${cantidad}</span>
            </li>
            <button onClick={clear}>Vaciar carito</button> </> }
            
        </div>
    )

};


export default Cart;