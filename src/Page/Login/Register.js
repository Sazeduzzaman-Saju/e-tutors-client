import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginBg from '../../assets/register-img.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { useState } from 'react';
import SocialAuth from '../../Shared/comps/SocialAuth';

const Register = () => {
    const { createNewUser, updateUser, } = useContext(AuthContext);
    const [error, setError] = useState();
    const [check, setChecked] = useState(false);

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset();
                updateUserProfile(name, photoURL)
            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            })
    }
    const updateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUser(profile)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(e => {
                console.error(e);
                setError(e.message)
            })
    }
    const handleChecked = (event) => {
        setChecked(event.target.checked)
    }
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
                            <form onSubmit={handleRegisterSubmit}>
                                <label>
                                    <p class="label-txt">ENTER YOUR NAME</p>
                                    <input name='name' type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR PHOTO URL</p>
                                    <input name='photoURL' type="text" class="input" />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR EMAIL</p>
                                    <input name='email' type="email" class="input" required />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <label>
                                    <p class="label-txt">ENTER YOUR PASSWORD</p>
                                    <input name='password' type="password" class="input" required />
                                    <div class="line-box">
                                        <div class="line"></div>
                                    </div>
                                </label>
                                <div class="form-check text-white">
                                    <input onClick={handleChecked} class="form-check-input" type="checkbox" value="" />

                                    <label class="form-check-label" for="flexCheckDefault">
                                        <>Check Our <Link to='/terms'>Terms & Condition</Link></>
                                    </label>
                                </div>
                                <button type="submit" className='submitBTN' disabled={!check}>SUBMIT</button>
                                <div>
                                    {error}
                                </div>
                                <p className='text-white mt-2'>All Ready Have Account? <Link to="/login">Login</Link></p>
                                <p className='text-white'>or sign up with:</p>
                                <div className='d-flex justify-content-center align-items-center mt-2'>

                                    <SocialAuth></SocialAuth>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;