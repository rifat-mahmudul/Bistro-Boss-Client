import { Helmet } from "react-helmet-async"
import Title from "../../Shared/Title"
import noData from '../../../assets/NODATA.png'
import useAxiosPublic from "../../../Hooks/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"
import { MdDeleteForever } from "react-icons/md"
import { FaUsers } from "react-icons/fa"

const AllUsers = () => {

    const axiosSecure = useAxiosPublic();
    const {refetch, data : user = []} = useQuery({
        queryKey : ['user'],
        queryFn : async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    return (
        <section className="mb-16 w-full">
            <Helmet>
                <title>All Users - Bistro Boss</title>
            </Helmet>
            <div className="mx-auto">
                <Title title="My Cart" heading="WANNA ADD MORE?"></Title>

                <div className="w-[90%] mx-auto bg-white p-4 sm:p-8 rounded-lg">
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center text-xl font-semibold uppercase">
                        <h1>Total Users: {user.length}</h1>
                    </div>

                    <div className="w-full mt-5 rounded-t-xl overflow-scroll sm:overflow-hidden">

                        <table className="w-full">

                            <thead>
                                <tr className="h-16 bg-[#d1a054] text-white text-center">
                                    <th></th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>ROLL</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            {   user.length === 0 ?
                                    <>
                                        <div className="flex flex-col justify-center items-center mx-auto mt-5">
                                            <img src={noData} className="h-[150px]" alt="" />
                                            <p className="font-bold text-3xl mt-4 text-red-500">NO CART ADDED</p>
                                        </div>
                                    </>
                                    :
                                    user.map((item, index) => <tbody key={item._id}>
                                        <tr className="text-center h-16 border-b-2 text-gray-500 font-semibold">
                                        <td>{index + 1}</td>
                                        <td>{item?.displayName}</td>
                                        <td>{item?.email}</td>
                                        <td
                                        className="text-green-500 text-2xl"
                                        >
                                            <FaUsers
                                            className="mx-auto cursor-pointer"
                                            ></FaUsers>
                                        </td>
                                        <td className="text-red-500 text-3xl">
                                            <MdDeleteForever 
                                            className="mx-auto cursor-pointer" />
                                        </td>
                                    </tr>
                                    </tbody>)
                                }

                        </table>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default AllUsers
