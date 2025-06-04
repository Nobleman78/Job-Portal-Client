import { easeOut, motion } from "framer-motion";
import { useContext } from 'react';
import { FaLocationArrow, FaSearch } from 'react-icons/fa';
import { SlLocationPin } from "react-icons/sl";
import AuthContext from '../Context/Authcontext';
import JobContext from '../Context/Jobcontext';


const Banner = () => {
    const { setInput, setLocation, input, location,formHandler } = useContext(JobContext)
 
    return (
        
        <div className='flex flex-col-reverse md:flex-row justify-between my-10 ' >
            <div className='w-full mt-10 flex flex-col items-center'>
                <h2
                    animate={{ x: 30, color: 'green', }}
                    transition={{ duration: 2, delay: 1, ease: easeOut, repeat: Infinity }}
                    className='text-2xl md:text-3xl lg:text-5xl mb-5'
                >
                    <motion.span
                        animate={{ color: ['#ecff33', '#33ffe3'] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >Find A Job</motion.span> That Suits Your Interest and Skills
                </h2>
                <p className='text-3xl text-gray-800 text-center'>
                   Find your dream job now
                </p>
                {/*------------ Search Section Start------------ */}
                <form onSubmit={formHandler} className="shadow-2xl flex items-center mt-5 lg:mt-10 border border-gray-200 rounded-full overflow-hidden px-5">
                    <div className="pl-3 pr-2">
                        <FaSearch />
                    </div>
                    <input onChange={(e) => setInput(e.target.value)} type='text' value={input} placeholder='Job Title' className='w-full py-2 px-2 outline-none' />
                    <div className="h-8 w-px bg-gray-400 mr-2"></div>
                    <SlLocationPin className='text-6xl' />
                    <input onChange={(e) => setLocation(e.target.value)} type="text" value={location} placeholder='Your Location' className='py-2 w-30 lg:w-40 px-2 outline-none shadow-none ' />
                    <button type='submit' className='px-5 mx-1 py-3 rounded-md bg-blue-600 text-white'>Search</button>
                </form>
                {/*------------ Search Section End------------ */}
            </div>
            {/* <div className='md:w-[40%] lg:w-1/2  mt-10 lg:mt-0'>
                <img
                    src={heroImage}
                    alt="Person finding job"
                    className='w-full md:h-[250px] lg:h-auto object-cover'
                />
            </div> */}
        </div>
    );
};

export default Banner;