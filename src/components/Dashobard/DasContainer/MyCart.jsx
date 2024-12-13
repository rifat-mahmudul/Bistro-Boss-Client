import { Helmet } from "react-helmet-async"
import Title from "../../Shared/Title"
import useCart from "../../../Hooks/useCart";
import { MdDeleteForever } from "react-icons/md";

const MyCart = () => {

    const [cart] = useCart();
    
    const totalPrice = cart.reduce((total, item) => total + item.price , 0)

    return (
        <section className="mb-16 w-full">
            <Helmet>
                <title>My Cart - Bistro Boss</title>
            </Helmet>
            <div className="mx-auto">
                <Title title="My Cart" heading="WANNA ADD MORE?"></Title>

                <div className="w-[90%] mx-auto bg-white p-4 sm:p-8">
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-between items-center text-xl font-semibold uppercase">
                        <h1>Total orders: $ 0</h1>
                        <h1>total price: $ {totalPrice.toFixed(2)}</h1>
                        <button className="bg-[#d1a054] px-3 py-2 rounded-lg text-white">Pay</button>
                    </div>

                    <div className="w-full mt-5 rounded-t-xl overflow-hidden">

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

                            <tbody>
                                {
                                    cart.map((item, index) => <tr key={item._id} className="text-center h-16 border-b-2 text-gray-500 font-semibold">
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={item?.image} className="h-12 w-12 mx-auto rounded-md" alt="" />
                                        </td>
                                        <td>{item?.name}</td>
                                        <td>{item?.price}</td>
                                        <td className="text-red-500 text-2xl"><MdDeleteForever className="mx-auto cursor-pointer" /></td>
                                    </tr>)
                                }
                            </tbody>

                        </table>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default MyCart
