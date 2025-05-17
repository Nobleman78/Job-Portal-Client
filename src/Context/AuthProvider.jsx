import React, { useEffect, useState } from 'react';
import AuthContext from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Utility/Firebase';
import { useNavigate } from 'react-router-dom';


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)

    }
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    })

    /*This is for filterering */

    const [input, setInput] = useState('');
    const [location, setLocation] = useState('');
    const [filterJobs, setFilterJobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [loadingData, setLoadingData] = useState(true);
    const navigate = useNavigate();

    const formHandler = (e) => {
        e.preventDefault();
        navigate('/findjob');
        setLoadingData(false)


    };

    useEffect(() => {
        const tempdata = [...jobs];
        const filterJob = tempdata.filter(job => {
            const titleMatch = input ? job.title?.toLowerCase().includes(input.toLowerCase()) : true;
            const locationMatch = location ? job.location?.toLowerCase().includes(location.toLowerCase()) : true;
            return titleMatch && locationMatch;

        });
        
        setFilterJobs(filterJob);
    }, [input, jobs, location])


    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);



    const value = {
        user, loading, createUser, signInWithEmailandPassword, loginWithGoogle,
        signOutUser, setInput, setLocation, filterJobs, input, location, formHandler, loadingData,
        setLoadingData, setJobs

    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;