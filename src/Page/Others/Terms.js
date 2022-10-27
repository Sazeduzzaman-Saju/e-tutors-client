import React from 'react';
import { Link } from 'react-router-dom';

const Others = () => {
    return (
        <div>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center' style={{ opacity: "1", transform: "none" }}>Terms &amp; Conditions</h2>
                        <ul className='d-flex justify-content-center ' style={{ opacity: "1", transform: "none" }}>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/register'}>Register</Link></span>
                        </ul>
                    </div>
                </div>
            </div>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h3>Terms and Conditions</h3>
                            <h5 className='mt-3 mb-5'>Welcome to Etutors!</h5>
                            <h5 className='mt-3 mb-5'><Link to={'/register'}>Return Register Page</Link></h5>

                            <p className="text-muted">These terms and conditions outline the rules and regulations for the use of Etutors's Website, located at https://etutors-7a080.web.app/.</p><br />
                            <p className="text-muted">By accessing this website we assume you accept these terms and conditions. Do not continue to use Etutors if you do not agree to take all of the terms and conditions stated on this page.</p><br />
                            <p className="text-muted">The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p><br />
                            <br />
                            <h5>Cookies</h5>
                            <br />
                            <p className="text-muted">We employ the use of cookies. By accessing Etutors, you agreed to use cookies in agreement with the Etutors's Privacy Policy.</p><br />
                            <p className="text-muted">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p><br />
                            <p className="text-muted">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p><br />
                            <br />
                            <h5>License</h5>
                            <br />
                            <p className="text-muted">Unless otherwise stated, Etutors and/or its licensors own the intellectual property rights for all material on Etutors. All intellectual property rights are reserved. You may access this from Etutors for your own personal use subjected to restrictions set in these terms and conditions.</p><br />
                            <p className="text-muted">You must not:
                                <ul>
                                    <li>Republish material from Etutors</li>
                                    <li>Sell, rent or sub-license material from Etutors</li>
                                    <li>Reproduce, duplicate or copy material from Etutors</li>
                                    <li>Redistribute content from Etutors</li>
                                </ul></p><br />
                            <p className="text-muted">Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.</p><br />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Others;