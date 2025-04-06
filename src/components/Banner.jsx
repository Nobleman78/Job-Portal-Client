import React from 'react';
import heroImage from '../assets/images/Find-Job.jpg';
import { easeOut, motion } from "framer-motion";
import { FaLocationArrow, FaSearch } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row justify-between my-10' >
            <div className='w-full md:w-[50%] lg:w-[40%] mt-10'>
                <motion.h2  
                    animate={{ x: 30, color: 'green', }}
                    transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                    className='text-2xl md:text-3xl lg:text-5xl mb-5'
                >
                    <motion.span
                        animate={{ color: ['#ecff33', '#33ffe3'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >Find A Job</motion.span> That Suits Your Interest and Skills
                </motion.h2>
                <p className='text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. In perferendis quod quaerat dolorem tenetur consectetur nulla odio quis, optio repellendus?
                </p>

                <div className="flex items-center mt-5 lg:mt-10 border border-gray-400 rounded-md overflow-hidden x">
                    <div className="pl-3 pr-2">
                        <FaSearch />
                    </div>
                    <input type='text' placeholder='Job Title' className='w-full py-2 px-2 outline-none' />
                    <div className="h-8 w-px bg-gray-400 mr-2"></div>
                    <SlLocationPin className='text-6xl' />
                    <input type="text" placeholder='Your Location' className='py-2 w-30 lg:w-40 px-2 outline-none shadow-none ' />
                    <button className='px-5 mx-1 py-3 rounded-md bg-blue-600 text-white'>Search</button>
                </div>
            </div>
            <div className='md:w-[40%] lg:w-1/2  mt-10 lg:mt-0'>
                <img
                    src={heroImage}
                    alt="Person finding job"
                    className='w-full md:h-[250px] lg:h-auto object-cover'
                />
            </div>
        </div>
    );
};

export default Banner;