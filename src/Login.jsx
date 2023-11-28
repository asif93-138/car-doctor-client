import React, { useEffect } from 'react';
import photo from '../public/assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
    const { signIn, user, loggingOut, siwG } = useContext(AuthContext)
    const navigate = useNavigate();
    const from = useLocation().state?.from.pathname || '/';
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

                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    function logInWithGoogle() {
        siwG()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);

            navigate(from, { replace: true });
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage);
          });
    }
    function siwGH() { console.log('clicked!'); }
    useEffect(() => {
        if (user) { document.getElementById('user').classList.replace("justify-content-between", "justify-content-around"); }
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
                            <button onClick={logInWithGoogle} type='button' className='btn'><i className="bi bi-google mx-2 fs-4"></i></button>
                            <button onClick={siwGH} type='button' className='btn'><i className="bi bi-github mx-2 fs-4"></i></button>
                            <p>Don't have an account? <Link to='/signup' className='text-danger text-decoration-none'><b>Sign up</b></Link></p>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Login;