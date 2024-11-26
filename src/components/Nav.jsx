import { NavLink } from "react-router"

const Nav = () => {
    return (
        <header>
            <div className="max-w-[90%] xl:max-w-[1200px] mx-auto flex justify-between items-center py-5">
                <div>
                    <h1>
                        <span>BISTRO BOSS</span>
                        <span>Restaurant</span>
                    </h1>
                </div>

                <div>
                    <nav>
                        <ul className="flex gap-5">
                            <NavLink to='/'>HOME</NavLink>
                            <NavLink to="/contact-us">CONTACT US</NavLink>
                            <NavLink>DASHBOARD</NavLink>
                            <NavLink>OUR MENU</NavLink>
                            <NavLink>OUR SHOP</NavLink>
                            <NavLink>LOG OUT</NavLink>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Nav
