import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CheckOutPage.css';
import contactsImage from '../../assets/contact.png';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import ReactPrint from 'react-to-print';
import toast from 'react-hot-toast';

const CheckOutePage = () => {
    const data = useLoaderData();
    const { title, before_price, latest_price, image, short_desc, created_at } = data;
    const ref = useRef();
    const notify = () => toast.success('You Order Has Been Successfully Placed.');
    return (

        <section>
            <div className="pages-banner-area ptb-100" data-aos="fade-left" data-aos-duration="3000">
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
            <div ref={ref} className='container' >
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-sm-1 mt-5 mb-5">
                        <div className="card mb-3" data-aos="fade-left" data-aos-duration="2000">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={image} className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-white p-3" style={{ backgroundColor: "blueviolet" }}>
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text text-white">{short_desc.slice(0, 150)}</p>
                                        <p className="card-text text-white"><small className="text-white"> Created At: {created_at.slice(0, 10)}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-md-3 col-sm-1 mt-5 mb-5" data-aos="fade-left" data-aos-duration="3000">
                        <div className="cart-total">
                            <h3>Total <span>${latest_price}</span></h3>
                            <p><del>${before_price}</del></p>
                            <span>
                                <button onClick={notify} type="submit" className="btns checkoute-btn bg-white text-black" >Place Order</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-center align-content-center'>
                <ReactPrint trigger={() => <button className='btns'>Download Invoice</button>} content={() => ref.current}></ReactPrint>
            </div>
            <div className='container contact-form ' data-aos="fade-left" data-aos-duration="3000">
                <div className=" row d-flex justify-content-center align-items-center">
                    <div className='col-lg-6 col-md-6 col-sm-1'>
                        <div className="contact-image">
                            <img className='img-fluid' src={contactsImage} alt="rocket_contact" />
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-1'>
                        <form>
                            <label>
                                <p className="label-txt">ENTER YOUR EMAIL</p>
                                <input type="text" className="input" />
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </label>
                            <label>
                                <p className="label-txt">ENTER YOUR EMAIL</p>
                                <input type="email" className="input" />
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </label>
                            <label>
                                <p className="label-txt">ENTER YOUR SUBJECT</p>
                                <input type="text" className="input" />
                                <div className="line-box">
                                    <div className="line"></div>
                                </div>
                            </label>
                            <button type="submit" className='buttons'>submit</button>

                            <p className='text-white mt-5'>Follow Us On:</p>
                            <div className='d-flex justify-content-center align-items-center mt-2'>
                                <section className="mb-4">

                                    <Link id='active' className="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                    ><FaFacebook /></Link>

                                    <Link id='active' className="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                    ><FaGoogle /></Link>

                                    <Link id='active' className="btn btn-outline-light auth-buttons btn-floating m-1" to="/#" role="button"
                                    ><FaGithub /></Link>
                                </section>
                            </div>

                        </form>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default CheckOutePage;