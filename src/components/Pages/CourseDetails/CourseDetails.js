import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import { Link, useLoaderData } from "react-router-dom";
const CourseDetails = () => {
    const course = useLoaderData();
    const { name, img, price, duration, toLearn } = course;
    console.log(course);
    return (
        <div>
            <Card style={{ width: '60%', margin: 'auto' }} >
                <Card.Img variant="top" style={{ height: '50vh' }} src={img} />
                <Card.Body>
                    <Card.Title><h1> {name}</h1> </Card.Title>
                    <Card.Text>
                        <h4>What you will learn from here?</h4>

                        <div className='p-3' style={{ width: '80%', margin: 'auto', border: '1px solid black' }}>
                            {
                                toLearn.map(text => <li >{text}</li>)
                            }
                        </div>
                        <div className='my-3'>
                            <div className='d-flex justify-content-around'>
                                <p className='fs-4'>Price: {price}</p>
                                <p className='fs-4'>Duration: {duration}</p>
                            </div>
                        </div>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;