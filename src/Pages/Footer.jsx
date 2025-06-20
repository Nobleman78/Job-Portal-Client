import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-2 '>
            <div className='flex flex-col scroll-smooth md:flex-row mt-20  lg:gap-10 justify-start md:justify-between'>
                <div className='lg:w-1/3 flex flex-col gap-4 text-gray-600'>
                    <img className='w-50' src='https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg' alt="" />
                    <p>Call Us</p>
                    <p>++8801587093456</p>
                    <p>1002, Kazipara, Dhaka </p>
                    <p> support@jobfinder.com </p>

                </div>
                <div className='w-2/3 flex flex-col md:flex-row gap-3 lg:gap-5 justify-start lg:justify-between  '>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>For Candidates</h2>
                        <ul className='text-gray-600 flex flex-col cursor-pointer gap-4 mt-5'>
                            <Link to='/findjob'> <li onClick={() => scrollTo(0, 0)}>Browse Job</li></Link>
                            <a href="#category">Browse Category</a>
                            <Link to='/dashboard'><li onClick={() => scrollTo(0, 0)}>Candidates Dashboard</li></Link>
                            <Link to='/mybookmark'><li onClick={() => scrollTo(0, 0)}>My Bookmarks</li></Link>
                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>For Employers</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                            <li>Browse Candidates</li>
                            <li>Employee Dashboard</li>
                            <li>Add Job</li>
                            <li>Job Packages</li>
                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold  lg:text-xl'>About Us</h2>
                        <ul className='text-gray-600 cursor-pointer flex flex-col gap-4 mt-5'>
                           <Link to='/about'> <li onClick={()=>scrollTo(0,0)}>About Us</li></Link>
                            <li>Blog</li>
                           <Link to='/'> <li>Contact</li></Link>
                            <li>Terms Page</li>

                        </ul>

                    </div>
                    <div>
                        <h2 className='font-semibold lg:text-xl'>Helpful Resources</h2>
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
        </div>
    );
};

export default Footer;