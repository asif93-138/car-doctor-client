import React from 'react';
import logo from '../public/assets/logoH.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='container my-3'>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src={logo} className='' /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2 text-black">
                                <b><Link className="nav-link" to="/">Home</Link></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><Link className="nav-link" to="/about">About</Link></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><Link className="nav-link" to="/checkouts">Orders</Link></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><Link className="nav-link" to="/login">Log in</Link></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><Link className="nav-link" to="/signup">Sign up</Link></b>
                            </li>
                        </ul>
                        <i className="bi bi-cart2 mx-4 fs-5"></i>
                        <i className="bi bi-search mx-4 fs-5"></i>
                        <button className="btn btn-outline-danger px-4 py-3" type="button">Appointment</button>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;