import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/Authcontext';
import axios from 'axios';

const MyApplications = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (!user?.email) return;
        axios.get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
            .then(res => {
                setJobs(res.data);
                console.log(res.data);
            })
            .catch(error => {
                console.error('Error fetching job applications:', error);
            });

    }, [user?.email]);
    if (!user) return <p>Please log in to see your applications.</p>;
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/job-application/${id}`, { withCredentials: true })
            .then(res => {
                console.log('Deleted:', res.data);
                const filtered = jobs.filter(job => job._id !== id);
                setJobs(filtered);
            })
            .catch(err => {
                console.error('Error deleting job:', err);
            });
    };

    return (
        <div className="overflow-x-auto p-6">
            <h2 className='mb-5 text-xl font-semibold'>My Applications</h2>
            <table className="w-full table-auto border-collapse shadow-lg rounded-xl overflow-hidden">
                <thead className="bg-blue-600 text-white">
                    <tr>
                        <th className="px-6 py-4 text-left">Company Logo</th>
                        <th className="px-6 py-4 text-left">Company</th>
                        <th className="px-6 py-4 text-left">Title</th>
                        <th className="px-6 py-4 text-left">Location</th>
                        <th className="px-6 py-4 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700 text-sm">
                    {jobs.map((job) => (
                        <tr
                            key={job._id}
                            className="even:bg-gray-50 odd:bg-white hover:bg-blue-50 transition duration-200">
                            <td className="px-6 py-4 border-b">
                                <img
                                    src={job.company_logo}
                                    alt="Logo"
                                    className="h-10 w-10 object-contain rounded-full"
                                />
                            </td>
                            <td className="px-6 py-4 border-b font-medium">{job.company}</td>
                            <td className="px-6 py-4 border-b">{job.title}</td>
                            <td className="px-6 py-4 border-b">{job.location}</td>
                            <td className="px-6 py-4 border-b "><button onClick={() => handleDelete(job._id)} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-full transition duration-200 cursor-pointer">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default MyApplications;
