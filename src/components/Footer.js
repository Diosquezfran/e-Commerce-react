import React from 'react';
import { Link } from 'react-router-dom';
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
    return (
       <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <div className="d-flex">
                        <p>Santiago del Estero, Argentina</p>
                    </div>
                    <div className="d-flex">
                        <a href="tel:+543855073021">+54 3855073021</a>
                    </div>
                    <div className="d-flex">
                        <p>Diosquezfran@gmail.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-2 col-sm-6">
                    <div className="row">
                        <div className="col">
                            <Link to="/category/hombre">Hombre</Link>
                            <br/>
                            <Link to="/category/mujer">Mujer</Link>
                            <br/>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-6 aling-items-center">
                    <div className="d-flex justify-content-center">
                        <FacebookShareButton
                        url={"https://www.linkedin.com/in/franco-diosquez/"}>
                            <FacebookIcon className="mx-3"/>
                        </FacebookShareButton>
                        <LinkedinShareButton
                        url={"https://www.linkedin.com/in/franco-diosquez/"}>
                            <LinkedinIcon className="mx-3"/>
                        </LinkedinShareButton>
                        <TwitterShareButton
                        url={"https://www.linkedin.com/in/franco-diosquez/"}>
                            <TwitterIcon className="mx-3"/>
                        </TwitterShareButton>
                    </div>
                    <p className="pt-3 text-center">
                        Copyright&copy;
                        {new Date().getFullYear()}&nbsp; Franco Diosquez || All Rights Reserved
                    </p>
                </div>
            </div>
        </div>  
       </div>
    )
}

export default Footer;
