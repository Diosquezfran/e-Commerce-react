import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Counter = ({ initial = 0, stock, onAdd, item }) => {
    const [counter, setCounter] = useState( initial );
    const handleAdd = () => {
        if ( counter < stock ) {
            setCounter( counter + 1 );
        };

    };

    const handleSubstract = () => {
        if ( counter > 1 ) {
            setCounter( counter - 1 );
        };
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setCounter( e.target.value ); 
    };


    return(
        <div className="card col-auto text-center w-25">
            <h3 className="mt-2">Stock {stock}</h3>
            <div className="d-flex mt-5 mb-3">
                <button onClick={handleSubstract} className="btn btn-light pl-3 pr-3"> - </button>
                <input value = { counter } onChange={handleInputChange} className="form-control text-center" />
                <button onClick={handleAdd} className="btn btn-light" > + </button>
            </div>
            <button onClick={stock > 0 ? (e) => onAdd(counter, e) : (e) => e.preventDefault()} className="btn btn-primary "> Agregar al carrito </button>
            {counter > 0 && <button className="btn btn-success pl-10 pr-10 mt-2 mb-5 pl-3 pr-3" ><Link to="/Cart" className="text-white">Finzalizar compra</Link></button>}
        </div>
    );

};

export default Counter;