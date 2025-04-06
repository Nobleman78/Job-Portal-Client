import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/Job-Logo.jpg'
import { RiMenu2Line } from "react-icons/ri";
import AuthContext from '../Context/Authcontext';
import { FaUser } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { MdModeEditOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const { user,signOutUser } = useContext(AuthContext);
    const [showUserInfo, setShowUserInfo] = useState(false);
    const [menu, setMenu] = useState('menu')
    const [open,setOpen] = useState(false);
    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{
            alert('Successfully Sign Out')
        })
    }
    return (
        <div className='flex justify-between items-center py-5 font-medium sticky top-0 w-full shadow-md bg-white z-50 '>
            <div className='flex items-center justify-center'>
                <RiMenu2Line onClick={() => setOpen(!open)} className='md:hidden' />
                <Link to='/'><img className='lg:w-50 w-40 h-8 lg:h-12' src={logo} alt="Logo" /></Link>
            </div>
            <ul className='hidden sm:flex gap-5 text-sm '>
                <NavLink to='/' className='flex flex-col items-center gap-1' >
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                </NavLink>
                <NavLink to='/findjob' className='flex flex-col items-center gap-1' >
                    <p>FIND JOB</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to='/recruiter' className='flex flex-col items-center gap-1' >
                    <p>RECRUITER</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to='/candidate' className='flex flex-col items-center gap-1' >
                    <p>CANDIDATES</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1' >
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] hidden bg-gray-700' />
                </NavLink>

            </ul>
            <ul className='flex items-center justify-between gap-3 relative'>
                <NavLink to='/registration' className='bg-blue-600 px-4 py-1 hidden  rounded-full text-white'>Register</NavLink>
                {
                    user ? <span onClick={() => {setShowUserInfo(!showUserInfo);setOpen(true)}} className='relative w-8 h-8 rounded-full bg-gray-200 cursor-pointer'>
                        <p className='absolute  top-1 right-3'>{user.email.slice(0, 1).toUpperCase()}</p>
                    </span> :
                        <NavLink to='/login' className='bg-blue-600 px-4 py-1 rounded-full text-white'>
                            Sign in
                        </NavLink>
                }
                {
                    showUserInfo && open &&
                    <div className='w-70 h-40 shadow-2xl absolute top-10 right-0 border-t-4 border-green-600 '>
                        <ul className='flex flex-col items-start px-5 gap-5 py-3 cursor-pointer'>
                            <li onClick={()=>setOpen(false)} className='flex items-center  gap-5'><FaUser/>My Profile</li>
                            <li onClick={()=>setOpen(false)} className='flex items-center gap-5'><MdModeEditOutline/>Edit Profile</li>
                            <li onClick={()=>{setOpen(false);handleSignOut()}} className='flex items-center gap-4'><IoLogOutOutline className='text-xl'/>Log Out</li> 
                        </ul>
                    </div>
                }
            </ul>
            

            {/* {Sidebar Menu for small screen} */}
            <div className={`md:hidden fixed w-100 inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setOpen(false)} className='flex items-center gap-4 p-3'>
                        <p><RxCross2 className='text-lg'/></p>
                    </div>
                    <NavLink onClick={() => { setMenu('HOME'), setOpen(false) }} className={menu === 'HOME' ? 'py-2  bg-black pl-6 border  cursor-pointer text-white' : 'py-2  pl-6 border  cursor-pointer'} to='/'>HOME</NavLink>
                    <NavLink onClick={() => { setMenu('FIND JOB'), setOpen(false) }} className={menu === 'FIND JOB' ? ' bg-black text-white py-2 pl-6 border-b cursor-pointer' : 'py-2  pl-6 border-b cursor-pointer'} to='/findjob'>FIND JOB</NavLink>
                    <NavLink onClick={() => { setMenu('REQRUITER'), setOpen(false) }} className={menu === 'REQRUITER' ? 'bg-black  text-white border-b py-2 cursor-pointer pl-6 ' : 'py-2 pl-6 border-b cursor-pointer'} to='/recruiter'>REQRUITER</NavLink>
                    <NavLink onClick={() => { setMenu('CANDIDATES'), setOpen(false) }} className={menu === 'CANDIDATES' ? 'py-2 pl-6 border-b cursor-pointer bg-black text-white' : 'py-2 pl-6 border-b cursor-pointer'} to='/candidate'>CANDIDATES</NavLink>
                    <NavLink onClick={() => { setMenu('CONTACT'), setOpen(false) }} className={menu === 'CONTACT' ? 'py-2 pl-6 border-b cursor-pointer bg-black text-white' : 'py-2 pl-6 border-b cursor-pointer'} to='/contact'>CONTACT</NavLink>
                    <NavLink onClick={() => { setMenu('LOGIN'), setOpen(false) }} className={menu === 'LOGIN' ? 'py-2 pl-6 border-b cursor-pointer bg-black text-white' : 'py-2 pl-6 border-b cursor-pointer'} to='/login'>LOGIN</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;