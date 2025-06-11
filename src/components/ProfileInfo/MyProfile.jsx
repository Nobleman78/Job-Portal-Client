import React, { useContext } from 'react';
import AuthContext from '../../Context/Authcontext';
import { CiEdit } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLightbulb } from "react-icons/md";
import { LuNotepadText } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { NavLink, Outlet } from 'react-router-dom';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className="min-h-screen bg-gray-50 px-10 py-6 flex gap-10 ">
            <div className='w-1/4 flex flex-col items-center rounded-2xl  py-5 bg-white'>
                <img className='w-20 h-20  rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className='flex flex-col items-center'>
                    <p className="text-lg font-semibold text-gray-800">{user?.email.slice(0, 1).toUpperCase() + user?.email.slice(1, 12)}</p>
                    <h2>{user?.email}</h2>
                    <p>017898348374</p>
                </div>
                {/* <div className="border-t border-dashed border-gray-400 my-4"></div> */}
                <div className="bg-white shadow-xl rounded-xl p-6 w-full sm:w-80 max-w-sm mx-auto mt-10">
                    <nav className="space-y-4 text-gray-700 text-lg">
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/profile' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <FaUserCheck className="text-blue-600 text-xl " />
                            <span>My Profile</span>
                        </NavLink>
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/userinfo' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <CiCircleInfo className="text-blue-600 text-xl" />
                            <span>User Info</span>
                        </NavLink>
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/address' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <CiLocationOn className="text-blue-600 text-xl" />
                            <span>Address</span>
                        </NavLink>
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/skills' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <MdOutlineLightbulb className="text-blue-600 text-xl" />
                            <span>Skills</span>
                        </NavLink>
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/jobexp' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <LuNotepadText className="text-blue-600 text-xl" />
                            <span>Job Experience</span>
                        </NavLink>
                        <NavLink onClick={()=>scrollTo(0,0)} to='/myprofile/jobprofile' className={({ isActive }) =>`flex items-center gap-4 p-3 rounded-lg hover:bg-blue-500 transition-all cursor-pointer ${isActive === true?'bg-blue-300 text-white':'bg-white'}`}>
                            <IoBagCheckOutline className="text-blue-600 text-xl" />
                            <span>Job Profile</span>
                        </NavLink>
                    </nav>
                </div>

            </div>

            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    );
};

export default MyProfile;