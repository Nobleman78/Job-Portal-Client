import React from 'react';
import Banner from '../components/Banner';
import Jobcategory from '../components/Jobcategory';
import Jobs from '../components/Jobs';

const Home = () => {
    return (
        <div className='sm:max-w-7xl mx-auto px-2'>
            <Banner />
            <Jobcategory />
            <Jobs />
        </div>
    );
};

export default Home;