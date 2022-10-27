import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const SingleCourse = ({ course }) => {
    const { name, img, id, teacher } = course;
    return (
        <Col>
            <Card className='text-center my-3'>
                <Card.Img variant="top" style={{ height: '300px' }} src={img} />
                <Card.Body>
                    <Card.Title className='text-center my-2'>{name}</Card.Title>
                    <p>Instructor: {teacher} </p>
                    <Link to={`/courses/${id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCourse;