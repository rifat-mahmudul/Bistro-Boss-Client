/* eslint-disable react/prop-types */
import { useContext } from "react"
import { authContext } from "../Provider/AuthProvider"
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({children}) => {

    const {loading, user} = useContext(authContext);
    const location = useLocation();

    if(loading){
        return <p>Loading......</p>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={location.pathname} replace={true} ></Navigate>
}

export default PrivateRoutes
