import React from 'react';
import './Home.css'
import Banner from '../../assets/banner-img-1.png'
import testimonial from '../../assets/testimonial-1.png'
import Teaching from '../../assets/testimonial-1.png'
import Member from '../../assets/business-img.png'
import Relax from '../../assets/relax.png'
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight, FaMandalorian, FaConnectdevelop } from 'react-icons/fa';
import { FcBusinessman, FcClock, FcAssistant } from "react-icons/fc";
import Card from 'react-bootstrap/Card';
import icon1 from '../../assets/feature-icons/1.png'
import icon2 from '../../assets/feature-icons/2.png'
import icon3 from '../../assets/feature-icons/3.png'
import icon4 from '../../assets/feature-icons/4.png'
import Testimonial from '../../Shared/Testimonial/Testimonial';


const Home = () => {
    return (
        <div className=''>
            <section className='container mb-5'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-lg-6 col-md-6 col-sm-1 mt-5 pt-5'>
                        <img className='img-fluid' src={Banner} alt="" />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-1 mt-5'>
                        <div className='banner-details'>
                            <h1>Improve Your Online Learning Experience <br /> Better Instantly</h1>
                            <p>We have <span style={{ color: 'blueviolet' }}>40k+</span> Online courses & <span style={{ color: 'blueviolet' }}>500K+</span> Online registered student. Find your desired Courses from them</p>
                        </div>
                        <div className='banner-details'>
                            <p>
                                <span style={{ color: 'blueviolet' }}>500K+</span> People already trusted us.
                                <Link as={NavLink} className="ms-2 view-courses" to="/courses">View Courses <FaArrowRight /></Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container-fluid bg-light mb-5 '>
                <div className='container pt-5'>
                    <div className='text-center '>
                        <p style={{ color: 'blueviolet', fontWeight: "bold" }}>Our Features</p>
                        <h3>Why You Should Choose Edmy</h3>
                    </div>
                    <div className='row d-flex justify-content-center align-items-center mt-5 pb-5'>
                        <div className='col-lg-3 col-md-3 col-sm-1 '>
                            <Card className="p-1 feature-cards">
                                <Card.Img variant="top" className="ms-3" style={{ width: "100px" }} src={icon1} />
                                <Card.Body>
                                    <Card.Title>Expert-Led Video</Card.Title>
                                    <Card.Text className='card-text'>
                                        Instructors from around the world teach millions of students on Edmy through video
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-1 '>
                            <Card className="p-1 feature-cards">
                                <Card.Img variant="top" className="ms-2" style={{ width: "100px" }} src={icon2} />
                                <Card.Body>
                                    <Card.Title>In-Demand Trendy</Card.Title>
                                    <Card.Text className='card-text'>
                                        Instructors from around the world teach millions of students on Edmy through video.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-1 '>
                            <Card className="p-1 feature-cards">
                                <Card.Img variant="top" className="ms-1" style={{ width: "100px" }} src={icon3} />
                                <Card.Body>
                                    <Card.Title>Segment Your Learning</Card.Title>
                                    <Card.Text className='card-text'>
                                        Instructors from around the world teach millions of students on Edmy through video.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className='col-lg-3 col-md-3 col-sm-1 '>
                            <Card className="p-1 feature-cards">
                                <Card.Img variant="top" className="ms-1" style={{ width: "100px" }} src={icon4} />
                                <Card.Body>
                                    <Card.Title>Segment Your Learning</Card.Title>
                                    <Card.Text className='card-text'>
                                        Instructors from around the world teach millions of students on Edmy through video.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mb-5 mt-5'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <img className='img-fluid' src={testimonial} alt="" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <div className='testimonials-conetent'>
                                <h1>Our Students Are Our Strength. <span className='fw-bold blueviolet'>They Say..</span></h1>
                            </div>
                            <Testimonial></Testimonial>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mb-5 mt-5'>
                    <div className='row d-flex justify-content-center align-items-center'>

                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <div className='testimonials-conetent'>
                                <h1>Become An Instructor Today And<span className='fw-bold blueviolet'> Start Teaching</span> </h1>
                                <p>Instructors from around the world teach millions of students on Edmy. We provide the tools and skills to teach what you love. And you can also achieve your goal with us</p>
                            </div>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-lg-6'>
                                    <p className='p-3 bg-white shadow-lg instructor-options'><FcBusinessman /> Expert Instruction</p>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='p-3 bg-white shadow-lg instructor-options'><FcClock /> Lifetime Access</p>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center align-items-center'>
                                <div className='col-lg-6'>
                                    <p className='p-3 bg-white shadow-lg instructor-options'><FaMandalorian /> Remote Learning</p>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='p-3 bg-white shadow-lg instructor-options'><FaConnectdevelop /> Self Development</p>
                                </div>
                            </div>
                            <button className='btns mt-5'>Become An Instructor</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <img className='img-fluid' src={Teaching} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container-fluid relax d-flex justify-content-center'>
                    <div className='container d-flex justify-content-center align-items-center '>
                        <h1 className='text-center text-white'>Be A Member Of Etutors Platform <br /> Start Learning Today</h1>
                    </div>
                </div>
            </section >
            <section>
                <div className='container mb-5 mt-5'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <img className='img-fluid' src={Member} alt="" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-1'>
                            <div className='testimonials-conetent'>
                                <h1>Be A Member Of Etutors Business & Start Earning Limitless Today</h1>
                                <p>Instructors from around the world teach millions of students on Etutors. We provide the tools and skills to teach what you love. And you can also achieve your goal with us.</p>
                            </div>
                            <button className='btns mt-5'><FcAssistant />  Join Now</button>
                        </div>

                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;