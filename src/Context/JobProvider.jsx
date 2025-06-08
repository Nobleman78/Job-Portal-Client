import React, { useEffect, useState } from 'react';
import JobContext from './Jobcontext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const JobProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [bookMark, setBookMark] = useState([])
    const [location, setLocation] = useState('');
    const [filterJobs, setFilterJobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const navigate = useNavigate();
    const [company, setCompany] = useState([])
    const [filterKey, setFilterKey] = useState('')
    const [filterMode, setFilterMode] = useState(null); // "search" or "category"

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data))
    }, []);
    useEffect(() => {
        axios.get('http://localhost:3000/companies')
            .then(res => setCompany(res.data))
    }, [])

    const formHandler = (e) => {
        e.preventDefault();
        navigate('/findjob');
        setFilterMode('search')
        setLoadingData(false);
    };
    useEffect(() => {
        const filtered = jobs.filter(job => {
            const titleMatch = input ? job.title?.toLowerCase().includes(input.toLowerCase()) : true;
            const locationMatch = location ? job.location?.toLowerCase().includes(location.toLowerCase()) : true;
            return titleMatch && locationMatch;
        });
        setFilterJobs(filtered);
    }, [input, location, jobs]);

    //Filter From Available jobs

    const handleOnClick = (category) => {
        setFilterKey(category)
        navigate('/findjob')
        setFilterMode('category')
        setLoadingData(false);
    }
    useEffect(() => {
        const filteredByTitle = jobs.filter(job => {
            const title = job.title.toLowerCase();
            const keywords = filterKey.toLocaleLowerCase().split(' ')
            return keywords.some(keyword => title.includes(keyword))
        })
        setFilterJobs(filteredByTitle)
    }, [filterKey, jobs])

    /*  Add to bookmark */

    const addtoBookMark = (job) => {
        if (!bookMark.some(b => b._id === job._id)) {
            setBookMark(prev => [...prev, job]);
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Bookmarked Successfully',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    }

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
        formHandler,
        handleOnClick
        , filterMode, setFilterMode, setFilterKey, company, addtoBookMark, bookMark

    };

    return (
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    );
};

export default JobProvider;
