import React, { useEffect, useState } from 'react';
import JobFeatures from './JobFeatures';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data));
    }, []);

    return (
        <div className="mt-16 px-4 max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">Featured Jobs</h2>
                <p className="text-gray-500 text-lg">
                    Know your worth and find the job that elevates your career.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {jobs.map((job) => (
                    <JobFeatures key={job._id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Jobs;
