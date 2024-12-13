import { FaBookMedical, FaHome, FaMoneyBill, FaRegCalendarAlt, FaShoppingCart } from "react-icons/fa"
import { MdOutlineRateReview } from "react-icons/md"
import { AiOutlineMenu } from "react-icons/ai";
import { FaBagShopping } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { Link, NavLink } from "react-router"
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { RiMenu3Fill } from "react-icons/ri";

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const sideBar = <>
        <li className="font-semibold">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/user-home' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`} 
                >
                    <FaHome />
                    <h3>User Home</h3>
                </NavLink>
            </li>
            
            <li className="font-semibold">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/user-home' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`}
                >
                    <FaRegCalendarAlt />
                    <h3>reservation</h3>
                </NavLink>
            </li>
            
            <li className="font-semibold">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/user-home' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`}
                >
                    <FaMoneyBill />
                    <h3>reservation</h3>
                </NavLink>
            </li>
            
            <li className="font-semibold">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/my-cart' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`}
                >
                    <FaShoppingCart />
                    <h3>my cart</h3>
                </NavLink>
            </li>
            
            <li className="font-semibold">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/user-home' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`}
                >
                    <MdOutlineRateReview />
                    <h3>add review</h3>
                </NavLink>
            </li>
            
            <li className="font-semibold border-b-2 pb-8">
                <NavLink 
                onClick={() => setOpen(false)} 
                to='/Dashboard/user-home' 
                className={({isActive}) => isActive ? `text-white font-bold flex items-center gap-2` : `font-semibold hover:text-white transition flex items-center gap-2`}
                >
                    <FaBookMedical /> 
                    <h3>my booking</h3>
                </NavLink>
            </li>
            
            <li className="flex items-center gap-2 font-semibold pt-6 hover:text-white">
                <FaHome />
                <NavLink onClick={() => setOpen(false)}  to="/">Home</NavLink>
            </li>

            <li className="flex items-center gap-2 font-semibold hover:text-white">
                <AiOutlineMenu />
                <NavLink onClick={() => setOpen(false)}  to="/our-menu">Menu</NavLink>
            </li>

            <li className="flex items-center gap-2 font-semibold hover:text-white">
                <FaBagShopping />
                <NavLink onClick={() => setOpen(false)}  to="/our-shop">Shop</NavLink>
            </li>

            <li className="flex items-center gap-2 font-semibold hover:text-white">
                <IoMdMailUnread />
                <NavLink onClick={() => setOpen(false)}  to='/contact-us'>Contact</NavLink>
            </li>
    </>

    return (
        <section className="bg-[#d1a054] lg:p-14 lg:rounded-lg lg:mb-16 mb-10">

            <div className="flex lg:block items-center justify-between max-w-[90%] xl:max-w-[1200px] mx-auto">
                <div>
                    <Link to="/">
                        <h1 className="flex flex-col font-Cinzel text-center font-bold mb-8">
                            <span className="text-xl">BISTROBOSS</span>
                            <span className="tracking-widest">Restaurant</span>
                        </h1>
                    </Link>
                </div>
            
                <nav>
                    <ul className="uppercase lg:flex flex-col gap-3 text-center hidden">
                        {sideBar}
                    </ul>

                    <button onClick={() => setOpen(!open)} className="text-3xl font-bold lg:hidden">
                    {
                        open ? <RxCross2 /> : <RiMenu3Fill />
                    }
                    </button>

                    <div>
                    {
                            open ? 
                            <div>
                                <nav className="lg:hidden relative">
                                    <ul 
                                    className="flex flex-col gap-5 absolute top-1 py-5 px-20 right-0 bg-[#d1a054] text-center transition delay-75">
                                        {sideBar}
                                    </ul>
                                </nav>
                            </div> 
                            : ''
                        }
                    </div>
                </nav>

            </div>

        </section>
    )
}

export default Sidebar
