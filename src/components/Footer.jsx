import { BsInstagram } from "react-icons/bs"
import { FaFacebook, FaTwitter } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="w-full">
                <div className="sm:flex w-full">
                    <div className="bg-slate-700 sm:w-[50%] text-center text-white p-16">
                        <h1 className="text-2xl mb-4">CONTACT US</h1>
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p>+88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>

                    <div className="bg-gray-900 sm:w-[50%] text-white text-center p-16">
                        <h1 className="text-2xl mb-4">Follow US</h1>
                        <p>Join us on social media</p>
                        <div className="mx-auto text-center text-2xl flex flex-col items-center justify-center mt-4">
                            <div className="flex gap-8">
                                <a href=""><FaFacebook /></a>
                                <a href=""><BsInstagram /></a>
                                <a href=""><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white py-3">
                    <p className="text-center">Copyright © CulinaryCloud. All rights reserved.</p>
                </div>
        </footer>
    )
}

export default Footer
