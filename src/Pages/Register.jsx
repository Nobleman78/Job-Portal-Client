
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import registrationData from '../assets/Lottie/Animation - 1743835019155.json'
import AuthContext from '../Context/Authcontext';

const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const [success, setSuccess] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        form.reset();
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                alert(error.message)
            })


    }
    success && alert('Sign Up Successfull')

    return (
        <div className='flex flex-col lg:flex-row items-center justify-center '>
            <div className='lg:w-1/2'>
                <Lottie className='w-[80%] mx-6 py-3' animationData={registrationData}></Lottie>
            </div>
            <div className='lg:w-1/2 w-full'>
                <form onSubmit={handleSubmit} className='shadow-2xl rounded-xl w-[90%] h-[330px] px-5 py-5 sm:max-w-96 m-auto  text-gray-800' >
                    <h1 className="text-2xl">Sign up</h1>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex mt-3 flex-col gap-2">
                            <label>Email</label>
                            <input name='email' className="w-[100%] px-2 border outline-none shadow-none rounded py-1" type="email" placeholder='Enter Your Email' />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label>Password</label>
                            <input name='password' className="w-[100%] px-2 border outline-none shadow-none py-1 rounded" type="password" placeholder='Enter Your Password' />
                        </div>
                        <button className=" w-[100%] my-2 py-1 cursor-pointer bg-blue-700 text-white" >Sign Up</button>
                        <div className="flex flex-col sm:flex-row text-center gap-2 mt-2">
                            <p>Already Have Account?</p>
                            <Link to='/login'><button className="cursor-pointer">Login </button></Link>

                        </div>
                      
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Registration;