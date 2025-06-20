import React from 'react';

const About = () => {
    return (
        <div>
            <div className='relative z-0'>
                <img className='w-full h-100 opacity-30 inset-0 z-25  ' src="https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9iJTIwcG9ydGFsfGVufDB8fDB8fHww" alt="" />
                <h2 className="absolute z-0 text-gray-700 top-1/3 left-1/2 -translate-x-1/2  text-3xl font-semibold">
                    We strive for high quality job satisfaction levels.
                </h2>
            </div>

            <div className='flex gap-5 px-10 py-10'>
                {/* Mission */}
                <div className='w-1/2 py-10 px-10  rounded-2xl flex flex-col gap-3 bg-blue-700 text-white'>
                    <h2 className='text-center text-3xl'>Mission</h2>
                    <p className='text-xl'>Through us, we make both companies and individuals smile. This will be a job-matching website where you can test more of your potential and more of your company's potential.</p>
                </div>
                {/* Vision */}
                <div className='w-1/2  px-10 py-10  rounded-2xl flex flex-col gap-3 bg-green-700 text-white'>
                    <h2 className='text-center text-3xl'>Vision</h2>
                    <p className='text-xl'>We will create an HR portal that you will want to check every day. It will be a product that both businesses and individuals will say atBJobs is the No.1 job matching site.</p>
                </div>
            </div>
            {/* Who we are */}
            <div className='flex gap-10 px-10 py-10 bg-black'>
                <div className='w-1/2 flex flex-col gap-4  px-10 py-10 text-white'>
                    <h2 className='text-4xl'>WHO WE ARE?</h2>
                    <p className='text-2xl font-light text-justify '>We have been working with Japanese companies in Bangladesh since 2024 on development projects with Japanese companies.As we enter 2024, we have started the product development of atBJobs because we want to create a global standard job matching website with DX-orientation.</p>
                </div>
                <div className='w-1/2'>
                    <img src="https://atb-jobs.com/v2/images/aboutus.png" alt="" />
                </div>
            </div>
            <div className='mt-20'>
                <h2 className='text-center text-6xl text-gray-700'>CORE STRENGTHS</h2>
                <div className='flex items-center justify-between px-10 gap-10 py-10'>
                    <div className='w-1/2 flex flex-col gap-5 px-10'>
                        <img className='w-100' src="https://atb-jobs.com/v2/icons/japan.png" alt="" />
                        <h2 className='text-2xl text-gray-700'>Development experience with several Japanese companies and global standards.</h2>
                    </div>
                    <div className='w-1/2 flex flex-col gap-5  px-10'>
                        <img className='w-100' src="https://atb-jobs.com/v2/icons/box.png" alt="" />
                        <h2 className='text-2xl text-gray-700'>Interviews conducted with over 200 recruiters. The product was developed with their input.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;