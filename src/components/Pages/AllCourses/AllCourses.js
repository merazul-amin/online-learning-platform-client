import React from 'react';
import { useLoaderData } from "react-router-dom";
import SingleCourse from '../SingleCourse/SingleCourse';
import Row from 'react-bootstrap/Row';

const AllCourses = () => {
    const courses = useLoaderData();
    return (
        <div className='w-75 mx-auto'>
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
    );
};

export default AllCourses;