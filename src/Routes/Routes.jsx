import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";
import OurMenu from "../Pages/OurMenu";
import OurShop from "../Pages/OurShop";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import Dashboard from "../Pages/Dashboard";
import MyCart from "../components/Dashobard/DasContainer/MyCart";
import PrivateRoutes from "./PrivateRoutes";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
                <Route path="/our-menu" element={<OurMenu></OurMenu>}></Route>
                <Route path="/our-shop" element={<OurShop></OurShop>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Route>

            <Route path="/dashboard" element={<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>}>
                <Route path="/dashboard/my-cart" element={<MyCart></MyCart>}></Route>
            </Route>

            <Route path="*" element={<Error></Error>}></Route>
        </Routes>
    );
};

export default AppRoutes;
