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
                            <span><Link to={'/blog'}>Blog</Link></span>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Others;