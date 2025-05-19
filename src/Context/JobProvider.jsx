import React, { useEffect, useState } from 'react';
import JobContext from './Jobcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const JobProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [location, setLocation] = useState('');
    const [filterJobs, setFilterJobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        navigate('/findjob');
        setLoadingData(false);
    };

    useEffect(() => {
         axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data))
    }, []);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            const titleMatch = input ? job.title?.toLowerCase().includes(input.toLowerCase()) : true;
            const locationMatch = location ? job.location?.toLowerCase().includes(location.toLowerCase()) : true;
            return titleMatch && locationMatch;
        });

        setFilterJobs(filtered);
    }, [input, location, jobs]);

    const value = {
        input,
        location,
        setInput,
        setLocation,
        filterJobs,
        jobs,
        setJobs,
        loadingData,
        setLoadingData,
        formHandler
    };

    return (
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    );
};

export default JobProvider;
