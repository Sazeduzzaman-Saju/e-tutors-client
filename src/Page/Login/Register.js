import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginBg from '../../assets/register-img.png';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>Register</h2>
                        <hr />
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/register'}>Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container mb-5 d-flex justify-content-center align-items-center '>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-1 col-md-6 form-area w-50 mt-5 pt-5'>
                            <img className='mt-5' src={loginBg} alt="" />
                        </div>
                        <div className='col-lg-6 col-sm-1 col-md-6 form-area'>
                            <form>
                                <label>
                                    <p class="label-txt">ENTER YOUR NAME</p>
                                    <input type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR EMAIL</p>
                                    <input type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR PASSWORD</p>
                                    <input type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR CONFIRM PASSWORD</p>
                                    <input type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <button type="submit" className='buttons'>submit</button>
                                <p className='text-white mt-2'>All Ready Have Account? <Link to="/login">Login</Link></p>
                                <p className='text-white'>or sign up with:</p>
                                <div className='d-flex justify-content-center align-items-center mt-2'>
                                    <section class="mb-4">

                                        <Link class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                        ><FaFacebook /></Link>

                                        <Link class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                        ><FaGoogle /></Link>

                                        <Link class="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
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