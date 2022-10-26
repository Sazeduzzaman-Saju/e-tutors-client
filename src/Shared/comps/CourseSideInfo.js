import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseSideInfo = ({ courseDetails }) => {
    const { catId,
        title,
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
            <Card className="mt-5 mb-5">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span> <strong className='fs-2'>${latest_price}</strong> ${before_price}</span>
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
                        {short_desc}
                    </Card.Text>
                    <div className='d-flex justify-content-center'>


                        <Link to={`/checkout/${catId}`}>button</Link>

                    </div>
                </Card.Body >
            </Card >
        </div >
    );
};

export default CourseSideInfo;