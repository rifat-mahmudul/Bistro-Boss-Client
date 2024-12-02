import { Link, useNavigate } from 'react-router'
import banner from '../assets/Authentication/authentication.png'
import loginImg from '../assets/Authentication/authentication2.png'
import { FcGoogle } from "react-icons/fc";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { authContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEyeSlash } from "react-icons/fa"
import { IoMdEye } from "react-icons/io"
import { Helmet } from 'react-helmet-async';


const Login = () => {

    const {logIn} = useContext(authContext);
    const {signInWithGoogle} = useContext(authContext);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const hanldeLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;
        const captcha = form.captcha.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

        if (!email || !password ) {
            Swal.fire({ icon: "error", title: "Oops...", text: "All fields are required!" });
            return;
        }
    
        if (!emailRegex.test(email)) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Invalid email format!" });
            return;
        }
    
        if (password.length < 6) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Password should be at least 6 characters!" });
            return;
        }

        if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must include at least one uppercase letter!",
            });
            return;
        }
    
        if (!/[a-z]/.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must include at least one lowercase letter!",
            });
            return;
        }

        if (!specialCharRegex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must include at least one special character!",
            });
            return;
        }
    
        if (captcha.length === 0) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Please Enter Captcha!" });
            return;
        }
    
        if (!validateCaptcha(captcha)) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Captcha Not Matched!" });
            return;
        }

        logIn(email, password)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Successfully Log In",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        })
        .catch(error => {
            Swal.fire({ icon: "error", title: "Oops...", text: `${error.message}` });
        })
    }

    const handleGoogleLogIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            Swal.fire({ icon: "error", title: "Oops...", text: `${error.message}` });
        })
    }

    return (
        <section style={{backgroundImage: `url(${banner})`}}>

            <Helmet>
                <title>Login - Bistro Boss</title>
            </Helmet>
            
            <div className='max-w-[90%] xl:max-w-[800px] mx-auto sm:flex justify-between items-center py-16'>
                
                <div>
                    <img src={loginImg} className='h-[300px]' alt="" />
                </div>

                <div className='sm:w-[45%]'>

                    <form onSubmit={hanldeLogIn}>

                        <h1 className='font-Cinzel font-bold text-4xl mb-5 text-center'>Login</h1>

                        <div className='mt-4 sm:mt-0'>
                            <h1 className='mb-2 font-semibold'>Email</h1>
                            <input className='w-full p-3 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </div>

                        <div className='mt-4 relative'>
                            <h1 className='mb-2 font-semibold'>Password</h1>
                            <input
                                className='w-full p-3 rounded-md pr-10'
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder='Enter Your Password'
                            />
                            <button
                                className="absolute top-[70%] right-3 transform -translate-y-1/2 text-gray-600"
                                onClick={togglePasswordVisibility}
                                type="button"
                            >
                                {isPasswordVisible ? <IoMdEye /> : <FaEyeSlash />}
                            </button>
                        </div>


                        <div className='mt-4'>
                            <LoadCanvasTemplate />
                        </div>

                        
                        <div className='mt-4'>
                            <input className='w-full p-3 rounded-md' type="text" name="captcha" id="captcha" placeholder='Type Here' />
                        </div>

                        <div>
                            <button className='py-3 w-full bg-yellow-600 text-center font-bold text-white rounded-lg mt-6'>Log In</button>
                        </div>

                        <p className='mt-4 text-yellow-600'>New here? Please <Link className='text-blue-600' to="/register">Register</Link></p>

                    </form>

                    <p className='text-center mt-5 mb-5 text-gray-500'>Or Log In With</p>

                    <button onClick={handleGoogleLogIn} className='flex justify-center gap-2 items-center text-center w-full py-3 border border-yellow-600 rounded-lg'><FcGoogle /> <p>Log In With Google</p></button>
                </div>

            </div>

        </section>
    )
}

export default Login
