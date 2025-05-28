import React, { useContext } from 'react';
import TopCompanyJobsContext from '../../Context/TopCompanyJobs';
import { useEffect } from 'react';

const TopCompanyJobs = () => {
    const { filterdJob, loading, setLoading } = useContext(TopCompanyJobsContext);
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
            {filterdJob.map((job) => (
                <div key={job._id} className="mb-10 p-6 bg-white rounded-lg shadow-md">
                    <div className="space-y-6">
                        {job.companies.map((company) => (
                            <div key={company.id} className=" p-4 rounded-md bg-gray-100">
                                <h3 className="text-lg font-semibold mb-3 text-gray-800">{company.name}</h3>
                                <div className="space-y-3">
                                    {company.jobs.map((jobItem, index) => (
                                        <div key={index} className="p-3 bg-white rounded shadow-sm flex flex-col gap-1" >
                                            <span className="font-semibold text-blue-600">{jobItem.title}</span>
                                            <span className="text-gray-600 text-sm">{jobItem.location}</span>
                                            <span className="text-green-600 font-medium">{jobItem.salary}</span>
                                            <span className="text-gray-500 italic text-xs">{jobItem.type}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TopCompanyJobs;
