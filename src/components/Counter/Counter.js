import React, { useState } from "react";
import { Link } from "react-router-dom";

const Counter = ({ initial = 0, stock, onAdd }) => {
    const [counter, setCounter] = useState( initial );
    
    const handleAdd = () => {
        if ( counter < stock ) {
            setCounter( counter + 1 );
        };

    };

    const handleSubstract = () => {
        if ( counter >= 1 ) {
            setCounter( counter - 1 );
        };
    };

    const handleInputChange = (e) => {
        e.preventDefault();
        setCounter( e.target.value ); 
    };


    return(
        <div className="card w-50 mt-2">
            <div className="d-flex mt-5 mb-3">
                <button onClick={handleSubstract} className="btn btn-light pl-3 pr-3"> - </button>
                <input value = { counter } onChange={handleInputChange} className="form-control text-center" />
                <button onClick={handleAdd} className="btn btn-light" > + </button>
            </div>
            <button onClick={counter > 0 ? (e) => onAdd(counter, e) : (e) => e.preventDefault()} className="btn btn-secondary "> Add to cart </button>
            {counter > 0 && <Link to="/Cart" className="btn btn-dark pl-10 pr-10 mt-2 mb-5 pl-3 pr-3">Finzalizar compra</Link>}
        </div>
    );

};

export default Counter;