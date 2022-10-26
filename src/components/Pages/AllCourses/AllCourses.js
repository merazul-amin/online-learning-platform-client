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
            <Row className='d-flex flex-column flex-md-row'>
                <Col md='2' style={{ border: '1px solid black', marginBottom: '20px' }}>
                    <CoursesNav courses={courses}></CoursesNav>
                </Col>
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
            </Row>
        </div>

    );
};

export default AllCourses;