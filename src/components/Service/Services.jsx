import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";

const Services = () => {
    return (
        <div className='sm:max-w-7xl mx-auto mt-10'>
            <img src="https://miro.medium.com/v2/resize:fit:2734/1*Q-EBBIYWFVtN2KaVnSQoJw.jpeg" alt="" />
            <div className='shadow-2xl px-10 py-5 mt-5 rounded-xl flex'>
                <div className="mt-10 flex flex-col gap-7 w-1/2 ">
                    <h2 className='text-5xl text-center'>Contact Us</h2>
                    <p className='text-2xl text-gray-700'>If you have any queries, feel free to reach out to us during business hours. Sunday – Thursday: 9:30 AM – 05:30 PM</p>
                    <div className='flex items-center gap-2'>
                        <CiLocationOn className='text-3xl' />
                        <p className='text-xl text-gray-700'>11th Floor, MMK-Aakash Avenue, Plot No. 12, Kamal Ataturk Avenue, Gulshan-2, Dhaka-1212, Bangladesh</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <BsEnvelope className='text-xl' />
                        <p className='text-xl text-gray-700'>contact@jobs.com</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <CiMobile4 className='text-3xl' />
                        <p className='text-xl text-gray-700'>+8801400492818</p>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img src="https://img.freepik.com/premium-vector/customer-support-doodle-mini-illustration-is-up-premium-download_67813-18857.jpg?semt=ais_hybrid&w=740" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Services;