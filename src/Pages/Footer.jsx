import React from 'react';
import logo from '../assets/images/Job-Logo.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
    return (
        <>
            <div className='flex flex-col scroll-smooth lg:flex-row mt-20 gap-10 justify-start lg:justify-between'>
                <div className='lg:w-1/3 flex flex-col gap-4 text-gray-600'>
                    <img className='w-50' src={logo} alt="" />
                    <p>Call Us</p>
                    <p>++8801587093456</p>
                    <p>1002, Kazipara, Dhaka </p>
                    <p> support@jobfinder.com </p>

                </div>
                <div className='w-2/3 flex flex-col lg:flex-row gap-5 justify-start lg:justify-between  '>
                    <div>
                        <h2 className='font-semibold text-xl'>For Candidates</h2>
                        <ul className='text-gray-600 flex flex-col cursor-pointer gap-4 mt-5'>
                            <li>Browse Job</li>
                            <li>Browse Categories</li>
                            <li>Candidates Dashboard</li>
                            <li>Job Alert</li>
                            <li>My Bookmarks</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>For Employers</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li>Browse Candidates</li>
                            <li>Employee Dashboard</li>
                            <li>Add Job</li>
                            <li>Job Packages</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>About Us</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li>About Us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                            <li>Terms Page</li>

                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold text-xl'>Helpful Resources</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li>Site Map</li>
                            <li>Tearms of Use</li>
                            <li>Privacy Center</li>
                            <li>SecuritY Center</li>
                            <li>Accessibility Center</li>
                        </ul>

                    </div>

                </div>
            </div>
            <hr className='mt-15 text-gray-400 ' />
            <div className='flex flex-col-reverse mb-5 lg:flex-row items-center gap-3 mt-10 justify-between'>
                <p className='text-gray-600'>2025 - Template By Jesmin Chakma. All Rights Reserved</p>
                <div className='flex gap-10'>
                    <a href='https://www.facebook.com/'><FaFacebook /></a>
                    <a href='https://www.instagram.com/?hl=en'><FaInstagram /></a>
                    <a href='https://x.com/'><FaTwitter /></a>
                    <a href='https://www.linkedin.com/'><FaLinkedin /></a>
                </div>
            </div>
        </>
    );
};

export default Footer;