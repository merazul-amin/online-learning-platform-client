import React from 'react';
import { useLoaderData, Link } from "react-router-dom";
import SingleCourse from '../SingleCourse/SingleCourse';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CoursesNav from '../CoursesNav/CoursesNav';
const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div style={{ width: '95%', margin: 'auto' }}>
            <Row >
                <Col md='10'>
                    <div >
                        <Row xs={1} md={2} className="g-4">
                            {
                                courses.map((course, index) =>
                                    <SingleCourse
                                        course={course}
                                        key={index}
                                    ></SingleCourse>)
                            }
                        </Row>
                    </div>
                </Col>
                <Col className='d-none d-md-block' md='2 border'>
                    <CoursesNav courses={courses}></CoursesNav>
                </Col>
            </Row>
        </div>

    );
};

export default AllCourses;