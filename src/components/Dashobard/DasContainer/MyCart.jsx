import { Helmet } from "react-helmet-async"
import Title from "../../Shared/Title"
import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import noData from '../../../assets/NODATA.png'

const MyCart = () => {

    const axiosSecure = useAxiosSecure();
    const [cart] = useCart();   
    const totalPrice = cart.reduce((total, item) => total + item.price , 0);

    const queryClient = useQueryClient();
    const deleteMutation = useMutation({
        mutationFn : async (id) => {
            const res = await axiosSecure.delete(`/carts/${id}`);
            return res.data;
        },
        onSuccess : () =>{
            queryClient.invalidateQueries(['carts'])
        }
    })

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
                deleteMutation.mutate(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your cart has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <section className="mb-16 w-full">
            <Helmet>
                <title>My Cart - Bistro Boss</title>
            </Helmet>
            <div className="mx-auto">
                <Title title="My Cart" heading="WANNA ADD MORE?"></Title>

                <div className="w-[90%] mx-auto bg-white p-4 sm:p-8 rounded-lg">
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center text-xl font-semibold uppercase">
                        <h1>Total orders: $ 0</h1>
                        <h1>total price: $ {totalPrice.toFixed(2)}</h1>
                        <button className="bg-[#d1a054] px-3 py-2 rounded-lg text-white">Pay</button>
                    </div>

                    <div className="w-full mt-5 rounded-t-xl overflow-scroll sm:overflow-hidden">

                        <table className="w-full">

                            <thead>
                                <tr className="h-16 bg-[#d1a054] text-white text-center">
                                    <th></th>
                                    <th>ITEM IMAGE</th>
                                    <th>ITEM NAME</th>
                                    <th>PRICE</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>

                            {   cart.length === 0 ?
                                    <>
                                        <div className="flex flex-col justify-center items-center mx-auto mt-5">
                                            <img src={noData} className="h-[150px]" alt="" />
                                            <p className="font-bold text-3xl mt-4 text-red-500">NO CART ADDED</p>
                                        </div>
                                    </>
                                    :
                                    cart.map((item, index) => <tbody key={item._id}>
                                        <tr className="text-center h-16 border-b-2 text-gray-500 font-semibold">
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item?.image} className="h-12 w-12 mx-auto rounded-md" alt="" />
                                        </td>
                                        <td>{item?.name}</td>
                                        <td>{item?.price}</td>
                                        <td className="text-red-700 text-3xl">
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

export default MyCart
