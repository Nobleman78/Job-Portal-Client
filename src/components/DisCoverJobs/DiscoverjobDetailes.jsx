import React, { useContext, useState } from 'react';
import JobContext from '../../Context/Jobcontext';

const DiscoverjobDetailes = () => {
    const { discoverFilter } = useContext(JobContext);
    const [expandedJobId, setExpandedJobId] = useState(null)
    console.log(discoverFilter)

    const toggleJobDetails = (jobId) => {
        setExpandedJobId(prevId => prevId === jobId ? null : jobId);
    };

    return (
        <div className='sm:max-w-7xl mx-auto mt-10'>
            {discoverFilter.map((categoryItem) => (
                <div key={categoryItem._id}>
                    <h2 className='text-2xl font-semibold mb-2'>{categoryItem.category}</h2>
                    <div className='flex flex-col gap-3'>
                        {categoryItem.jobs.map((job) => {
                            const isExpanded = expandedJobId === job._id;
                            return (
                                <div key={job._id} className="job-card p-4 rounded-lg shadow-xl hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Company:</span> {job.company}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Location:</span> {job.location}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Job Type:</span> {job.jobType}
                                    </p>
                                    <p className="text-gray-600 mb-1">
                                        <span className="font-semibold">Salary:</span> {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                                    </p>
                                    <button
                                        onClick={() => toggleJobDetails(job._id)}
                                        className="text-blue-600 underline hover:text-blue-800 transition-all mt-2">
                                        {isExpanded ? 'Hide Details' : 'See Job Details'}
                                    </button>
                                    {isExpanded && (
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-3 mt-2">
                                            <div>
                                                <p className="text-gray-700 font-medium">Description:</p>
                                                <p className="text-gray-600">{job.description}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 font-medium">Requirements:</p>
                                                <p className="text-gray-600">{job.requirements}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-700 font-medium">Responsibilities:</p>
                                                <p className="text-gray-600">{job.responsibilities}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DiscoverjobDetailes;
