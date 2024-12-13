import { useState } from "react"
import { RiMenu3Fill } from "react-icons/ri"
import { RxCross2 } from "react-icons/rx"
import { Link, NavLink, useLocation, useNavigate } from "react-router"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import { TfiShoppingCart } from "react-icons/tfi";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";

const Nav = () => {


    AOS.init();
    const [open, setOpen] = useState(false);
    const {logOut, user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state || '/';
    const [cart] = useCart();

    const handleLogOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                .then(() => {
                    Swal.fire({
                        icon: "success",
                        title: "Successfully Log Out",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(from)
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: `${error.message}`,
                        });
                        return;
                    })
                })
            }
        });
    }



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
        to="/dashboard">
            DASHBOARD
        </NavLink>

        <Link 
        onClick={() => setOpen(false)}
        >
            <div className="flex relative">
                <div>
                    <TfiShoppingCart className="mx-auto" size={25}></TfiShoppingCart>
                </div>

                <div className="flex bg-red-500 rounded-full h-6 w-6 absolute -right-2 -top-2">
                    <div className="flex items-center justify-center h-full w-full">
                        {cart.length}
                    </div>
                </div>
            </div>
        </Link>

        {
            user ? 
            <button 
            onClick={handleLogOut} 
            className="py-2 px-5 rounded-lg bg-yellow-600 font-bold text-white">
                Log Out
            </button>
            :

            <NavLink 
            onClick={() => setOpen(false)} 
            className={({isActive}) => isActive ? `text-yellow-500 font-bold` : `font-semibold hover:text-yellow-500 transition`} 
            to="/login">
                LOG IN
            </NavLink>
        }

    
    </>

    return (
        <header className=" fixed z-10 w-full bg-[#00000094]">
            <div className="flex justify-between items-center py-3 max-w-[90%] xl:max-w-[1200px] mx-auto text-white px-4 backdrop-blur-lg">
                <div>
                    <Link to="/">
                        <h1 className="flex flex-col font-Cinzel text-center font-bold">
                            <span className="text-xl">BISTROBOSS</span>
                            <span className="tracking-widest">Restaurant</span>
                        </h1>
                    </Link>
                </div>

                <div>
                    <nav>
                        <ul className="lg:flex items-center hidden gap-5">
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
                            className="flex flex-col gap-5 absolute -top-4 py-5 px-20 right-2 bg-[#d1a054] text-center border border-gray-200 rounded-xl transition delay-75">
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
