import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../ReactContext/CartContext";


const CartWidget = () =>{
    const {cart} = useContext(CartContext);
    let cantidad = 0;

    for(let i = 0; i < cart.length; i++){
        cantidad = cantidad + cart[i].q;
    }

    return (
        <div>
            {cantidad > 0 ? <Link to="/Cart" class="navbar-brand" href="#">
            <img src="https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg" alt="" width="30" height="24">
            </img>
            <span className="badge bg-primary rounded-pill" style={{color:"black"}}>{cantidad}</span>
            </Link> : <img src="https://i.pinimg.com/originals/bf/19/90/bf1990e247292b756ca7926443f00ab6.jpg" alt="" width="30" height="24">
            </img> }
            
        </div>
    )
};
export default CartWidget;


