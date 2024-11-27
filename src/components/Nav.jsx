import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import { NavLink } from "react-router"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    AOS.init();
    const [open, setOpen] = useState(false);


    const navItem = <>
    
        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} to='/'>HOME
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
        to="/contact-us">
            CONTACT US
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
        to="/dashboard">
            DASHBOARD
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
        to="/our-menu">
            OUR MENU
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
        to="/our-shop">
            OUR SHOP
        </NavLink>

        <NavLink 
        onClick={() => setOpen(false)} 
        className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
        to="/log-in">
            LOG IN
        </NavLink>
    
    </>

    return (
        <header className=" fixed z-10 w-full">
            <div className="flex justify-between items-center py-3 max-w-[90%] xl:max-w-[1200px] mx-auto bg-[#00000094] text-white px-4">
                <div>
                    <h1 className="flex flex-col font-Cinzel text-center font-bold">
                        <span className="text-xl">BISTROBOSS</span>
                        <span className="tracking-widest">Restaurant</span>
                    </h1>
                </div>

                <div>
                    <nav>
                        <ul className="lg:flex hidden gap-5">
                            {navItem}
                        </ul>
                    </nav>
                </div>

                <button onClick={() => setOpen(!open)} className="text-3xl font-bold lg:hidden">

                    {
                        open ? <RxCross2 /> : <RiMenu3Fill />
                    }
                    
                </button>

            </div>
                {
                    open ? 
                    <div>
                        <nav className="lg:hidden relative">
                            <ul 
                            data-aos="fade-left" 
                            className="flex flex-col gap-5 absolute -top-4 py-5 px-20 right-2 bg-gray-500 text-center border border-gray-200 rounded-xl transition delay-75">
                                {navItem}
                            </ul>
                        </nav>
                    </div> 
                    : ''
                }
        </header>
    )
}

export default Nav
