import React, { useContext } from 'react';
import AuthContext from '../../Context/Authcontext';

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-lg md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500">Welcome {user.email}</h2>
        </div>
    );
};

export default AdminHome;