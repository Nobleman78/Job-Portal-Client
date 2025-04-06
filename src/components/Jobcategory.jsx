import React from 'react';
import design from '../assets/images/design-thinking (1).png'
import development from '../assets/images/app-development.png'
import humanResource from '../assets/images/recruitment.png'
import customerService from '../assets/images/customer-service.png'
import health from '../assets/images/health.png'
import projectManagement from '../assets/images/responsibility.png'
import promotion from '../assets/images/promotion.png'
import management from '../assets/images/management.png'
import accounting from '../assets/images/accounting.png'

const Jobcategory = () => {
    return (
        <div>
            <h2 className='text-center text-3xl'>Popular Job Categories</h2>
            <p className='text-center text-gray-400 mt-4'>2000 Live Jobs - 150 Jobs Added Today</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 cursor-pointer'>
                <div className='border border-gray-300 px-10 py-5'>
                    <div className='flex items-center gap-4 '>
                        <span> <img className='w-10' src={accounting} alt="" /></span>
                        <div>
                            <h2 className='font-semibold text-lg'>Accounting / Finance</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={promotion} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Marketing</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={design} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Design</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={development} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Development</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={humanResource} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Human Resources</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={projectManagement} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Automotive Jobs</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={customerService} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Customer Service</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={health} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Health and Care</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-400 px-10 py-5'>
                    <div className='flex items-center gap-4'>
                        <img className='w-10' src={management} alt="" />
                        <div>
                            <h2 className='text-lg font-semibold'>Project Management</h2>
                            <p>(2 Open Positions)</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobcategory;