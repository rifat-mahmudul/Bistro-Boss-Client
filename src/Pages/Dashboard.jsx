import { Outlet } from "react-router"
import Sidebar from "../components/Dashobard/Sidebar"

const Dashboard = () => {
    return (
        <section>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </section>
    )
}

export default Dashboard
