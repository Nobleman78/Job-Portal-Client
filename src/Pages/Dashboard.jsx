import React, { useContext, useEffect } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/Authcontext';
import MyApplications from '../components/MyApplications';
import { FaCalendarAlt, FaListUl, FaUser } from 'react-icons/fa';
import { IoHomeOutline } from 'react-icons/io5';

const Dashboard = () => {
    const { user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        if (!user && !loading) {
            navigate('/login', { replace: true, state: { from: location } });
        }
    }, [user, navigate, loading, location]);

    if (!user) return null;
    return (
        <div className='flex'>

            <div className='w-16 md:w-72 md:p-6'>
                <nav className='flex flex-col gap-4 bg-blue-500 p-6 text-white h-120 rounded-2xl'>
                    <NavLink to="/dashboard/Home" className={({ isActive }) => `flex items-center py-2 px-3 rounded ${isActive ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <IoHomeOutline className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline"> Home</span>
                    </NavLink>
                    <NavLink to="/dashboard/myApplications" className={({ isActive }) => `flex items-center py-2 px-3 rounded ${isActive ? 'bg-orange-500' : 'bg-transparent'}`}>
                        <FaCalendarAlt className="mr-0 md:mr-3 text-lg" />
                        <span className="hidden md:inline">My Applications</span>
                    </NavLink>
                </nav>
            </div>
            <div className='p-6 flex-1'>
                {location.pathname === '/dashboard' && (
                    <h1 className="text-lg md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">Welcome to The Dashboard</h1>
                )}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
