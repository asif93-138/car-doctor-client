import React, { useEffect } from 'react';
import photo from '../public/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';


const Login = () => {
    const { signIn, user, loggingOut } = useContext(AuthContext)
    function loginHandler(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pswd.value;
        console.log(email, password);

        signIn(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    function siwG() { console.log('clicked!'); }
    function siwGH() { console.log('clicked!'); }
    useEffect(() => {
        if (user) {document.getElementById('user').classList.replace("justify-content-between", "justify-content-around");}
       }, [user])
    return (
        <div id='user' className='container d-flex justify-content-between mt-5'>
            <img src={photo} className='img-fluid' />
            {
                user ?
                <h4>Please <button onClick={loggingOut} type='button' className='btn btn-danger'>Log Out</button> first!!</h4> :
                <div className="border rounded p-4 w-50">
                <form onSubmit={loginHandler}>
                    <fieldset>
                        <legend className='text-center my-3'><h2>Login</h2></legend>
                        <div className="mb-3 mt-3">
                            <label htmlFor="email"><b>Email:</b></label>
                            <input type="email" className="form-control my-3" id="email" placeholder="Enter email" name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd"><b>Password:</b></label>
                            <input type="password" className="form-control my-3" id="pwd" placeholder="Enter password" name="pswd" />
                        </div>

                        <button type="submit" className="btn btn-danger my-3 w-100">Log in</button>
                    </fieldset>
                </form>
                <div className='text-center mt-4'>
                    <p className='m-0'>Or, sign in with</p>
                    <button onClick={siwG} type='button' className='btn'><i className="bi bi-google mx-2 fs-4"></i></button>
                    <button onClick={siwGH} type='button' className='btn'><i className="bi bi-github mx-2 fs-4"></i></button>
                    <p>Don't have an account? <Link to='/signup' className='text-danger text-decoration-none'><b>Sign up</b></Link></p>
                </div>
            </div>
            }
        </div>
    );
};

export default Login;