import { Outlet } from "react-router"
import Sidebar from "../components/Dashobard/Sidebar"
import Footer from "../components/Home/Footer"

const Dashboard = () => {
    return (
        <section>
            <div className="xl:max-w-[1200px] mx-auto lg:mt-8 lg:flex gap-16">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </section>
    )
}

export default Dashboard
