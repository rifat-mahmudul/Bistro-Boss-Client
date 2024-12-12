import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/menu')
        .then(res => {
            setMenu(res.data)
            setLoading(true);
        })
    }, [axiosPublic])

    return [menu, loading]
}

export default useMenu
