import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/Authcontext';
import axios from 'axios';

const MyApplications = () => {
    const { user, loading } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        // fetch(`http://localhost:3000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => setJobs(data))
        axios.get(`http://localhost:3000/job-application?email=${user.email}`, { withCredentials: true })
            .then(res => console.log(setJobs(res.data)))
    }, [user?.email]);

    if (loading) return <p>Loading user...</p>;
    if (!user) return <p>Please log in to see your applications.</p>;

    return (
        <div>
            <h2>Applications: {jobs.length}</h2>
        </div>
    );
};

export default MyApplications;
