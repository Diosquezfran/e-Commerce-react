import React from 'react';
import { Link } from "react-router-dom";

const EmptyCart = () => {
    return (
        <div className="empty-cart">
            <Link className="btn btn-dark btn-empty-cart" to="/category/hombre">
                FOR HIM
            </Link>
            <Link className="btn btn-dark btn-empty-cart" to="/">
                VIEW ALL
            </Link>
            <Link className="btn btn-dark btn-empty-cart" to="/category/mujer">
                FOR HER
            </Link>
        </div>
    )
}

export default EmptyCart;
