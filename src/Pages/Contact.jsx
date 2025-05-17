import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Lottie from 'lottie-react'
import contatLottie from '../assets/Lottie/Animation - 1747280698404.json'
import { TbPhoneCall } from "react-icons/tb";
import { GrLocation } from "react-icons/gr";
import { AiOutlineMail } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, once: false });
        Aos.refresh()
    }, []);

    const handleContact = (e) => {
        e.preventDefault();
        const form = e.target;
        const FirstName = form.firstname.value;
        const lastName = form.lastname.value;
        const email = form.email.value;
        const number = form.phonenumber.value;
        const message = form.message.value;
        console.log(FirstName, lastName, email, number, message)
    }
    return (
        <div className='sm:max-w-7xl mx-auto px-2 '>
            <Helmet>
                <title>Contact | Job Portal</title>
            </Helmet>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='w-full md:w-1/2' >
                    <Lottie data-aos="fade-right" data-aos-delay='700' animationData={contatLottie}></Lottie>
                </div>
                <div className='w-full md:w-1/2 mt-5 bg-black text-white px-5 md:px-20 py-5  rounded-3xl' data-aos='fade-left' data-aos-delay='700'>
                    <h2 className='text-4xl font-semibold'>Contact Information</h2>
                    <div className='flex flex-col gap-3 mt-7 text-xl'>
                        <p className='flex items-center gap-3'><GrLocation /> Bananni, Dhaka</p>
                        <p className='flex items-center gap-3'><TbPhoneCall />+8801598634598</p>
                        <p className='flex items-center gap-3'><AiOutlineMail />jobportal@gmail.com</p>
                    </div>
                    <form onSubmit={handleContact} className=''>
                        <div className='flex flex-col md:flex-row mt-10 justify-between items-center gap-4'>
                            <div className='w-full md:w-1/2 flex flex-col' data-aos="fade-up">
                                <label htmlFor="">First Name</label>
                                <input name='firstname' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="text" placeholder='Enter Your First Name' />
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col' data-aos="fade-up">
                                <label htmlFor="">Last Name</label>
                                <input name='lastname' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="text" placeholder='Enter Your Last Name' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between mt-5 md:mt-0 items-center gap-4'>
                            <div className='w-full md:w-1/2 flex flex-col' data-aos="fade-up">
                                <label htmlFor="" >Email</label>
                                <input name='email' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="number" placeholder='Enter Your Email' />
                            </div>
                            <div className='w-full md:w-1/2 flex flex-col' data-aos="fade-up">
                                <label htmlFor="">Phone Number</label>
                                <input name='phonenumber' className='shadow-none rounded outline-none border mt-2 px-4 py-2 bg-white text-black' type="number" placeholder='Enter Your Phone Number' />
                            </div>
                        </div>
                        <div className='flex flex-col mt-5' data-aos="fade-up">
                            <label htmlFor="">Message</label>
                            <input name='message' type="text" className='py-5 px-4 border outline-none shadow-none mt-2 rounded-lg bg-white text-black' />
                        </div>
                        <button className='text-lg px-4 py-2 cursor-pointer bg-white text-black mt-4 rounded w-50' data-aos="fade-up">Submit</button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Contact;