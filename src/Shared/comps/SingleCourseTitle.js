import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseSideInfo from './CourseSideInfo';
import DetailsCourse from './DetailsCourse';

const SingleCourseTitle = () => {
    const courseDetails = useLoaderData();
    const { id, title } = courseDetails;

    return (
        <div>
            <div className="pages-banner-area ptb-100">
                <div className="container">
                    <div className="pages-banner-content mt-5 mb-5">
                        <h2 className='text-white text-center'>{title}</h2>
                        <div className='breadcrumb d-flex justify-content-center'>
                            <span><Link to={'/home'}>Home</Link></span>
                            <span><Link to={'/courses'}>Courses</Link></span>
                        </div>
                    </div>
                </div>
            </div>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-1'>
                            <DetailsCourse key={id} courseDetails={courseDetails}></DetailsCourse>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-1'>
                            <CourseSideInfo key={id} courseDetails={courseDetails}></CourseSideInfo>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SingleCourseTitle;