import React from 'react';

import { Link } from "react-router-dom";
const CoursesNav = ({ courses }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h4>Courses List</h4>
            {
                courses.map((course, index) => <li key={index}> <Link className='my-2 d-inline-block' to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>{course.name}</Link> </li>)
            }
        </div>
    );
};

export default CoursesNav;