import React, { useEffect } from "react";
import './App.css';
import RouterApp from './components/Router/RouterApp';
import { getFirestore } from "./Config/Firebase";
import CartProvider from './ReactContext/CartProvider';


function App() {
  // useEffect(()=>{
  //   const db = getFirestore();
  //   const categoryCollection = db.collection("items");

  //   categoryCollection.get().then((respuesta) => {
  //     if(respuesta.size === 0) {
  //       console.log('sin datos');
  //     }

  //     respuesta.docs.map((c) => console.log({id: c.id, ...c.data()}));
  //   }).catch((error) => console.log('error'))
  // }, []);
 
  return (
    <div>
      <CartProvider>
       <RouterApp/>
      </CartProvider>
    </div>
  );
}
export default App;
