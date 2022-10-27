import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOutPage.css';
import contactsImage from '../../assets/contact.png';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const CheckOutePage = () => {
    const data = useLoaderData();
    const { title, before_price, latest_price, image, lessons, duration, created_at } = data;
    return (

        <section>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>Happy Journey</h2>
                        <hr />
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/courses'}>Courses</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-sm-1">
                        <div className="cart-content mt-5 mb-5">
                            <ul className="single-cart">
                                <li className="single-cart-list d-flex justify-content-between align-items-center" data-projection-id="132">
                                    <div className="single-cart-content d-flex align-items-center">
                                        <a href="/course/linux-administration-bootcamp-go-from-beginner-to-advanced/">
                                            <img src={image} alt="Linux Administration Bootcamp: Go from Beginner to Advanced" />
                                        </a>
                                        <div className="single-cart-contents">
                                            <h3>
                                                {title}
                                            </h3>
                                            <p><small>Update On: </small>{created_at.slice(0, 10)}</p>
                                            <div className="lectures d-flex justify-content-start align-items-center text-end">
                                                <small>{lessons} Lectures</small>
                                                <small className="ms-5">{duration} Duration</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="prw">
                                        <h4><small><del>${before_price}</del></small> ${latest_price}</h4>
                                        <div className="wis-rem d-flex align-items-center">
                                            <button className="btns checkoute-btn bg-white text-black">Remove</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-3 col-md-3 col-sm-1 mt-5 mb-5">
                        <div className="cart-total">
                            <h3>Total <span>${latest_price}</span></h3>

                            <p><del>${before_price}</del></p>

                            <span>
                                <button type="submit" className="btns checkoute-btn bg-white text-black" >Place Order</button>
                            </span>
                        </div>
                    </div>




                    <div className='container contact-form '>
                        <div className=" row d-flex justify-content-center align-items-center">
                            <div className='col-lg-6 col-md-6 col-sm-1'>
                                <div className="contact-image">
                                    <img src={contactsImage} alt="rocket_contact" />
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-1'>
                                <form>
                                    <label>
                                        <p class="label-txt">ENTER YOUR EMAIL</p>
                                        <input type="text" class="input" />
                                        <div class="line-box">
                                            <div class="line"></div>
                                        </div>
                                    </label>
                                    <label>
                                        <p class="label-txt">ENTER YOUR EMAIL</p>
                                        <input type="email" class="input" />
                                        <div class="line-box">
                                            <div class="line"></div>
                                        </div>
                                    </label>
                                    <label>
                                        <p class="label-txt">ENTER YOUR SUBJECT</p>
                                        <input type="text" class="input" />
                                        <div class="line-box">
                                            <div class="line"></div>
                                        </div>
                                    </label>
                                    <button type="submit" className='buttons'>submit</button>

                                    <p className='text-white mt-5'>Follow Us On:</p>
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
                </div>
            </div >
        </section >
    );
};

export default CheckOutePage;