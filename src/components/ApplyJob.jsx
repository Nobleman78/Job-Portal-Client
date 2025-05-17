import React, { useContext, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import AuthContext from '../Context/Authcontext';

const ApplyJob = () => {
 
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [fileUrl, setFileUrl] = useState(null);
    const [fileName, setFileName] = useState('');
    const [showURL, setShowURL] = useState(true);
    const navigate = useNavigate()

    // Default form data
    const defaultFormData = {
        name: '',
        email: '',
        number: '',
        workplaceType: '',
        location: '',
        type: '',
        resume: ''
    };

    const [formData, setFormData] = useState(defaultFormData);

    const handleFileURL = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setFileUrl(url);
            setShowURL(true);
            setFileName(file.name);
        }
    };

    const verifyForm = () => {
        return (
            formData.name.trim() !== '' &&
            formData.email.trim() !== '' &&
            formData.number.trim() !== '' &&
            formData.workplaceType.trim() !== '' &&
            formData.location.trim() !== '' &&
            formData.type.trim() !== '' &&
            formData.resume.trim() !== ''
        );
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'resume') {
            setFormData({
                ...formData,
                [name]: files[0]?.name || ''
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const submitJobApplication = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.number.value;
        const location = form.location.value;
        const resumeFile = form.resume.files[0]?.name || '';
        const workPlaceType = form.workplaceType.value;
        const type = form.type.value;

       /*----------Send Data To The Server-------------*/
        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            name,
            email,
            phoneNumber,
            location,
            resumeFile,
            workPlaceType,
            type
        };

        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('Your Data Have Been Saved To Database')
            }
        });

     
        form.reset();
        setFormData(defaultFormData);
        setFileUrl(null);
        setFileName('');
        setShowURL(false);
        navigate('/myApplications')
    };

    return (
        <div className='sm:max-w-7xl mx-auto px-2 mt-10'>
            <form onSubmit={submitJobApplication} className='shadow-xl w-2xl mx-auto px-10 py-10 rounded-2xl'>
                <div className='flex flex-col mb-2 gap-2'>
                    <label>Full Name:</label>
                    <input onChange={handleInputChange} type="text" name='name' required value={formData.name} placeholder='Enter your name' className='border outline-none shadow-none w-full px-5 py-2 rounded-full' />
                </div>

                <div className='flex flex-col gap-2 mb-2'>
                    <label>Email:</label>
                    <input onChange={handleInputChange} type="email" name='email' required value={formData.email} placeholder='Enter your email' className='border w-full outline-none shadow-none px-5 py-2 rounded-full' />
                </div>

                <div className='flex flex-col gap-2 mb-2'>
                    <label>Phone Number:</label>
                    <input onChange={handleInputChange} type="number" name='number' required value={formData.number} placeholder='Enter your phone number' className='px-5 py-2 rounded-full w-full border outline-none shadow-none' />
                </div>

                <div className='flex justify-between gap-2'>
                    <div className='flex flex-col w-1/2 gap-2'>
                        <label>WorkPlace Type:</label>
                        <select onChange={handleInputChange} name="workplaceType" required value={formData.workplaceType} className='w-full border px-5 py-2 rounded-full outline-none shadow-none'>
                            <option value="">Select Type</option>
                            <option value="onsite">Onsite</option>
                            <option value="remote">Remote</option>
                        </select>
                    </div>

                    <div className='flex flex-col gap-2 w-1/2'>
                        <label>Job Location</label>
                        <input onChange={handleInputChange} type="text" required name='location' value={formData.location} placeholder='Enter your preferred area' className='w-full px-5 py-2 rounded-full border outline-none shadow-none' />
                    </div>
                </div>

                <div className='flex flex-col gap-2 mb-2'>
                    <label>Employment Type</label>
                    <input onChange={handleInputChange} type="text" required name='type' value={formData.type} placeholder='Enter your type' className='w-full px-5 py-2 rounded-full border outline-none shadow-none' />
                </div>

                <div className="flex flex-col space-y-2 mb-4">
                    <label htmlFor="resumeUpload" className="font-medium">
                        Provide Your CV/Resume:
                    </label>
                    <input
                        id="resumeUpload"
                        required
                        type="file"
                        name='resume'
                        onChange={(e) => {
                            handleFileURL(e);
                            handleInputChange(e);
                        }}
                        accept=".pdf,.doc,.docx"
                        className="w-full border border-gray-300 rounded-lg cursor-pointer px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                {fileUrl && showURL && (
                    <a href={fileUrl} target='_blank' rel='noreferrer' className="text-blue-600 underline hover:text-blue-800 transition">
                        {fileName}
                    </a>
                )}

                <button
                    type="submit"
                    disabled={!verifyForm()}
                    className={`bg-blue-600 px-4 py-2 w-full text-white mt-4 rounded-full ${verifyForm() ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default ApplyJob;
