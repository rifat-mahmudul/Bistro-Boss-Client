import MenuBanner from "../components/Shared/MenuBanner"
import banner1 from "../assets/menu/banner3.jpg"
import banner2 from "../assets/menu/dessert-bg.jpeg"
import banner3 from "../assets/menu/pizza-bg.jpg"
import banner4 from "../assets/menu/salad-bg.jpg"
import banner5 from "../assets/menu/soup-bg.jpg"
import useMenu from "../Hooks/useMenu"
import Title from "../components/Shared/Title";
import Item from "../components/Shared/Item";
import { Link } from "react-router"
import { Helmet } from "react-helmet-async"

const OurMenu = () => {

    const [menu] = useMenu();
    const todayOffer = menu.filter(i => i.category === "offered");
    const desserts = menu.filter(i => i.category === "dessert");
    const pizza = menu.filter(i => i.category === "pizza");
    const salads = menu.filter(i => i.category === "salad");
    const soups = menu.filter(i => i.category === "soup");

    return (
        <div>

            <Helmet>
                <title>Our Menu - Bistro Boss</title>
            </Helmet>
            <MenuBanner img={banner1} heading='OUR MENU' title='Would you like to try a dish?' height={`h-[500px]`}></MenuBanner>

            {/* todayOffer Section */}
            <Title title='Do not miss' heading="TODAY'S OFFER"></Title>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8">
                {
                    todayOffer.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to='/our-shop'>
                    <button className="border-b-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

            {/* Dessert Section */}
            <MenuBanner img={banner2} heading='DESSERTS' title='Would you like to try a dish?' height={`h-[400px]`}></MenuBanner>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8">
                {
                    desserts.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to='/our-shop'>
                    <button className="border-b-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

            {/* Pizza Section */}
            <MenuBanner img={banner3} heading='PIZZA' title='Would you like to try a dish?' height={`h-[400px]`}></MenuBanner>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8">
                {
                    pizza.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to='/our-shop'>
                    <button className="border-b-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

            {/* SALADS Section */}
            <MenuBanner img={banner4} heading='SALADS' title='Would you like to try a dish?' height={`h-[400px]`}></MenuBanner>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8">
                {
                    salads.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to='/our-shop'>
                    <button className="border-b-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

            {/* SOUPS Section */}
            <MenuBanner img={banner5} heading='SOUPS' title='Would you like to try a dish?' height={`h-[400px]`}></MenuBanner>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8">
                {
                    soups.slice(0, 6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to='/our-shop'>
                    <button className="border-b-2 border-black rounded-lg">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>

        </div>
    )
}

export default OurMenu
