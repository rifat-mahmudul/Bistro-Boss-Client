import { Helmet } from "react-helmet-async"
import Banner from "../components/Home/Banner"
import Bistro from "../components/Home/Bistro"
import Menu from "../components/Home/Menu"
import MenuDisplay from "../components/Home/MenuDisplay"
import Order from "../components/Home/Order"
import Recommends from "../components/Home/Recommends"
import Testimonial from "../components/Home/Testimonial"

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Bistro Boss</title>
            </Helmet>
            <Banner></Banner>
            <Order></Order>
            <Bistro></Bistro>
            <Menu></Menu>
            <Recommends></Recommends>
            <MenuDisplay></MenuDisplay>
            <Testimonial></Testimonial>
        </div>
    )
}

export default Home
