/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router";
import FadeLoader from "react-spinners/FadeLoader";

const PrivateRoutes = ({children}) => {

    const {loading, user} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center items-center h-[100vh] text-yellow-600">
            <FadeLoader color="#ca8a04" />
        </div>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={location.pathname} replace={true} ></Navigate>
}

export default PrivateRoutes
