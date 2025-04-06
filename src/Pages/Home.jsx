import React from 'react';
import Banner from '../components/Banner';
import Jobcategory from '../components/Jobcategory';
import Features from '../components/Features';

const Home = () => {
    return (
        <div  className='sm:max-w-7xl mx-auto px-2'>
            <Banner />
            <Jobcategory/>
            <Features/>
        </div>
    );
};

export default Home;