import Lottie from "lottie-react";
import { useContext, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginanimation from '../assets/Lottie/Animation - 1743854753202.json'
import AuthContext from "../Context/Authcontext";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Utility/Firebase";


const Login = () => {
    const { signInWithEmailandPassword, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    const emailRef = useRef();
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        form.reset()

        if (password.length < 6) {
            setErrorMessage('Password Must Be Greater Than Six ')

        }

        signInWithEmailandPassword(email, password)
            .then(res => {
                console.log(res.user)
                setSuccess(true)
             
            })
            .catch(error => {
                console.log(error.message);
            })
    }
    success && alert('Login Successfull')
    errorMessage && alert('Login Failed')
    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(res => {
                console.log(res.user)

                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })
    }


    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log('Please Provide Me an Email')
        }
        else {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Password reset link sent!. Check gmail')
                })
        }
    }
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 w-full">
                <Lottie animationData={loginanimation}></Lottie>
            </div>
            <div className="lg:w-1/2 w-full">
                <form onSubmit={handleLogin} className='shadow-2xl rounded-xl w-[90%] h-[400px] px-5 py-5 sm:max-w-96 m-auto  text-gray-800' >
                    <h1 className="text-2xl">Sign in</h1>
                    <p onClick={handleGoogleLogin} className=" border cursor-pointer flex items-center gap-5 justify-center mt-4 px-2 py-1"> <FcGoogle ></FcGoogle>Login with google</p>
                    <div className="flex flex-col gap-1 ">
                        <div className="flex mt-3 flex-col gap-2">
                            <label>Email</label>
                            <input ref={emailRef} name="email" className="w-[100%] px-2 border outline-none shadow-none rounded py-1" type="email" placeholder='Enter Your Email' />
                        </div>
                        <div className="flex flex-col gap-2 relative">
                            <label>Password</label>
                            <input name="password" className="w-[100%] px-2 border outline-none shadow-none py-1 rounded" type={showPassword ? 'text' : 'password'} placeholder='Enter Your Password' />
                            <div className='absolute top-10.5 right-2 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FiEye /> : <FiEyeOff />
                                }
                            </div>
                        </div>
                        <div className='items-center flex justify-between   '>
                            <div className='flex items-center gap-2'>
                                <input type="checkbox" />
                                <span className='text-sm remember-me ' >Remember Me</span>
                            </div>
                            <div>
                                <a onClick={handleForgetPassword} className='text-sm cursor-pointer '>Forgot Password</a>
                            </div>
                        </div>
                        <button className=" w-[100%] my-2 py-1 cursor-pointer bg-blue-700 text-white" >Sign in</button>
                        <div className="flex flex-col sm:flex-row text-center  gap-2 mt-2">
                            <p>Doesn't Have Account?</p>
                            <Link to='/registration'><button className="cursor-pointer">Registration Here</button></Link>
                        </div>

                    </div>

                </form>
            </div>

        </div>
    );
};

export default Login;