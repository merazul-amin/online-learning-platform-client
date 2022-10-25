import React from 'react';
import { Link, useLoaderData } from "react-router-dom";
import SingleCourse from '../SingleCourse/SingleCourse';


const AllCourses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
            {
                courses.map(course =>
                    <SingleCourse
                        course={course}
                        key={course.id}
                    ></SingleCourse>)
            }
        </div>
    );
};

export default AllCourses;