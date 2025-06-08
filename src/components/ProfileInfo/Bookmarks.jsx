import React, { useContext } from 'react';
import JobContext from '../../Context/Jobcontext';
import { Link } from 'react-router-dom';

const Bookmarks = () => {
    const { bookMark } = useContext(JobContext)
    return (
        <div className='sm:max-w-7xl mx-auto mt-10 '>
            <h2 className='text-2xl mb-5 font-semibold'>My Bookmarks : {bookMark.length}</h2>
            <div  className='flex flex-col gap-3'>
                {
                    bookMark.map(job => (
                        <div key={job._id} className='flex items-center gap-5 border rounded px-5 py-2 text-lg'>
                            <img className='w-20' src={job.company_logo} alt="" />
                            <h2>Title : {job.title}</h2>
                            <p><strong className="text-gray-800">Salary : </strong> {job.salaryRange.min} - {job.salaryRange.max} ৳</p>
                            <p>Location : {job.location}</p>
                            <Link to={`/jobs/${job.jobId}`}>
                                <button className='bg-blue-500 px-4 cursor-pointer py-1 rounded text-white'>Apply Job</button>
                            </Link>
                            <button className='bg-red-500 px-4 cursor-pointer py-1 rounded text-white'>Delete Bookmark</button>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default Bookmarks;