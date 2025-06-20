import React, { useEffect, useState } from 'react';
import JobFeatures from './JobFeatures';
import axios from 'axios';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data));
    }, []);

    const displayedJobs = showAll ? jobs : jobs.slice(0, 6)

    return (
        <div className="mt-16 px-4 max-w-7xl mx-auto">
            <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">Featured Jobs</h2>
                <p className="text-gray-500 text-lg">
                    Know your worth and find the job that elevates your career.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                {displayedJobs.map((job) => (
                    <JobFeatures key={job._id} job={job} />
                ))}
            </div>

            {!showAll && jobs.length > 6 && (
                <div className="text-center mt-10">
                    <button onClick={() => setShowAll(true)}
                        className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg font-medium hover:bg-blue-700 transition">
                        See All Jobs
                    </button>
                </div>
            )}
            {
                    showAll && (
                        <div className="text-center mt-10  ">
                           <button onClick={() => (setShowAll(false), window.scrollTo(0, 0))}
                                className="px-6 py-3 bg-blue-600 cursor-pointer text-white rounded-lg font-medium hover:bg-blue-700 transition">
                                Hide Jobs
                            </button>
                        </div>
                    )
                }
        </div>
    );
};

export default Jobs;
