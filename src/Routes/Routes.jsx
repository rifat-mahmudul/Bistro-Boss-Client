import { Routes, Route } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />}>
                <Route path="/home" element={<Home></Home>}></Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
