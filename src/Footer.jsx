import React from 'react';
import logo from '../public/assets/logo.svg';

const Footer = () => {
    return (
        <div className='d-flex justify-content-around mt-5 p-5 text-bg-dark'>
            <div>
                <img src={logo} className='text-white' />

                <p className='mt-2'>Edwin Diaz is a software and <br />web technologies engineer, <br />a life coach trainer who is also a serial .</p>
                <section>
                    <i className="bi bi-google me-2"></i>
                    <i className="bi bi-facebook m-2"></i>
                    <i className="bi bi-twitter m-2"></i>
                    <i className="bi bi-linkedin m-2"></i>
                </section>
            </div>
            <div>
                <h4 className='mb-3'>About</h4>
                <p>Home</p>
                <p>Service</p>
                <p>Contact</p>
            </div>
            <div>
                <h4 className='mb-3'>Company</h4>
                <p>Why Car Doctor</p>
                <p>About</p>
            </div>
            <div>
                <h4 className='mb-3'>Support</h4>
                <p>Support Center</p>
                <p>Feedback</p>
                <p>Accessibility</p>
            </div>
        </div>
    );
};

export default Footer;