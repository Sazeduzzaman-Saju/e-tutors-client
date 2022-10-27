import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSideInfo = ({ courseDetails }) => {
    const { catId,
        latest_price,
        access_time,
        enrolments,
        short_desc,
        lessons,
        before_price,
        duration,
        image } = courseDetails;

    return (
        <div>
            <Card className="mt-5 mb-5" data-aos="fade-left" data-aos-duration="3000">
                <Card.Img variant="top" src={image} />
                <Card.Body data-aos="fade-left" data-aos-duration="3000">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span> <strong className='fs-2 blueviolet'>${latest_price}</strong> <del>${before_price}</del></span>
                        <p>Offer for today</p>
                    </div>
                    <di className="d-flex justify-content-between">
                        <div>Duration <span> </span></div>
                        <div><p>{duration}</p></div>
                    </di>
                    <di className="d-flex justify-content-between">
                        <div>Lessons <span> </span></div>
                        <div><p>{lessons}</p></div>
                    </di>
                    <di className="d-flex justify-content-between">
                        <div>Enroll <span> </span></div>
                        <div><p>{enrolments}</p></div>
                    </di>
                    <di className="d-flex justify-content-between">
                        <div>Access <span> </span></div>
                        <div><p>{access_time}</p></div>
                    </di>
                    <Card.Text>
                        {short_desc.slice(0, 300)}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>


                        <Link to={`/checkout/${catId}`}><button className='btns'>Buy View Course</button></Link>

                    </div>
                </Card.Body >
            </Card >
        </div >
    );
};

export default CourseSideInfo;