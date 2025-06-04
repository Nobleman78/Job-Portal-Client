import React, { useContext, useEffect, useState } from 'react';
import { IoBagOutline } from "react-icons/io5";
import { FaLocationPinLock } from 'react-icons/fa6';
import { IoTimeOutline } from "react-icons/io5";
import { FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import JobContext from '../Context/Jobcontext';

const Findjob = () => {
    const { filterJobs, loadingData, setLoadingData, filterMode, jobs } = useContext(JobContext);
    const [selectedLocations, setSelectedLocations] = useState([]);

    useEffect(() => {
        setLoadingData(true);
        const timer = setTimeout(() => {
            setLoadingData(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, [filterJobs, setLoadingData]);

    const handleLocationSelect = (city) => {
        setSelectedLocations(prev => {
            if (prev.includes(city)) {
                return prev.filter(location => location !== city)

            }
            else {
                return [...prev, city]
            }
        })
    };

    if (loadingData == true) {
        return (
            <div className="sm:max-w-7xl mx-auto px-2 flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    let finalJobs = [];

    if (filterMode === 'category') {
        finalJobs = filterJobs;
    } else if (filterMode === 'search') {
        finalJobs = filterJobs;
    } else {
        finalJobs = [...jobs];
    }

    // Apply location filter if any locations are selected
    if (selectedLocations.length > 0) {
        finalJobs = finalJobs.filter(job =>
            selectedLocations.some(location =>
                job.location.toLowerCase().includes(location.toLowerCase())
            )
        );
    }

    const allLocations = [
        "Dhaka", "Chittagong", "Rajshahi", "Khulna",
        "Barishal", "Sylet", "Khagrachari", "Bandarban", "Rangamati"
    ];

    return finalJobs.length > 0 ? (
        <div className='sm:max-w-7xl mx-auto px-2 flex gap-5'>
            <div className='w-1/5 py-5 mt-10 px-4 h-full rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100 shadow-md'>
                <div className='mb-4 pb-3 border-b border-blue-200'>
                    <h3 className='text-lg font-semibold text-blue-800'>Filter by Location</h3>
                    <p className='text-sm text-blue-600'>Select one or more cities</p>
                </div>

                <ul className='flex flex-col gap-2 cursor-pointer overflow-y-auto pr-2 max-h-[400px]'>
                    {allLocations.map((city, index) => (
                        <div key={index}className={`flex items-center gap-3 border border-blue-200 px-3 py-2 rounded-lg 
                                bg-white/80 hover:bg-blue-50 transition-colors duration-200
                                ${selectedLocations.includes(city) ? 'bg-blue-100 border-blue-300' : ''}`}>
                            <input
                                type="checkbox"
                                className='h-4 w-4 text-blue-600 rounded focus:ring-blue-500'
                                onChange={() => handleLocationSelect(city)}
                                onClick={(e) => e.stopPropagation()} />
                            <label className='text-blue-900 hover:text-blue-700 cursor-pointer'>
                                {city}
                            </label>
                        </div>
                    ))}
                </ul>
            </div>

            <div className='flex-1'>
                {finalJobs.map((job) => (
                    <div key={job._id} className='border border-gray-300 px-1 lg:px-5 py-5 mt-10 rounded-xl'>
                        <div className='flex items-start gap-4'>
                            <img className='w-15' src={job.company_logo} alt="" />
                            <div>
                                <h2 className='font-semibold lg:text-lg'>{job.title}</h2>
                                <div className='flex items-center gap-3 text-sm'>
                                    <p className='flex items-center gap-2'><IoBagOutline />Segment</p>
                                    <p className='flex items-center gap-2'><FaLocationPinLock /> {job.location}</p>
                                    <p className='hidden lg:flex lg:items-center lg:gap-2'><IoTimeOutline />Hours Ago</p>
                                    <p className='hidden lg:flex lg:items-center lg:gap-2 text-xs'><FaMoneyBill />${job.salaryRange.min} - ${job.salaryRange.max}</p>
                                </div>
                                <div className='flex items-center gap-2 lg:gap-6 mt-2'>
                                    <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-xs lg:text-sm'>Full Time</p>
                                    <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-xs lg:text-sm'>Urgent</p>
                                    <Link to={`/jobs/${job._id}`}>
                                        <button className='px-4 py-1 bg-blue-500 rounded text-white text-xs lg:text-sm cursor-pointer'>Apply</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    ) : <p className='sm:max-w-7xl mx-auto px-2 mt-10 text-xl'>No Jobs Found</p>;
};

export default Findjob;