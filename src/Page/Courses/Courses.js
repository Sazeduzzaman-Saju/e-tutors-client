import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseTitle from '../../Shared/comps/CourseTitle';
import SingleCourseTitle from '../../Shared/comps/SingleCourseTitle';

const Courses = () => {

    const [courseTitle, setCourseTitle] = useState([]);

    useEffect(() => {
        fetch('https://etutor-server.vercel.app/coursetitle')
            .then(res => res.json())
            .then(data => setCourseTitle(data))
    }, [])
    const coursesTitle = useLoaderData();
    console.log(coursesTitle);
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

            {/* Main Content Start */}
            <section>
                <div className='container mt-5 mb-5' sticky="top">
                    <div className='row' >
                        <div className='col-lg-4 col-md-4 bg-light' >
                            <h3 className='mb-3'>ALl Courses</h3>
                            <div>
                                {
                                    courseTitle.map(title => <p key={title.id} >
                                        <Link to={`/coursedetails/${title.id}`}>{title.name}</Link></p>)
                                }
                            </div>
                        </div>
                        <div className='col-lg-8 col-md-8 col-sm-1 course-title-container'>
                            {coursesTitle.map(titles => <CourseTitle key={titles.id} titles={titles}></CourseTitle>)}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Courses;