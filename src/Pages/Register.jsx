import { Link } from 'react-router'
import banner from '../assets/Authentication/authentication.png'
import loginImg from '../assets/Authentication/authentication2.png'

const Register = () => {
    return (
        <section style={{backgroundImage: `url(${banner})`}}>
            
            <div className='max-w-[90%] xl:max-w-[800px] mx-auto flex justify-between items-center py-16'>

                <div className='w-[45%]'>

                    <form action="">

                        <h1 className='font-Cinzel font-bold text-4xl mb-5 text-center'>Register</h1>

                        <div className='mt-4'>
                            <h1 className='mb-2 font-semibold'>Name</h1>
                            <input className='w-full p-3 rounded-md' type="text" name="name" id="name" placeholder='Enter Your Name' />
                        </div>

                        <div className='mt-4'>
                            <h1 className='mb-2 font-semibold'>Email</h1>
                            <input className='w-full p-3 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </div>

                        <div className='mt-4'>
                            <h1 className='mb-2 font-semibold'>Password</h1>
                            <input className='w-full p-3 rounded-md' type="password" name="password" id="password" placeholder='Enter Your Password' />
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
