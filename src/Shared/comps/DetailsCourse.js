import React from 'react';
import DetailsTab from './DetailsTab';

const DetailsCourse = ({ courseDetails }) => {
    const { id, title, updated_at, user, what_you_will_learn } = courseDetails;
    console.log(what_you_will_learn);
    return (
        <div className='mt-5' >
            <h1 data-aos="fade-left" data-aos-duration="2000">{title}</h1>
            <p data-aos="fade-left" data-aos-duration="2000">Last Update {updated_at.slice(0, 10)}</p>
            <div>
                <div className='mt-5' data-aos="fade-left" data-aos-duration="3000">
                    <img style={{ width: "50px" }} class="rounded-circle" src={user.profile_photo} alt="" />
                    <span className='ms-2'>{user.first_name}</span>
                    <span className='ms-1'>{user.last_name}</span>
                </div>
                <div className='mt-5 mb-5' data-aos="fade-left" data-aos-duration="3000">
                    <h3 data-aos="fade-left" data-aos-duration="3000">What you'll learn in this course</h3>
                    <p className="text-muted ms-3">{what_you_will_learn[0].L1}</p>
                    <p className="text-muted ms-3">{what_you_will_learn[1].L2}</p>
                    <p className="text-muted ms-3">{what_you_will_learn[2].L3}</p>
                    <p className="text-muted ms-3">{what_you_will_learn[3].L4}</p>
                    <p className="text-muted ms-3">{what_you_will_learn[4].L5}</p>
                </div>
                <div data-aos="fade-left" data-aos-duration="3000">
                    <DetailsTab key={courseDetails} courseDetails={courseDetails}></DetailsTab>
                </div>
            </div>
        </div >
    );
};

export default DetailsCourse;