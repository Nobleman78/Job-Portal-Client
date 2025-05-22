import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import JobContext from '../Context/Jobcontext';

const Jobcategory = () => {
    const [jobs, setJobs] = useState([]);
    const { handleOnClick } = useContext(JobContext);

    useEffect(() => {
        axios.get('http://localhost:3000/popular-jobs')
            .then(res => setJobs(res.data));
    }, []);

    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            <h2 className="text-center text-4xl font-bold text-gray-800">Popular Job Categories</h2>
            <p className="text-center text-gray-500 mt-3">2000+ Live Jobs • 150 New Today</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    jobs.map((job, index) => (
                        <div
                            onClick={() => {
                                handleOnClick(job.category);
                                scrollTo(0, 0);
                            }}
                            key={index}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 p-6 cursor-pointer"
                        >
                            <div className="flex items-center gap-5">
                                <img
                                    className="w-20 h-20 object-cover rounded-xl border border-gray-200"
                                    src={job.image}
                                    alt={job.category}
                                />
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{job.category}</h3>
                                    <p className="text-sm text-gray-500">{job.open_positions} open positions</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Jobcategory;
