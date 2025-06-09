import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import AuthContext from '../Context/Authcontext';
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoBookmarksSharp } from "react-icons/io5";
import axios from 'axios';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [menu, setMenu] = useState('menu');
    const [openProfile, setOpenProfile] = useState(false);
    const [open, setOpen] = useState(false);
    const [isCompanyHoverd,setIsCompanyHoverd] = useState(false)
    const [isServiceHoverd,setIsServiceHoverd] = useState(false)
    const navigate = useNavigate()


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                alert('Successfully Sign Out');
                axios.post('http://localhost:3000/logout', {}, { withCredentials: true })
                    .then(res => console.log('Logout Data', res.data));
            });
    };

    return (
        <div className='flex justify-between items-center py-5 px-8 font-medium sticky top-0 w-full shadow-md bg-white z-50'>
            <div className='flex items-center justify-center'>
                <RiMenu2Line onClick={() => setOpen(!open)} className='md:hidden cursor-pointer' />
                <Link to='/'><img className='lg:w-50 w-40 h-8 lg:h-12' src='https://static.naukimg.com/s/0/0/i/naukri-identity/naukri_gnb_logo.svg' alt="Logo" /></Link>
            </div>

            <ul className='hidden sm:flex gap-5 text-md sm:items-center '>
                <NavLink onClick={() => scrollTo(0, 0)} to='/' className='flex flex-col items-center gap-1  '>
                    <p>HOME</p>
                    {/* <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' /> */}
                </NavLink>

                <div className="relative"
                    >
                    <NavLink
                        to='/findjob'
                        className='flex flex-col items-center gap-1'
                        onClick={() => scrollTo(0, 0)}>
                        <p>FIND JOB</p>
                        {/* <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' /> */}
                    </NavLink>

                    {/* {isJobHovered && (
                        <div className='absolute top-full left-1/2 w-max  transform -translate-x-1/2  bg-white rounded-xl  px-6 py-10 flex gap-10 z-50 '
                            onMouseEnter={() => setIsJobHovered(true)}
                            onMouseLeave={() => setIsJobHovered(false)}>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Popular Categories</h2>
                                <ul className='space-y-2 text-gray-700 '>
                                    <li className='hover:text-blue-600 cursor-pointer'>IT Jobs</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sales</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Marketing</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Data Science</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>HR</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Engineering</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Jobs In Demand</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Freshers</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Remote</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Part Time</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Work From Home</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>MNC Jobs</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Jobs By Location</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Dhaka</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Chittagong</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Khulna</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sylet</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Cumilla</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Barisal</li>
                                </ul>
                            </div>
                        </div>
                    )} */}
                </div>
               <div className="relative"
                    onMouseEnter={() => setIsCompanyHoverd(true)}
                    onMouseLeave={() => setIsCompanyHoverd(false)}>
                    <NavLink
                        to='/companies'
                        className='flex flex-col items-center gap-1'
                        onClick={() => {scrollTo(0, 0),setIsCompanyHoverd(false)}}>
                        <p>COMPANY</p>
                        {/* <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' /> */}
                    </NavLink>

                    {isCompanyHoverd && (
                        <div className='absolute top-full left-1/2 w-max  transform -translate-x-1/2  bg-white rounded-xl  px-6 py-10 flex gap-10 z-50 '
                            onMouseEnter={() => setIsCompanyHoverd(true)}
                            onMouseLeave={() => setIsCompanyHoverd(false)}>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Explore Categories</h2>
                                <ul className='space-y-2 text-gray-700 '>
                                    <li className='hover:text-blue-600 cursor-pointer'>IT Jobs</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sales</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Marketing</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Data Science</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>HR</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Engineering</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Explore Collections</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Freshers</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Remote</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Part Time</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Work From Home</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>MNC Jobs</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Research Companies</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Dhaka</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Chittagong</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Khulna</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sylet</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Cumilla</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Barisal</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative"
                    onMouseEnter={() => setIsServiceHoverd(true)}
                    onMouseLeave={() => setIsServiceHoverd(false)}>
                    <NavLink
                        to='/services'
                        className='flex flex-col items-center gap-1'
                        onClick={() => {scrollTo(0, 0),setIsServiceHoverd(false)}}>
                        <p>SERVICES</p>
                        {/* <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' /> */}
                    </NavLink>

                    {isServiceHoverd && (
                        <div className='absolute top-full left-1/2 w-max  transform -translate-x-1/2  bg-white rounded-xl  px-6 py-10 flex gap-10 z-50 '
                            onMouseEnter={() => setIsServiceHoverd(true)}
                            onMouseLeave={() => setIsServiceHoverd(false)}>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Get Reqrutier Attention</h2>
                                <ul className='space-y-2 text-gray-700 '>
                                    <li className='hover:text-blue-600 cursor-pointer'>IT Jobs</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sales</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Marketing</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Data Science</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>HR</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Engineering</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Resume Writting</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Freshers</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Remote</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Part Time</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Work From Home</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>MNC Jobs</li>
                                </ul>
                            </div>
                            <span className='w-0 h-50 border border-gray-400'></span>
                            <div>
                                <h2 className='font-bold mb-3 text-lg text-blue-600'>Find Jobs</h2>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='hover:text-blue-600 cursor-pointer'>Dhaka</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Chittagong</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Khulna</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Sylet</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Cumilla</li>
                                    <li className='hover:text-blue-600 cursor-pointer'>Barisal</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <NavLink onClick={() => scrollTo(0, 0)} to='/dashboard' className='flex flex-col items-center gap-1'>
                    <p>DASHBOARD</p>
                    {/* <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' /> */}
                </NavLink>
            </ul>

            <ul className='flex items-center justify-between gap-3 relative'>
                <NavLink to='/registration' className='bg-blue-600 px-4 py-1 hidden rounded-full text-white'>Register</NavLink>
                {
                    user ? (
                        <span
                            onClick={() => { setShowUserInfo(!showUserInfo); setOpenProfile(true) }}
                            className='relative w-8 h-8 rounded-full bg-gray-200 cursor-pointer flex items-center justify-center'>
                            <p className='text-gray-700 font-medium'>{user.email.slice(0, 1).toUpperCase()}</p>
                        </span>
                    ) : (
                        <NavLink to='/login' className='bg-blue-400 px-4 py-2 rounded-md text-md  text-white'>
                            SIGN IN
                        </NavLink>
                    )
                }
                {
                    showUserInfo && openProfile &&
                    <div className='w-60 h-auto shadow-xl absolute bg-white top-10 right-0 border-t-4 border-green-600 z-20 rounded-b'>
                        <ul className='flex flex-col items-start px-5 gap-4 py-4 cursor-pointer'>
                            <li onClick={() => {setOpenProfile(false),navigate('/myprofile/profile'),scrollTo(0,0)}} className='flex items-center gap-3 w-full hover:text-blue-600'>
                                <FaUser /> My Profile
                            </li>
                            <li onClick={() => setOpenProfile(false)} className='flex items-center gap-3 w-full hover:text-blue-600'>
                                <MdModeEditOutline /> Edit Profile
                            </li>
                            <li onClick={() => {setOpenProfile(false),navigate('/mybookmark'),scrollTo(0,0)}} className='flex items-center gap-3 w-full hover:text-blue-600'>
                                <IoBookmarksSharp /> My BookMarks
                            </li>
                            <li
                                onClick={() => { setOpenProfile(false); handleSignOut() }}
                                className='flex items-center gap-3 w-full hover:text-blue-600'>
                                <IoLogOutOutline className='text-lg' /> Log Out
                            </li>
                        </ul>
                    </div>
                }
            </ul>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed w-full h-full inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setOpen(false)} className='flex items-center gap-4 p-4 cursor-pointer'>
                        <RxCross2 className='text-xl' />
                    </div>
                    <NavLink
                        onClick={() => { setMenu('HOME'); setOpen(false) }}
                        className={menu === 'HOME' ? 'py-3 bg-black pl-6 border cursor-pointer text-white' : 'py-3 pl-6 border cursor-pointer'}
                        to='/'>
                        HOME
                    </NavLink>
                    <NavLink
                        onClick={() => { setMenu('FIND JOB'); setOpen(false) }}
                        className={menu === 'FIND JOB' ? 'bg-black text-white py-3 pl-6 border-b cursor-pointer' : 'py-3 pl-6 border-b cursor-pointer'}
                        to='/findjob'>
                        FIND JOB
                    </NavLink>
                    <NavLink
                        onClick={() => { setMenu('DASHBOARD'); setOpen(false) }}
                        className={menu === 'DASHBOARD' ? 'bg-black text-white py-3 pl-6 border-b cursor-pointer' : 'py-3 pl-6 border-b cursor-pointer'}
                        to='/dashboard'>
                        DASHBOARD
                    </NavLink>
                    <NavLink
                        onClick={() => { setMenu('SERVICES'); setOpen(false) }}
                        className={menu === 'SERVICES' ? 'bg-black text-white py-3 pl-6 border-b cursor-pointer' : 'py-3 pl-6 border-b cursor-pointer'}
                        to='/services'>
                        SERVICES
                    </NavLink>
                    <NavLink
                        onClick={() => { setMenu('LOGIN'); setOpen(false) }}
                        className={menu === 'LOGIN' ? 'bg-black text-white py-3 pl-6 border-b cursor-pointer' : 'py-3 pl-6 border-b cursor-pointer'}
                        to='/login'>
                        LOGIN
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;