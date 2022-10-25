import React from 'react';
import { Link, useLoaderData } from "react-router-dom";


const Checkout = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div className='w-75 mx-auto text-center'>
            <h1>This is Checkout Page</h1>
            <h1>Course Name: {course.name}</h1>
        </div>
    );
};

export default Checkout;