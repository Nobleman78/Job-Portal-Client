import React, { useContext, useEffect, useState } from 'react';
import JobContext from './Jobcontext';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import AuthContext from './Authcontext';

const JobProvider = ({ children }) => {
    const [input, setInput] = useState('');
    const [bookMark, setBookMark] = useState([])
    const [location, setLocation] = useState('');
    const [filterJobs, setFilterJobs] = useState([]);
    const [discoverFilter, setDiscoverFilter] = useState([])
    const [jobs, setJobs] = useState([]);
    const [roles, setRoles] = useState([])
    const [loadingData, setLoadingData] = useState(true);
    const [company, setCompany] = useState([])
    const [filterKey, setFilterKey] = useState('')
    const [filterMode, setFilterMode] = useState(null);
    const { user } = useContext(AuthContext)
    const [discoverJobKey, setDiscoverJobKey] = useState('')
    const navigate = useNavigate();
    const { category } = useParams()

    // Jobs Api Data
    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setJobs(res.data))
    }, []);
    // Companies Api Data
    useEffect(() => {
        axios.get('http://localhost:3000/companies')
            .then(res => setCompany(res.data))
    }, [])
    //  Roles based Jobs Api Data
    useEffect(() => {
        axios.get('http://localhost:3000/rolebasedjob')
            .then(res => setRoles(res.data))
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


    // Discover Job Filter
    const discoverJobHandler = (c) => {
        setDiscoverJobKey(c)
        navigate(`/discoverjobdetails/${c}`)

    }
    useEffect(() => {
        const activeCategory = discoverJobKey || category;
        if (activeCategory) {
            const filterByCategory = roles.filter(job => {
                const jobCategory = job.category.toLowerCase();
                const searchTerms = activeCategory.toLowerCase().split(' ');
                return searchTerms.some(term => jobCategory.includes(term));
            });
            setDiscoverFilter(filterByCategory);
        } else {
            setDiscoverFilter([]); 
        }
    }, [roles, discoverJobKey, category])

    /*  Add to bookmark */
    useEffect(() => {
        if (user?.email) {
            fetchData()
        }
    }, [user?.email]);
    const fetchData = () => {
        axios.get(`http://localhost:3000/bookmarks?email=${user.email}`, { withCredentials: true })
            .then(res => setBookMark(res.data))
            .catch(err => console.error('Failed to fetch bookmarks:', err));
    }
    const addtoBookMark = (job) => {
        if (!user || !user.email) {
            Swal.fire({
                position: 'top-center',
                icon: 'warning',
                title: 'Please Login First',
                text: 'You need to login to bookmark jobs',
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        if (bookMark.some(b => b.jobId === job._id)) {
            Swal.fire({
                icon: 'info',
                title: 'Already Bookmarked',
                text: 'This job is already in your bookmarks',
            });
            return;
        }
        axios.post('http://localhost:3000/bookmarks', {
            jobId: job._id,
            title: job.title,
            salaryRange: job.salaryRange,
            location: job.location,
            company_logo: job.company_logo,
            userEmail: user.email
        },)
            .then(() => {
                fetchData()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bookmarked Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch(err => {
                console.error('Bookmark failed:', err);
                Swal.fire({
                    icon: 'error',
                    title: 'Bookmark Failed',
                    text: 'Failed to bookmark the job',
                });
            });
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
        , filterMode, discoverFilter, discoverJobHandler, roles, setFilterMode, setFilterKey, company, addtoBookMark, bookMark

    };

    return (
        <JobContext.Provider value={value}>
            {children}
        </JobContext.Provider>
    );
};

export default JobProvider;
