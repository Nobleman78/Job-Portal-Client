import { useEffect, useState } from 'react';
import TopCompanyJobsContext from './TopCompanyJobs';
import axios from 'axios';
const TopcompanyJobsProvider = ({ children }) => {
    const [topJobs, setTopJobs] = useState([])
    const [topJobKeyword, setTopJobKeyword] = useState('')
    const [loading,setLoading] = useState(true)
    console.log(topJobKeyword)
    
    useEffect(() => {
        axios.get('http://localhost:3000/jobs')
            .then(res => setTopJobs(res.data))

    }, [])
    const filterdJob = topJobs.filter(job => {
        const category = job.category.toLowerCase();
        const keywords = topJobKeyword.toLowerCase().split(' ')
        return keywords.some(keyword => category.includes(keyword))
    })

    const value = {
        topJobs, setTopJobKeyword, filterdJob,loading,setLoading
    }
    return (
        <TopCompanyJobsContext.Provider value={value}>
            {children}
        </TopCompanyJobsContext.Provider>
    );
};
export default TopcompanyJobsProvider;

