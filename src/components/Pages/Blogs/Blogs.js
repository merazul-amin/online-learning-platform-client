import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const Blogs = () => {
    return (
        <Accordion className='w-75 mx-auto my-5' defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>1. What is cors?</Accordion.Header>
                <Accordion.Body>
                    CORS (Cross-Origin Resource Sharing) is a system, consisting of transmitting HTTP headers, that determines whether browsers block frontend JavaScript code from accessing responses for cross-origin requests. <br />
                    The same-origin security policy forbids cross-origin access to resources. But CORS gives web servers the ability to say they want to opt into allowing cross-origin access to their resources.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
                <Accordion.Header>2. Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                <Accordion.Body>
                    Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.
                    <h6>Options of firebase authentication:-</h6>
                    <ul>
                        <li>email password login, registration</li>
                        <li>Github login.</li>
                        <li>Facebook login.</li>
                        <li>Twitter login.</li>
                        <li>Instagram login.</li>
                    </ul>
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
                <Accordion.Header>3. How does the private route work?</Accordion.Header>
                <Accordion.Body>
                    The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br />
                    Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
                <Accordion.Header>4.What is Node? How does Node work?</Accordion.Header>
                <Accordion.Body>
                    <h4>Features of Node Js</h4>
                    <ul>
                        <li>Node.js is an open source server environment</li>
                        <li>Node.js is free</li>
                        <li>Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.)</li>
                        <li>Node.js uses JavaScript on the server</li>
                        <li>Node.js uses JavaScript on the server</li>
                    </ul>

                    <h4>Node js works by following process:- </h4>
                    <ol>
                        <li>Sends the task to the computer's file system.</li>
                        <li>Ready to handle the next request.</li>
                        <li>When the file system has opened and read the file, the server returns the content to the client.</li>
                        <li>Node.js eliminates the waiting, and simply continues with the next request.</li>
                    </ol>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;