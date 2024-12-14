import { Helmet } from "react-helmet-async"
import Title from "../../Shared/Title"
import noData from '../../../assets/NODATA.png'
import { useQuery } from "@tanstack/react-query"
import { MdDeleteForever } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { RiAdminFill } from "react-icons/ri";
import Swal from "sweetalert2"
import useAxiosSecure from "../../../Hooks/useAxiosSecure"

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    const {refetch, data : user = []} = useQuery({
        queryKey : ['user'],
        queryFn : async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    });

    const handleDelete = id => {
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/users/${id}`)
                        .then(res => {
                            if(res.data.deletedCount > 0){
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "User has been deleted.",
                                    icon: "success"
                                });
                                refetch();
                            }
                        })
                    }
        });
    }

    const handleAdmin = (id, userName) => {
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Make Admin!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.patch(`/user/admin/${id}`, { role: "admin" })
                        .then(res => {
                            if(res.data.modifiedCount > 0){
                                Swal.fire({
                                    title: "Success!",
                                    text: `${userName} is a admin now 🙂`,
                                    icon: "success"
                                });
                                refetch();
                            }
                        })
                    }
        });
    }

    const removeAdmin = (id, userName) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Remove Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${id}`, { role: "user" })
                .then(res => {
                    if(res.data.modifiedCount > 0){
                        Swal.fire({
                            title: "Success!",
                            text: `${userName} is a user now 🙂`,
                            icon: "success"
                        });
                        refetch();
                    }
                })
            }
        });
    }

    return (
        <section className="mb-16 w-full">
            <Helmet>
                <title>All Users - Bistro Boss</title>
            </Helmet>
            <div className="mx-auto">
                <Title title="How Many??" heading="MANAGE ALL USERS"></Title>

                <div className="w-[90%] mx-auto bg-white p-4 sm:p-8 rounded-lg">
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center text-xl font-semibold uppercase">
                        <h1>Total Users : {user.length}</h1>
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
                                            <p className="font-bold text-3xl mt-4 text-red-500">NO USER FOUND</p>
                                        </div>
                                    </>
                                    :
                                    user.map((item, index) => <tbody key={item._id}>
                                        <tr className="text-center h-16 border-b-2 text-gray-500 font-semibold">
                                        <td>{index + 1}</td>
                                        <td>{item?.userName}</td>
                                        <td>{item?.email}</td>
                                        <td
                                        className="text-green-700 text-2xl"
                                        >
                                            {item.role === 'admin' 
                                            ? 
                                            <button 
                                            onClick={() => removeAdmin(item._id, item?.userName)}
                                            className="bg-orange-200 text-orange-700 p-2 rounded-md">
                                                <RiAdminFill className="mx-auto cursor-pointer" />
                                            </button>
                                            : 
                                            <button 
                                            onClick={() => handleAdmin(item._id, item?.userName)}
                                            className="bg-green-200 p-2 rounded-md">
                                                <FaUsers
                                                className="mx-auto cursor-pointer"
                                                ></FaUsers>
                                            </button>}
                                        </td>
                                        <td className="text-red-700 text-2xl">
                                            <button 
                                            onClick={() => handleDelete(item._id)}
                                            className="bg-red-200 p-2 rounded-md">
                                                <MdDeleteForever 
                                                className="mx-auto cursor-pointer" />
                                            </button>
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
