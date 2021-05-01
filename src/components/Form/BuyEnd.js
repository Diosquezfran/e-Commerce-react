import React from 'react';
import { Link } from "react-router-dom";

const BuyEnd = () => {
    return (
        <div className="background-end">
            <h1 className="text-end">Gracias por su compra</h1>
            <Link className="link-end btn btn-secondary" to="/">LUX</Link>
        </div>
    )
}
export default BuyEnd;
