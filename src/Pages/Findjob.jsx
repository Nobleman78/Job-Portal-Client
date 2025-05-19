import React, { useContext, useEffect } from 'react';
import { IoBagOutline } from "react-icons/io5";
import { FaLocationPinLock } from 'react-icons/fa6';
import { IoTimeOutline } from "react-icons/io5";
import { FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JobContext from '../Context/Jobcontext';
const Findjob = () => {
    const { filterJobs, loadingData, setLoadingData, filtered, filterMode,jobs } = useContext(JobContext)
    //  Just a simple Set time out fucntion so that i can show a spinner when data
    // loading
    useEffect(() => {
        setLoadingData(true);
        const timer = setTimeout(() => {
            setLoadingData(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [filterJobs, setLoadingData]);

    if (loadingData == true) {
        return (
            <div className="sm:max-w-7xl mx-auto px-2 flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }
    // This is a simple array for store filterd and filter jobs data
    let finalJobs = [];

    if (filterMode === 'category') {
        finalJobs = filtered;
    } else if (filterMode === 'search') {
        finalJobs = filterJobs;
    }
    else{
        finalJobs = [...jobs]
    }


    return finalJobs.length > 0 ? (

        <div className='sm:max-w-7xl mx-auto px-2'>

            {
                finalJobs.map((job) => {
                    return (
                        <div key={job._id} className='border border-gray-300 px-1 lg:px-5 py-5 mt-10' >
                            <div className='flex items-start gap-4 '>
                                <img className='w-15' src={job.company_logo} alt="" />
                                <div>
                                    <h2 className='font-semibold  lg:text-lg'>{job.title}</h2>
                                    <div className='flex items-center gap-3 text-sm'>
                                        <p className='flex items-center gap-2 ' ><IoBagOutline />Segment</p>
                                        <p className='flex items-center gap-2' ><FaLocationPinLock /> {job.location}</p>
                                        <p className='hidden lg:flex lg:items-center lg:gap-2'><IoTimeOutline />Hours Ago</p>
                                        <p className='hidden lg:flex lg:items-center lg:gap-2 text-xs'><FaMoneyBill />${job.salaryRange.min} - ${job.salaryRange.max}</p>
                                    </div>
                                    <div className='flex items-center gap-2 lg:gap-6 mt-2 '>
                                        <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-xs lg:text-sm'>Full Time</p>
                                        <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-xs lg:text-sm' >Urgent</p>
                                        <Link to={`/jobs/${job._id}`}>
                                            <button className='px-4 py-1 bg-blue-500 rounded text-white text-xs lg:text-sm cursor-pointer'>Apply</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    ) : <p className='sm:max-w-7xl mx-auto px-2 mt-10 text-xl'>No Jobs Found</p>;


};

export default Findjob;