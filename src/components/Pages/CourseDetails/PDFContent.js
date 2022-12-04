import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
const PDFContent = ({ course }) => {
    const { name, img, price, duration, toLearn, id } = course;
    return (
        <Card style={{ color: 'black' }}>
            <Card.Img variant="top" style={{ height: '50vh' }} src={img} />
            <Card.Body>
                <Card.Title><h1> {name}</h1> </Card.Title>
                <>
                    <h4>What you will learn from here?</h4>

                    <div className='p-3' style={{ width: '80%', margin: 'auto' }}>
                        {
                            toLearn.map((text, index) => <li key={index}>{text}</li>)
                        }
                    </div>
                    <div className='my-3'>
                        <div className='d-flex justify-content-around'>
                            <p className='fs-4'>Price: {price}</p>
                            <p className='fs-4'>Duration: {duration}</p>
                        </div>
                    </div>
                </>
                <Link to={`/checkout/${id}`}> <Button variant="primary">Get premium access</Button></Link>
            </Card.Body>
        </Card>
    )

};

export default PDFContent;