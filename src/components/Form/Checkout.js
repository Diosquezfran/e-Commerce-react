import React, { useState, useContext } from "react";
import CartContext from "../../ReactContext/CartContext";
import { getFirestore } from "../../Config/Firebase";
import "firebase/firestore";
import firebase from "firebase/app";


const Checkout = () => {
    const {cart, item, q} = useContext(CartContext);

    const [buyer, setBuyer] = useState({
        name:'',
        apellido:'',
        phone:'',
        email:''
    });

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
    const createOrder = async (e) => {
        e.preventDefault();
        await order.add({buyer,
                cart,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: total
        })
        .then(res => {
            console.log('exito')
        }).catch((error)=>{
            console.log(error);
        });
    };

    return(
        <div>
            <center>
                <h2 className="p-3 mb-2 bg-success text-white mt-4">Finaliza tu compra!</h2>
                <form onSubmit={createOrder} className="w-75 p-3" id="form"  >
                    <label>Name</label>
                    <input onChange={createBuyer} type="text" name="name" className="form-control" required></input>
                    <label>Apellido</label>
                    <input onChange={createBuyer} type="text" name="apellido" className="form-control" required></input>
                    <label>Phone</label>
                    <input onChange={createBuyer} type="number" name="phone" className="form-control" required></input>
                    <label>Email</label>
                    <input onChange={createBuyer} type="email" name="email" className="form-control" required></input>

                    <button type="submit" className="btn btn-primary mt-2">Enviar datos</button>
                </form>
            </center>
        </div>
    )

};

export default Checkout;