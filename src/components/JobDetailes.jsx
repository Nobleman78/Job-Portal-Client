import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import JobContext from '../Context/Jobcontext';

const JobDetails = () => {
    const { jobs } = useContext(JobContext);
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(true);
    const navigate = useNavigate();

    const job = jobs.find(job => job._id === id);

    return (
        <div className="min-h-screen bg-gray-50 py-6 px-4">
            <div className="sm:max-w-7xl mx-auto ">
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 mb-6">
                    <IoMdArrowBack className="w-5 h-5" />
                    <span>Back</span>
                </button>

                {job ? (
                    <div className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {job.title}
                            </h2>
                            <div className="text-gray-600 space-y-1">
                                <p><strong className="text-gray-800">Company:</strong> {job.company}</p>
                                <p><strong className="text-gray-800">Location:</strong> {job.location}</p>
                                <p><strong className="text-gray-800">Deadline:</strong> {job.applicationDeadline}</p>
                                <p><strong className="text-gray-800">Salary:</strong> {job.salaryRange.min} - {job.salaryRange.max} ৳</p>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            <Link to={`/applyJob/${job._id}`}>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md transition-all">
                                    Apply Now
                                </button>
                            </Link>
                            <button
                                onClick={() => setSeeMore(!seeMore)}
                                className="text-blue-600 underline hover:text-blue-800 transition-all">
                                {seeMore ? 'Hide Details' : 'See Job Details'}
                            </button>
                        </div>

                        {seeMore && (
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3">
                                <div>
                                    <p className="text-gray-700 font-medium">Description:</p>
                                    <p className="text-gray-600">{job.description}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 font-medium">Requirements:</p>
                                    <p className="text-gray-600">{job.requirements.map((req,index)=>(
                                        <li key={index}>
                                            {req}
                                        </li>
                                    ))}</p>
                                </div>
                                <div>
                                    <p className="text-gray-700 font-medium">Responsibilities:</p>
                                    <p className="text-gray-600">{job.responsibilities.map((res,index)=>(
                                        <li key={index}>{res}</li>
                                    ))}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center text-gray-500 text-lg">Job not found.</div>
                )}
            </div>
        </div>
    );
};

export default JobDetails;
