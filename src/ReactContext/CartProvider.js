import React, {useState} from "react";
import RouterApp from "../components/Router/RouterApp";
import CartContext from "./CartContext";


const CartProvider = () =>{

    const [cart, setCart] = useState([]);

    const addItem = (item, q) => {
        setCart([
        ...cart, {item, q}
        ])
    };

    const removeItem = (item) => {
        setCart(cart.filter(cart => cart.id !== item.id));
        console.log(cart)

    };

    const clear = () => {
        setCart([]);
        console.log(cart)

    };

    const isInCart = (item) => {
        const isInCart = cart.find(cart => cart.id === item.id);
        if (isInCart !== undefined ){
            return true;
        }else{
            return false
        };
    };

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart}}>
            <RouterApp/>
        </CartContext.Provider>
    )

};

export default CartProvider;