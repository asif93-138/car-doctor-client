import React from 'react';
import logo from '../public/assets/logoH.svg';

const Header = () => {
    return (
        <div className='container my-3'>
            <nav className="navbar navbar-expand-sm navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} className='' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item mx-2 text-black">
                                <b><a className="nav-link" href="#">Home</a></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><a className="nav-link" href="#">About</a></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><a className="nav-link" href="#">Services</a></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><a className="nav-link" href="#">Blog</a></b>
                            </li>
                            <li className="nav-item mx-2 text-black">
                                <b><a className="nav-link" href="#">Contact</a></b>
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