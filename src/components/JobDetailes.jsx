import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const [jobs, setJobs] = useState([]);
    const { id } = useParams();
    const [seeMore,setSeeMore] = useState(false);

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
                    <div className='sm:max-w-7xl mx-auto px-2 mt-10 '>
                        <h2 className='text-xl font-semibold'>Job Details for {job.title}</h2>
                        <p className='text-'>Company : {job.company}</p>
                        <p>Location : {job.location} </p>
                        <p>Deadline : {job.applicationDeadline}</p>
                        <button onClick={()=>setSeeMore(!seeMore)} className='hover:text-blue-500 cursor-pointer underline'>See More</button>
                        {
                            seeMore && <div className='border px-4 py-2 mt-2 text-lg '>
                                <p>Description : {job.description }</p>
                                <p>Requirements : {job.requirements}</p>
                                <p>Responsiblities : {job.responsibilities}</p>
                            </div>
                        }

                    </div> 
                 : ''
            }
        </div>
    );
};

export default JobDetails;