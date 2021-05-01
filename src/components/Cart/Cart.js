import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../ReactContext/CartContext";
import EmptyCart from "./EmptyCart";
import ItemCart from "./ItemCart";


const Cart = () => {
    const {cart, clear} = useContext(CartContext);
    let cantidad = 0;
    for(let i = 0; i < cart.length; i++){
        cantidad += cart[i].item.price * cart[i].q;
    }
    return(
        <>
            {cart.map((cart, key) => 
                <ItemCart key={key} cart={cart} />
            )}
            {cart.length === 0 ? <EmptyCart/>
            :
            <div className="container">  <li className="list-group-item d-flex justify-content-between align-items-center mt-4">
                    Total a pagar<span className="badge bg-success rounded-pill">${cantidad}</span>
                </li>
            <button onClick={clear} className="btn btn-danger m-2">Vaciar carrito</button>
            <Link to="/checkout" className="btn btn-secondary m-2">Finzalizar compra</Link> </div> }            
        </>
        
    )

};


export default Cart;

// <div><h4>No tenés nada en el carrito</h4><Link to="/" className="btn btn-success pl-10 pr-10 mt-2 mb-5 pl-3 pr-3">home</Link></div>