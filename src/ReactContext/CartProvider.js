import React, {useState} from "react";
import RouterApp from "../components/Router/RouterApp";
import { toast } from "react-toastify";
import CartContext from "./CartContext";


const CartProvider = () =>{

    const [cart, setCart] = useState([]);
 

    const addItem = (item, q) => {
       
        const isInCart = cart.find(cart => cart.item.id === item.id);
        if (isInCart !== undefined ){
            const newQ = isInCart.q + q;
            const newCart = cart.filter(cart => cart.item.id !== item.id);

            setCart([
                ...newCart, {item, q:newQ}
            ])
        }else{
            setCart([
                ...cart, {item, q}
            ])
        };
        toast('Item agregado',{
            type:"info",
            autoClose:1500,
        })
    };

    const removeItem = (id) => {
        setCart(cart.filter(cart => cart.item.id !== id));
        toast('Item eliminado',{
            type:"error",
            autoClose:1500,
        })
    };

    const clear = () => {
        setCart([]);
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