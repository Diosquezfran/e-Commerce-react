import React, { useContext }from "react";
import CartContext from "../../ReactContext/CartContext"
const ItemCart = ({cart}) => {
    const {removeItem} = useContext(CartContext);


    return(
        <div>
            
            <h4>Checkout</h4>
            <ul className="list-group mt-2">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    {cart.item.title}
                    <span className="badge bg-primary rounded-pill">{cart.q}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Precio: ${cart.item.price}
                </li>
                <button onClick={() => removeItem(cart.item.id)} className="btn btn-primary">
                    Eliminar Item
                </button>
            </ul>
        </div>
    )

};

export default ItemCart;