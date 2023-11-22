import React, { useContext, useEffect } from 'react';
import photo from '../public/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const { createUser, user } = useContext(AuthContext);
    function suHandler(event) {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.pswd.value;
        console.log(userName, email, password);

        createUser(email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: event.target.name.value
                }).then(() => {
                    event.target.reset(); console.log(user);
                }).catch((error) => {
                    console.log(error);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    useEffect(() => {
        if (user) {document.getElementById('asdf').classList.replace("justify-content-between", "justify-content-around");}
       }, [user])
    return (
        <div id='asdf' className='container d-flex justify-content-between mt-5'>
            <img src={photo} className='img-fluid' />
            {
                user ?
                <h4>Please <Link to='/login'><button type='button' className='btn btn-danger'>Log Out</button></Link> first!!</h4> :
                <div className="border rounded p-4 w-50">
                <form onSubmit={suHandler}>
                    <fieldset>
                        <legend className='text-center my-3'><h2>Sign Up</h2></legend>
                        <div className="mb-3 mt-3">
                            <label htmlFor="name"><b>Name :</b></label>
                            <input type="text" className="form-control my-3" id="name" placeholder="Enter Name" name="name" />
                        </div>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email"><b>Email:</b></label>
                            <input type="email" className="form-control my-3" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd"><b>Password:</b></label>
                            <input type="password" className="form-control my-3" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>

                        <button type="submit" className="btn btn-danger my-3 w-100">Sign Up</button>
                    </fieldset>
                </form>
                <div className='text-center mt-4'>

                    <p>Already have an account? <Link to='/login' className='text-danger text-decoration-none'><b>Login</b></Link></p>
                </div>
            </div>
            }
        </div>
    );
};

export default Signup;