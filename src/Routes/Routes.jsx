import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ContactUs from "../Pages/ContactUs";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
