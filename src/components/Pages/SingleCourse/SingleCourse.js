import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link, useLoaderData } from "react-router-dom";
const SingleCourse = ({ course }) => {
    const { name, img, id, } = course;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" style={{ height: '300px' }} src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    <Link to={`/courses/${id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleCourse;