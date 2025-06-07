import React, { useContext } from 'react';
import TopCompanyJobsContext from '../../Context/TopCompanyJobs';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowBack } from 'react-icons/io';
import JobContext from '../../Context/Jobcontext';

const TopCompanyJobs = () => {
    const {filterdJob,loading, setLoading } = useContext(TopCompanyJobsContext);
    const navigate = useNavigate()
   
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000);
        return () => clearTimeout(timer)
    }, [setLoading])
    if (loading === true) {
        return (
            <div className='sm:max-w-7xl mx-auto px-2 flex justify-center items-center h-64'>
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
            </div>
        );
    }
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <button onClick={() => navigate('/')} className="mt-5 p-2 mb-3 transition-all duration-300 ease-in-out bg-gray-100  hover:bg-gray-200 rounded-full ">
                <IoMdArrowBack className=" text-gray-700 hover:text-blue-600 w-6 h-6 " />
            </button>
            {filterdJob.map((job) => (
                <div key={job._id} className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <div key={job._id} className="space-y-6">
                    
                            <div className=" p-4 rounded-md bg-gray-100">
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">{job.title}</h3>
                                <div className="space-y-3">
                                   
                                        <div className="p-3 bg-white rounded shadow-sm flex flex-col gap-1" >
                                            <span className="font-semibold text-blue-600">{job.title}</span>
                                            <span className="text-gray-600 text-sm">{job.location}</span>
                                            <span className="text-green-600 font-medium">{job.salary}</span>
                                            <span className="text-gray-500 italic text-xs">{job.type}</span>
                                            <Link to={`/jobs/${job._id}`}>
                                                <button onClick={() => scrollTo(0, 0)} className='px-4 py-1 bg-blue-500 rounded text-white cursor-pointer'>Apply</button>
                                            </Link>
                                        </div>
                                   
                                </div>
                            </div>
                      
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopCompanyJobs;
