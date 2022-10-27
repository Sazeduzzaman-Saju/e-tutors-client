import React from 'react';
import { Link } from 'react-router-dom';
import './FaqPage.css';
import Accordion from 'react-bootstrap/Accordion';
import FaqImage from '../../assets/faq.jpg';

const FaqPage = () => {
    return (
        <div>
            <div className="pages-banner-area ptb-100" data-aos="fade-left" data-aos-duration="3000">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>FAQ</h2>
                        <hr />
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/blog'}>Blog</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-5">
                <div className="container ">
                    <div className='d-flex justify-content-center align-items-center' data-aos="fade-left" data-aos-duration="3000">
                        <img className='w-50' src={FaqImage} alt="" />
                    </div>
                    <div className='row mb-5 mt-3' data-aos="fade-left" data-aos-duration="3000">
                        <div className='col d-flex justify-content-center align-items-center'>
                            <Accordion defaultActiveKey={['0']} alwaysOpen className="accordion" data-aos="fade-left" data-aos-duration="3000">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Why you should make an FAQ page ?</Accordion.Header>
                                    <Accordion.Body>
                                        An FAQ page is a time-saving customer service tactic that provides the most commonly asked questions and answers for current or potential customers.

                                        Before diving into how to make an FAQ page, you need to know why having one is so important. There are so many reasons beyond improving the customer experience for perfecting your FAQ page.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Saves time ? </Accordion.Header>
                                    <Accordion.Body>
                                        This reason might be the most obvious, but it’s a clear benefit of an FAQ page. Not only does the FAQ page save customers time, but it also saves employees time as well. Having an FAQ page ensures customers don’t have to sit on the phone for hours waiting for simple answers and employees don’t have to individually answer all questions.

                                        Companies dedicate a large portion of their budgets to customer service teams. When these teams don’t have to focus on answering the frequently asked questions, they can serve other customer issues in a more timely manner.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Earns trust!!</Accordion.Header>
                                    <Accordion.Body>
                                        Information is available at the click of a button, but as we all know, information is not always true. Because of this, customers are more skeptical than ever before. They hunt for products by sifting through reviews, looking at the product on multiple websites, and doing price checking across the internet.

                                        If your brand seems to understand the customer’s pain point and address it through a seamless user experience, the shopper will become a loyal customer.

                                        One of the most common pain points is when shoppers are wondering something about a product or service and there’s no information addressing that question. The customers think to themselves, “I can’t be the only person who’s wondering this,” yet the answer is nowhere to be found. This is a surefire way to guarantee they close the window and go to your competitor’s website.

                                        By creating a comprehensive FAQ page you can assure customers get the answer they need and keep shopping on your site.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header> Provides new insights?</Accordion.Header>
                                    <Accordion.Body>
                                        It’s difficult to get into the head of a shopper. Some buy on impulse and others buy after thorough research. By tracking the clicks on your FAQ page you can gather insights about your product or service that you didn’t know before. You can then inform your product team of these insights. From there, the product team can make changes to improve the product or experience.

                                        For example, if a dog collar company’s most clicked-on FAQ is, “how do I make sure my dog doesn’t slip out of the collar?” you’ll know that people are having issues or concerns about the collar staying on. The product team then might have to create a no-slip feature to ease this fear among potential customers.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Drives internal page views ?</Accordion.Header>
                                    <Accordion.Body>
                                        If you want your FAQ to be extremely thorough, which it should be, you can link to resources within your FAQ for your customers to find out more information. Whether you link to a blog that goes into more detail or a product page, this content helps the shoppers get the full story before making a purchase.

                                        Having all of these resources also shows that you care about your customer's happiness, and it will make them stay on pages longer and explore other pages that they may have missed otherwise.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default FaqPage;