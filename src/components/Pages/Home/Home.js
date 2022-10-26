import React from 'react';

import img from '../../../assets/homeBg.jpg'
import gif from '../../../assets/homeBg1.gif';
import './Home.css'
const Home = () => {
    return (
        <div className='home-container my-5 w-75 mx-auto d-flex flex-column flex-md-row'>
            <div className='left-side d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-warning home-header'>Welcome!!</h1>
                <h5>You are very very welcome in this online learning platform.</h5>
                <p>This is the world's best online learning platform. Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>

            </div>

            <div className='right-side'>
                <img style={{ height: '400px', width: '100%' }} src={gif} alt="" />
            </div>

        </div>
    );
};

export default Home;