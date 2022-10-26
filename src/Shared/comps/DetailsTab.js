import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const DetailsTab = ({ courseDetails }) => {
    const { overview, requirements, who_is_this_course_for } = courseDetails;
    return (
        <div>
            <div className="container mb-5">
                <Tabs
                    defaultActiveKey="profile"
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="home" title="Overview">
                        {overview}
                    </Tab>
                    <Tab eventKey="profile" title="Requirement">
                        <ul>
                            <li>{requirements[0]?.R1}</li>
                            <li>{requirements[1]?.R2}</li>
                            <li>{requirements[2]?.R3}</li>

                        </ul>
                    </Tab>
                    <Tab eventKey="longer-tab" title="Who Is This Course For">
                        <ul>
                            <li>{who_is_this_course_for[0]?.W1}</li>
                            <li>{who_is_this_course_for[1]?.W2}</li>
                            <li>{who_is_this_course_for[2]?.W3}</li>


                        </ul>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
};

export default DetailsTab;