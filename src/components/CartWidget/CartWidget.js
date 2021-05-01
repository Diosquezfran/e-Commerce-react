import React, {useContext} from "react";
import { Link } from "react-router-dom";
import CartContext from "../../ReactContext/CartContext";


const CartWidget = () =>{
    const {cart} = useContext(CartContext);
    let cantidad = 0;

    for(let i = 0; i < cart.length; i++){
        cantidad = cantidad + cart[i].q;
    }

    return (
        <div className="ml-autok">
            <Link to="/Cart" class="navbar-brand" href="#">
            <i className="fas fa-shopping-cart" style={{color:"white"}}>
             <span className="span-icon" style={{color:"white"}}>{cantidad === 0 ? "" : cantidad}</span>
            </i>
            </Link>
            
        </div>
    )
};
export default CartWidget;