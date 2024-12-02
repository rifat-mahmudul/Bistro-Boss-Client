import banner from '../assets/contact/banner.jpg'
import MenuBanner from '../components/Shared/MenuBanner'
import Title from '../components/Shared/Title'
import { MdPhoneInTalk } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {
    return (
        <section>

            <Helmet>
                <title>Contact Us - Bistro Boss</title>
            </Helmet>

            <MenuBanner img={banner} heading='CONTACT US' title='Would you like to try a dish?' height={`h-[500px]`}></MenuBanner>

            {/* location section */}
            <Title title="Visit Us" heading="OUR LOCATION"></Title>

            <div className='max-w-[90%] xl:max-w-[900px] mx-auto sm:flex justify-between items-center mb-16'>

                <div className='border border-gray-300'>
                    <div className='bg-yellow-600 py-2 flex justify-center text-white text-2xl'>
                        <MdPhoneInTalk/>
                    </div>

                    <div className='px-5 pb-5'>
                        <div className='bg-gray-300 text-center p-5'>
                            <h1 className='font-semibold mb-2'>Phone</h1>
                            <p>+38 (012) 34 56 789</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 mt-5 sm:mt-0'>
                    <div className='bg-yellow-600 py-2 flex justify-center text-white text-2xl'>
                        <ImLocation2 />
                    </div>

                    <div className='px-5 pb-5'>
                        <div className='bg-gray-300 text-center p-5'>
                            <h1 className='font-semibold mb-2'>Location</h1>
                            <p>Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className='border border-gray-300 mt-5 sm:mt-0'>
                    <div className='bg-yellow-600 py-2 flex justify-center text-white text-2xl'>
                        <BsFillClockFill />
                    </div>

                    <div className='px-5 pb-5'>
                        <div className='bg-gray-300 text-center p-5'>
                            <h1 className='font-semibold mb-2'>WORKING HOURS</h1>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                        </div>
                    </div>
                </div>

            </div>


            {/* contact form */}
            <Title title="Send Us a Message" heading="CONTACT FORM"></Title>

            <div className='max-w-[90%] xl:max-w-[900px] mx-auto bg-gray-300 p-8 rounded-lg mb-16'>

                <form>

                    <div className='sm:flex justify-between w-full'>

                        <div className='sm:w-[49%]'>
                            <h1 className='mb-2 font-semibold'>Name</h1>
                            <input className='w-full p-3 rounded-md' type="text" name="name" id="name" placeholder='Enter Your Name' />
                        </div>

                        <div className='sm:w-[49%] mt-4 sm:mt-0'>
                            <h1 className='mb-2 font-semibold'>Email</h1>
                            <input className='w-full p-3 rounded-md' type="email" name="email" id="email" placeholder='Enter Your Email' />
                        </div>

                    </div>

                    <div className='mt-4'>
                        <h1 className='mb-2 font-semibold'>Phone</h1>
                        <input className='w-full p-3 rounded-md' type="phone" name="phone" id="phone" placeholder='Enter Your Phone' />
                    </div>

                    <div className='mt-4'>
                        <h1 className='mb-2 font-semibold'>Message</h1>
                        <textarea className='w-full p-2 rounded-md h-28' name="message" id="message" placeholder='Write Your Message Here'></textarea>
                    </div>

                    <div className='text-center mt-8'>
                        <button className='bg-yellow-600 py-2 px-5 rounded-lg text-white font-semibold' type='submit'>Send Message </button>
                    </div>

                </form>

            </div>

        </section>
    )
}

export default ContactUs
