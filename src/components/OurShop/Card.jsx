/* eslint-disable react/prop-types */
import AOS from 'aos';
import 'aos/dist/aos.css';
import useAuth from '../../Hooks/useAuth';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/useCart';

const Card = ({item}) => {
    AOS.init();
    
    const {image, name, recipe, price} = item;
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.pathname || '/';
    const [,refetch] = useCart();

    const handleCart = () => {

        if(user && user?.email){
            const cartItem = {
                image : image,
                name : name,
                recipe : recipe,
                price : price,
                email : user?.email
            }
            axiosSecure.post('/carts', cartItem)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                        icon: "success",
                        title: `${name} added to the cart`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
        }

        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: from })
                }
            });
        }

    }

    return (
        <div data-aos="zoom-in-up" className="shadow-xl border border-gray-400 rounded-lg hover:scale-105 transition overflow-hidden">
            <div>
                <img className="rounded-t-lg hover:scale-105 transition-[0.5s] cursor-pointer" src={image} alt="" />
            </div>

            <div className="text-center bg-gray-300 px-3 pb-5 rounded-b-lg">
                <h3 className="pt-4 font-bold">{name}</h3>
                <p className="text-gray-500 my-2">{recipe}</p>
                <p className='font-semibold'>Price : {price} $</p>
                <button onClick={handleCart} className="text-yellow-600 border-b-2 border-yellow-600 rounded-lg p-2 mt-2 bg-[#80808038]">ADD TO CART</button>
            </div>
        </div>
    )
}

export default Card
