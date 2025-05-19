import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import JobContext from '../Context/Jobcontext';


const Jobcategory = () => {
    const [jobs, setJobs] = useState([])
    const { handleOnClick } = useContext(JobContext)
 
    useEffect(() => {
        axios.get('http://localhost:3000/popular-jobs')
            .then(res => (setJobs(res.data)))
    }, [])

    return (
        <div>
            <h2 className='text-center text-3xl'>Popular Job Categories</h2>
            <p className='text-center text-gray-400 mt-4'>2000 Live Jobs - 150 Jobs Added Today</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 cursor-pointer'>
                {
                    jobs.map((job, index) => { 
                        return (
                            <div onClick={() => handleOnClick(job.category)} key={index} className='border border-gray-400 px-10 py-5'>
                                <div className='flex items-center gap-4'>
                                    <img className='w-20 h-20 rounded' src={job.image} alt="" />
                                    <div>
                                        <h2 className='text-lg font-semibold'>{job.category}</h2>
                                        <p>{job.open_positions}</p>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Jobcategory;