import React from 'react';
import { IoBagOutline } from "react-icons/io5";
import { FaLocationPinLock } from 'react-icons/fa6';
import { IoTimeOutline } from "react-icons/io5";
import { FaMoneyBill } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const JobFeatures = ({ job }) => {
    const {_id, title, company_logo, location, salaryRange } = job


    return (
        <div>
            <div className='border border-gray-300 px-5 py-5'>
                <div className='flex items-start gap-4 '>
                    <img className='w-15' src={company_logo} alt="" />
                    <div>
                        <h2 className='font-semibold  lg:text-lg'>{title}</h2>
                        <div className='flex items-center gap-3 text-sm'>
                            <p className='flex items-center gap-2 ' ><IoBagOutline />Segment</p>
                            <p className='flex items-center gap-2 text-xs' ><FaLocationPinLock /> {location}</p>
                            <p className='hidden lg:flex lg:items-center lg:gap-2'><IoTimeOutline />Hours Ago</p>
                            <p className='hidden lg:flex lg:items-center lg:gap-2 text-xs'><FaMoneyBill />${salaryRange.min} - ${salaryRange.max}</p>
                        </div>
                        <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                            <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                            <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                            <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            <Link to={`/jobs/${_id}`}>
                                <button className='px-4 py-1 bg-blue-500 rounded text-white cursor-pointer'>Apply</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobFeatures;