import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseTitle.css';

const CourseTitle = ({ titles }) => {
    const { id, name, image } = titles;
    return (
        <div>
            <div className='container'>
                <div className='col'>

                    <Card className='mb-3 title-cards'>
                        <Card.Img variant="top" className='img-fluid h-75' src={image} />
                        <Card.Body>
                            <Card.Title className='text-center'>{name.slice(0, 28)}</Card.Title>

                            <button className='btns courses-btn'><Link to={`/coursedetails/${id}`}><span className='text-white'>View Course</span></Link></button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseTitle;