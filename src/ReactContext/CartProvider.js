import React, {useState} from "react";
import RouterApp from "../components/Router/RouterApp";
import CartContext from "./CartContext";


const CartProvider = () =>{

    const [cart, setCart] = useState([]);
    console.log(cart);


    const addItem = (item, q) => {
        setCart([
        ...cart, {item, q}
        ])
    };

    const removeItem = (item, q) => {
        setCart(cart.filter(cart => cart.id !== item.id))
        console.log('remove item')
    };

    const clear = () => {
        setCart([]);
        console.log('clear')
    };

    const isInCart = (item) => {
        const isInCart = cart.find(cart => cart.id === item.id);
        if (isInCart != undefined ){
            return true;
        }else{
            return false
        };

        console.log(isInCart)
    };

    return(
        <CartContext.Provider value={{addItem, removeItem, clear, isInCart, cart}}>
            <RouterApp/>
        </CartContext.Provider>
    )

};

export default CartProvider;