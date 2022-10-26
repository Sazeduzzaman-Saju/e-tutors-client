import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseTitle.css';

const CourseTitle = ({ titles }) => {
    const { id, name, image } = titles;
    return (
        <div>
            <div className='container'>
                <div className='col'>

                    <Card className='mb-3'>
                        <Card.Img variant="top" className='img-fluid h-75' src={image} />
                        <Card.Body>
                            <Card.Title>{name.slice(0, 28)}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary"><Link to={`/coursedetails/${id}`}><span className='text-white'>View Course</span></Link></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CourseTitle;