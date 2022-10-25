import React from 'react';

import { Link } from "react-router-dom";
const CoursesNav = ({ courses }) => {
    return (
        <div>
            <h4>Courses List</h4>
            {
                courses.map(course => <li> <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>{course.name}</Link> </li>)
            }
        </div>
    );
};

export default CoursesNav;