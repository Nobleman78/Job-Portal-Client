import React from 'react';

const Overview = () => {
    return (
        <div className='m-10'>
            <div className='flex items-center justify-center gap-10'>
                <div className='flex items-center'>
                    <img src="https://atb-jobs.com/v2/icons/job_vacancies_home_icon.svg" alt="" />
                    <div>
                        <h2 className='text-2xl'>Vacancies</h2>
                        <p className='text-4xl font-semibold text-blue-400'>1000+</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="https://atb-jobs.com/v2/icons/company_home_icon.svg" alt="" />
                    <div>
                        <h2 className='text-2xl'>Companies</h2>
                        <p className='text-4xl font-semibold text-blue-400'>700+</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src="https://atb-jobs.com/v2/icons/livejobs_home_icon.svg" alt="" />
                    <div>
                        <h2 className='text-2xl'>Live Jobs</h2>
                        <p className='text-4xl font-semibold text-blue-400'>500+</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;