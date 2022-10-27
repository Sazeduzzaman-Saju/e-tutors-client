import React from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import blog from '../../assets/blog.jpg';
import Iframe from 'react-iframe';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className="pages-banner-area ptb-100" data-aos="fade-left" data-aos-duration="1000">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>Blog</h2>
                        <hr />
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/blog'}>Blog</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <section className="container-fluid mt-5">
                <div className="container ">
                    <div className='d-flex justify-content-center align-items-center' >
                        <img className='w-50' src={blog} alt="" data-aos="fade-left" data-aos-duration="2000" />
                    </div>
                    <div className='row mb-5 mt-3' >
                        <div className='col d-flex justify-content-center align-items-center'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="accordion" data-aos="fade-left" data-aos-duration="3000">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header> What is cors?</Accordion.Header>
                                    <Accordion.Body>
                                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos..
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Why are you using firebase? </Accordion.Header>
                                    <Accordion.Body>
                                        The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>What other options do you have to implement authentication? </Accordion.Header>
                                    <Accordion.Body>
                                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> How does the private route work?</Accordion.Header>
                                    <Accordion.Body>
                                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                                    <Accordion.Body>
                                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </section>
            <div>
                <div className='text-center' data-aos="fade-left" data-aos-duration="3000">
                    <h1>Follow Us On <br /><span className='blueviolet'>YouTube</span></h1>
                </div>
            </div>
            <section className="container-fluid mt-5 p-0 d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-duration="3000">
                <Iframe url="https://www.youtube.com/embed/z05PS1qYu9I"
                    width="600px"
                    height="320px"
                    id=""
                    className="presentation-video"
                    display="block"
                    position="relative" />
            </section>
            <section className="container-fluid mt-5 p-0" data-aos="fade-left" data-aos-duration="3000">

                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.792482872038!2d90.37337911429776!3d23.790402893165385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c734c4abc47d%3A0xd696584909ddf06f!2sShewraPara%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1666757511818!5m2!1sen!2sbd"
                    width="100%"
                    height="320px"
                    padding="0px"
                    id=""
                    className=""
                    display="block"
                    position="relative" />
            </section>
        </div>
    );
};

export default Blog;