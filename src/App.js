import React from "react";
import './App.css';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RouterApp from './components/Router/RouterApp';
import CartProvider from './ReactContext/CartProvider';


function App() {
  return (
    <div>
      <CartProvider>
       <RouterApp/>
      </CartProvider>
      <ToastContainer/>
    </div>
  );
}
export default App;
