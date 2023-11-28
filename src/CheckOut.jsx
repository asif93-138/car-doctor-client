import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const CheckOut = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    // console.log(user);
    function formHandler(event) {
        event.preventDefault();
       
        const collections = event.target;
        const name = collections.name.placeholder;
        const email = collections.email.placeholder;
        const phone = collections.phone.value;
        const message = collections.massage.value;
        const order = { name, email, phone, message, service };
        
        fetch('http://localhost:3000/checkouts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {alert('Order Confirmed!!')}
        })

        collections.reset();
    }
    return (
        <div className='container'>
            <div className='d-flex justify-content-center mb-5'><div className='img-checkout rounded-4'><h1 className='text-white'><b>Check Out</b></h1></div></div>
            <form className="bg-light rounded-3 p-4" onSubmit={formHandler}>
             
                    <input type="text" className="form-control d-inline w-100 my-2" placeholder={user.displayName} name="name" readOnly />
                    

                    <input type="email" className="form-control d-inline cs-input my-2 me-2" placeholder={user.email} name="email" readOnly />
                    <input type="tel" className="form-control d-inline cs-input my-2 ms-2" placeholder="Your Phone" name="phone" />
                    <textarea className='form-control' rows='5' placeholder="Your Massage" name="massage" style={{resize: 'none'}}></textarea>
            
                <button type="submit" className="btn btn-danger mt-3 w-100">Order Confirm</button>
            </form>
        </div>
    );
};

export default CheckOut;