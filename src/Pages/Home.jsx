import React from 'react';
import heroImage from '../assets/images/Find-Job.jpg'
import {motion} from 'framer-motion'


const Home = () => {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className='w-[40%] mt-10 '>
                < motion h2 className='text-5xl mb-5'>Find A Job That Suits Your Interest and Skills</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. In perferendis quod quaerat dolorem tenetur consectetur nulla odio quis, optio repellendus?</p>
           
            </div>
            <div className='flex-1'>
                <img src={heroImage} alt="" />

            </div>
        </div>
    );
};

export default Home;