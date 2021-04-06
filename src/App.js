import React, { useState,useContext } from "react";
import './App.css';
import RouterApp from './components/Router/RouterApp';
import CartProvider from './ReactContext/CartProvider';


function App() {
  
 
  return (
    <div>
      <CartProvider>
       <RouterApp/>
      </CartProvider>
    </div>
  );
}
export default App;
