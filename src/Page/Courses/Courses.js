import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    return (
        <div>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>Courses</h2>
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/blog'}>Blog</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;