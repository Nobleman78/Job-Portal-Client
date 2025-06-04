import React, { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import Jobcategory from '../components/Jobcategory';
import Jobs from '../components/Jobs';
import JobContext from '../Context/Jobcontext';

import JobFeatures from '../components/JobFeatures';
import FeatureCompany from '../components/Company/FeatureCompany';
import DiscoverJobs from '../components/DisCoverJobs/DiscoverJobs';
import SponsorCompany from '../components/Company/SponsorCompany';
import Download from '../components/Download/Download';
import TopCompany from '../components/Company/TopCompany';

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
        <div className=''>
            <Banner />
            <Jobcategory />
            <Jobs />
            <TopCompany/>
            <FeatureCompany/>
            <DiscoverJobs/>
            <SponsorCompany/>
            <Download/>
        </div>
    );
};

export default Home;