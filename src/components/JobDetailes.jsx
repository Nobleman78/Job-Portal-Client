import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const JobDetails = () => {
    const [jobs, setJobs] = useState([]);
    const { id } = useParams();
    const [seeMore, setSeeMore] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:3000/jobs`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);


    const job = jobs.find(job => job._id === id);

    return (
        <div>
            {
                job ?
                    <div className='sm:max-w-7xl mx-auto px-2 mt-10  '>
                        <h2 className='text-xl font-semibold'>Job Details for {job.title}</h2>
                        <div className='flex flex-col mt-2'>
                            <p className='text-'>Company : {job.company}</p>
                            <p>Location : {job.location} </p>
                            <p>Deadline : {job.applicationDeadline}</p>
                        </div>
                        <Link to={`/applyJob/${job._id}`}>
                            <button className='bg-blue-500 px-4 py-1 mt-5 rounded cursor-pointer text-white'>Apply Now</button>
                        </Link>
                        <button onClick={() => setSeeMore(!seeMore)} className='ms-2 hover:text-blue-500 cursor-pointer underline'>See More</button>
                        {
                            seeMore && <div className='border rounded-2xl px-4 py-2 mt-2 text-lg '>
                                <p>Description : <span className='font-semibold'>{job.description}</span></p>
                                <p>Requirements : <span className='font-semibold'>{job.requirements}</span></p>
                                <p>Responsiblities : <span className='font-semibold'> {job.responsibilities}</span></p>
                            </div>
                        }

                    </div>

                    : ''
            }
        </div>
    );
};

export default JobDetails;