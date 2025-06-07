import React, { useContext } from 'react';
import { CiEdit } from 'react-icons/ci';
import AuthContext from '../../Context/Authcontext';

const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className='flex justify-between items-center'>
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">My Profile</h2>
                    <button className='text-3xl '><CiEdit className='cursor-pointer' /></button></div>
                <div className="border-t border-dashed border-gray-400 my-4"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Full Name</p>
                            <p className="text-lg font-semibold text-gray-800">{user?.email.slice(0, 1).toUpperCase() + user?.email.slice(1, 12)}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Gender</p>
                            <p className="text-lg font-semibold text-gray-800">Male</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <p className="text-sm font-medium text-gray-500">Email</p>
                            <p className="text-lg font-semibold text-gray-800">{user?.email}</p>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Mobile Number</p>
                            <p className="text-lg font-semibold text-gray-800">015788374848</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;