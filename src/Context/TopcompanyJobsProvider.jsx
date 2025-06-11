import { useEffect, useState } from 'react';
import TopCompanyJobsContext from './TopCompanyJobs';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const TopcompanyJobsProvider = ({ children }) => {
    const [topJobs, setTopJobs] = useState([])
    const [topJobKeyword, setTopJobKeyword] = useState('')
    const [loading, setLoading] = useState(true)
    const {title} = useParams()
    

    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setTopJobs(res.data))

    }, [])
    const getKeyword = (keyword) => {
        setTopJobKeyword(keyword)
        localStorage.setItem('topcompany-job-keyword',keyword)
    }
    useEffect(()=>{
        const storedKeyword  = title || localStorage.getItem('topcompany-job-keyword')
        if(storedKeyword){
            setTopJobKeyword(storedKeyword)
        }
    },[title])
    const filterdJob = topJobs.filter(job => {
        const category = job.category.toLowerCase();
        const keywords = topJobKeyword.toLowerCase().split(' ')
        return keywords.some(keyword => category.includes(keyword))
    })

    const value = {
        topJobs, getKeyword, filterdJob, loading, setLoading
    }
    return (
        <TopCompanyJobsContext.Provider value={value}>
            {children}
        </TopCompanyJobsContext.Provider>
    );
};
export default TopcompanyJobsProvider;

