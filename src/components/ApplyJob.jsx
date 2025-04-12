import React from 'react';
import { useParams } from 'react-router-dom';

const ApplyJob = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className='sm:max-w-7xl mx-auto px-2 mt-10 '>
            <form className='shadow-xl w-2xl mx-auto px-10 py-10 rounded-2xl'>
                <div className='flex flex-col mb-2 gap-2'>
                    <label htmlFor="">Full Name : </label>
                    <input type="text" placeholder='Enter your name' className='border outline-none shadow-none w-full px-5 py-2 rounded-full' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label htmlFor="">Email : </label>
                    <input type="email" placeholder='Enter your email' className='border w-full outline-none shadow-none px-5 py-2 rounded-full' />
                </div>
                <div className='flex flex-col gap-2 mb-2'>
                    <label htmlFor="">Phone Number: </label>
                    <input type="number" placeholder='Enter your phone number ' className='px-5 py-2 rounded-full w-full border outline-none shadow-none ' />
                </div>
                <div className='flex justify-between gap-2'>
                    <div className='flex flex-col w-1/2 gap-2  '>
                        <label htmlFor="">WorkPlace Type :  </label>
                        <select name="" id="" className='w-full border px-5 py-2 rounded-full  outline-none shadow-none'>
                            <option value="onsite">Onsite</option>
                            <option value="remote">Remote</option>
                        </select>

                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                        <label htmlFor="">Job Location</label>
                        <input type="text" placeholder='Enter your preferred area ' className='w-full px-5 py-2 rounded-full border outline-none shadow-none' />
                    </div>
                </div>

                <div className='flex flex-col gap-2 mb-2'>
                    <label htmlFor="">Employment Type</label>
                    <input type="text" placeholder='Enter you type' className='w-full px-5 py-2 rounded-full border outline-none shadow-none' />
                </div>

                <div className="flex flex-col space-y-2">
                    <label htmlFor="resumeUpload" className="font-medium">
                        Provide Your CV/Resume:
                    </label>
                    <input
                        id="resumeUpload"
                        type="file"
                        className="w-full border border-gray-300 rounded-lg cursor-pointer px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

            </form>
        </div>
    );
};

export default ApplyJob;