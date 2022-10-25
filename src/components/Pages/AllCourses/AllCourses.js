import React from 'react';
import { useLoaderData } from "react-router-dom";
import SingleCourse from '../SingleCourse/SingleCourse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <Row className='w-75 mx-auto'>
            <Col lg='10'>
                <div >
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses.map(course =>
                                <SingleCourse
                                    course={course}
                                    key={course.id}
                                ></SingleCourse>)
                        }
                    </Row>
                </div>
            </Col>
            <Col lg='2 border'>
                <h1>Right nav</h1>
            </Col>
        </Row>

    );
};

export default AllCourses;