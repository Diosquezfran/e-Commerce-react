import React, { useState, useContext } from "react";
import CartContext from "../../ReactContext/CartContext";
import { getFirestore } from "../../Config/Firebase";
import "firebase/firestore";
import firebase from "firebase/app";
import { Link } from "react-router-dom";


const Checkout = () => {
    const {cart, clear} = useContext(CartContext);
    const initialValues = {
        name:'',
        apellido:'',
        phone:'',
        email:''
    };
    const [buyer, setBuyer] = useState(initialValues);

    const createBuyer = ({target}) =>{
        setBuyer({
            ...buyer,
            [target.name] :  target.value
        });
    };

    let total = 0;
    for(let i = 0; i < cart.length; i++){
        total += cart[i].item.price * cart[i].q;
    }

    const order = getFirestore().collection("orders");
    const createOrder = async(e) => {
        e.preventDefault();
        await order.add({buyer,
                cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total
        })
        .then(res => {
            console.log(res)          
        }).catch((error)=>{
            console.log(error);
        });
        setBuyer({...initialValues});
        clear();
        
    };
     

    return(
        <div>
            <h2 className="p-3 mb-2 bg-dark text-white text-center mt-4">Finaliza tu compra!</h2>
            <p className="text-center">Estos son los datos que necesitamos para crear tu factura</p>
            <center>
                <form onSubmit={createOrder} className="w-75 p-3" id="form"  >
                    <input onChange={createBuyer} placeholder="Nombre" value={buyer.name} type="text" name="name" className="form-control mt-4" required></input>
                    <input onChange={createBuyer} placeholder="Apellido" value={buyer.apellido} type="text" name="apellido" className="form-control mt-4" required></input>
                    <input onChange={createBuyer} placeholder="Teléfono" value={buyer.phone} type="number" name="phone" className="form-control mt-4" required></input>
                    <input onChange={createBuyer} placeholder="Email" value={buyer.email} type="email" name="email" className="form-control mt-4" required></input>
                    <Link type="submit" to="/thanks" className="btn btn-secondary mt-2">Enviar datos</Link>
                </form>
            </center>
        </div>
    )

};

export default Checkout;