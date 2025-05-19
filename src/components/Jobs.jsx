import React, { useEffect, useState } from 'react';
import JobFeatures from './JobFeatures';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        // fetch('http://localhost:3000/jobs')
        //     .then(res => res.json())
        //     .then(data => setJobs(data))
        axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data))
    }, [])
    return (
        <div className='mt-10'>
            <div className='text-center'>
                <h2 className='text-3xl mb-4'>Features Jobs</h2>
                <p className='text-gray-500 mb-5'>Know your worth and find the job that qualify your life</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-1 gap-5 lg:grid-cols-2 mt-10'>
                {
                    jobs.map((job) => <JobFeatures key={job._id} job={job}></JobFeatures>)
                }
            </div>
        </div>
    );
};

export default Jobs;