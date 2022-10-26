import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ImCompass } from 'react-icons/im';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
                <p className="about">
                    <span> Find Us on: </span>

                </p>
                <div className="icons text-white">
                    <FaFacebook className='mx-2 fs-2'></FaFacebook>
                    <FaTwitter className='mx-2 fs-2'></FaTwitter>
                    <FaInstagram className='mx-2 fs-2'></FaInstagram>
                    <FaLinkedin className='mx-2 fs-2'></FaLinkedin>
                </div>
            </div>
            <div className="footer-center col-md-4 col-sm-6">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>Bananani</span> Dhaka , Bangladesh.y</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p> +8801810475892</p>
                </div>
                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a > onlinelearning@company.com</a></p>
                </div>
            </div>
            <div className="footer-right col-md-4 col-sm-6">
                <h2> <ImCompass />Online Learning</h2>
                <p className="menu">
                    <a> Home</a> |
                    <a > About</a> |
                    <a > Courses</a> |
                    <a >Blogs</a> |
                    <a > Contact</a>
                </p>
                <p className="name"> Online Learning &copy; 2025</p>
            </div>
        </footer>
    );
};

export default Footer;