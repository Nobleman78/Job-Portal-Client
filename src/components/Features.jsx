import React from 'react';
import one from '../assets/images/1-1.png'
import two from '../assets/images/1-2.png'
import three from '../assets/images/1-3.png'
import four from '../assets/images/1-4.png'
import five from '../assets/images/1-5.png'
import six from '../assets/images/1-6.png'
import { IoBagOutline } from "react-icons/io5";
import { FaLocationPinLock } from 'react-icons/fa6';
import { IoTimeOutline } from "react-icons/io5";
import { FaMoneyBill } from 'react-icons/fa';

const Features = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h2 className='text-3xl mb-4'>Features Jobs</h2>
                <p className='text-gray-500 mb-5'>Know your worth and find the job that qualify your life</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start gap-4 '>
                        <img className='w-15' src={one} alt="" />
                        <div>
                            <h2 className='font-semibold  lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2 ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start  gap-4 '>
                        <img className='w-15' src={two} alt="" />
                        <div>
                            <h2 className='font-semibold lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2  ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2 '><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start gap-4 '>
                     <img className='w-15' src={three} alt="" />
                        <div>
                            <h2 className='font-semibold lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2  ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start  gap-4 '>
                       <img className='w-15' src={four} alt="" />
                        <div>
                            <h2 className='font-semibold lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2  ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2 '><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start  gap-4 '>
                       <img className='w-15' src={five} alt="" />
                        <div>
                            <h2 className='font-semibold lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2  ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2 '><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='border border-gray-300 px-5 py-5'>
                    <div className='flex items-start  gap-4 '>
                       <img className='w-15' src={six} alt="" />
                        <div>
                            <h2 className='font-semibold lg:text-lg'>Software Engineer (Android), Libraries</h2>
                            <div className='flex items-center gap-3'>
                                <p className='flex items-center gap-2  ' ><IoBagOutline />Segment</p>
                                <p className='flex items-center gap-2' ><FaLocationPinLock />England</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2 '><IoTimeOutline />Time Hours Ago</p>
                                <p className='hidden lg:flex lg:items-center lg:gap-2'><FaMoneyBill />$30k - $50k</p>
                            </div>
                            <div className='flex items-center gap-3 lg:gap-6 mt-2'>
                                <p className='bg-blue-200 text-blue-500 py-1 px-4 rounded-xl text-sm'>Full Time</p>
                                <p className='bg-green-200 text-green-500 px-4 py-1 rounded-xl text-sm' >Private</p>
                                <p className='bg-orange-200 text-orange-500 px-4 py-1 rounded-xl text-sm' >Urgent</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;