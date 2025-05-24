import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import Jobcategory from '../components/Jobcategory';
import Jobs from '../components/Jobs';
import JobContext from '../Context/Jobcontext';
import Company from '../components/Company/Company';
import JobFeatures from '../components/JobFeatures';
import FeatureCompany from '../components/Company/FeatureCompany';
import DiscoverJobs from '../components/DisCoverJobs/DiscoverJobs';
import SponsorCompany from '../components/Company/SponsorCompany';

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
            <Company/>
            <FeatureCompany/>
            <DiscoverJobs/>
            <SponsorCompany/>
        </div>
    );
};

export default Home;