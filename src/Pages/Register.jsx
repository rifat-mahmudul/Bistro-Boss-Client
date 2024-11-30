import { Link, useNavigate } from 'react-router'
import banner from '../assets/Authentication/authentication.png'
import loginImg from '../assets/Authentication/authentication2.png'
import Swal from 'sweetalert2'
import { FaEyeSlash } from "react-icons/fa"
import { IoMdEye } from "react-icons/io"
import { useContext, useState } from 'react'
import { authContext } from '../Provider/AuthProvider'

const Register = () => {

    const {createUser, logOut, profileUpdate} = useContext(authContext);

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prev) => !prev);
    };

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    
        if (!name || !email || !password || !confirmPassword) {
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
    
        if (password !== confirmPassword) {
            Swal.fire({ icon: "error", title: "Oops...", text: "Passwords do not match!" });
            return;
        }
    

        //register method
        createUser(email, password)
        .then(() => {
            profileUpdate(name)
            .then()
            .catch(error => {
                console.log(`error from updateProfile ${error}`)
            });
            logOut()
            .then()
            .catch(error => {
                console.log(`error from logOut ${error}`)
            })
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/login')
        })
        .catch(error => {
            console.log(`error from register ${error}`);
            Swal.fire({ icon: "error", title: "Oops...", text: `${error.message}` });
        })

        form.reset();
    };
    

    return (
        <section className='sm:h-[100vh] py-4 sm:py-0 flex sm:flex-row flex-col justify-center items-center' style={{backgroundImage: `url(${banner})`}}>
            
            <div className='max-w-[90%] xl:max-w-[800px] mx-auto sm:flex justify-between items-center'>

                <div className='sm:w-[45%]'>

                    <form onSubmit={handleRegister}>

                        <h1 className='font-Cinzel font-bold text-4xl mb-5 text-center'>Register</h1>

                        <div className='mt-4'>
                            <h1 className='mb-2 font-semibold'>Name</h1>
                            <input className='w-full p-3 rounded-md' type="text" name="name" id="name" placeholder='Enter Your Name' />
                        </div>

                        <div className='mt-4'>
                            <h1 className='mb-2 font-semibold'>Email</h1>
                            <input className='w-full p-3 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </div>

                        <div className="mt-4 relative">
                            <h1 className="mb-2 font-semibold">Password</h1>
                            <input
                                className="w-full p-3 rounded-md"
                                type={isPasswordVisible ? "text" : "password"}
                                name="password"
                                id="password"
                                placeholder="Enter Your Password"
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
                            <h1 className='mb-2 font-semibold'>Confirm Password</h1>
                            <input className='w-full p-3 rounded-md' type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' />
                        </div>

                        <div>
                            <button className='py-3 w-full bg-yellow-600 text-center font-bold text-white rounded-lg mt-6'>Register</button>
                        </div>

                        <p className='mt-4 text-yellow-600'>Already have an account? Please <Link className='text-blue-600' to="/login">login</Link></p>
                    </form>

                </div>

                <div>
                    <img src={loginImg} className='h-[300px]' alt="" />
                </div>

            </div>

        </section>
    )
}

export default Register
