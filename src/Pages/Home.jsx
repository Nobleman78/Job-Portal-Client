import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import Jobcategory from '../components/Jobcategory';
import Jobs from '../components/Jobs';
import JobContext from '../Context/Jobcontext';

const Home = () => {
    const { setInput, setLocation, setFilterKey, setLoadingData, setFilterMode, } = useContext(JobContext);
    useEffect(() => {
        setInput('');
        setLocation('');
        setFilterKey('');
        setFilterMode(null);
        setLoadingData(true);
    }, [setFilterKey, setFilterMode, setLoadingData, setInput, setLocation]);
    return (
        <div className='sm:max-w-7xl mx-auto px-2'>
            <Banner />
            <Jobcategory />
            <Jobs />
        </div>
    );
};

export default Home;