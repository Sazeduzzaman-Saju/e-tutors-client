import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import loginBg from '../../assets/register-img.png';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const Navigate = useNavigate();
    const [error, setError] = useState();
    const { signIn } = useContext(AuthContext);
    const location = useLocation()

    const from = location.state?.from?.pathName || '/';

    const handleLoginIN = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('')
                Navigate(from, { replace: true })

            })
            .catch(e => {
                console.log(e)
                setError(e.message)
            })

    }
    return (
        <div>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>Login</h2>
                        <hr />
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/login'}>Register</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container mb-5 mt-5 d-flex justify-content-center align-items-center '>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-1 col-md-6 form-area w-50 mt-5 pt-5'>
                            <img className='' src={loginBg} alt="" />
                        </div>
                        <div className='col-lg-6 col-sm-1 col-md-6 form-area'>
                            <form onSubmit={handleLoginIN}>
                                <label>
                                    <p class="label-txt">ENTER YOUR EMAIL</p>
                                    <input name="email" type="email" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR PASSWORD</p>
                                    <input name="password" type="password" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <button type="submit" className='buttons'>submit</button><br />
                                <div>
                                    {error}
                                </div>

                                <p className='text-white mt-2'>Not a member? <Link to="/register">Register</Link></p>
                                <p className='text-white'>or sign up with:</p>
                                <div className='d-flex justify-content-center align-items-center mt-2'>
                                    <section class="mb-4">

                                        <Link id='active' class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                        ><FaFacebook /></Link>

                                        <Link id='active' class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                        ><FaGoogle /></Link>

                                        <Link id='active' class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                        ><FaGithub /></Link>
                                    </section>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;