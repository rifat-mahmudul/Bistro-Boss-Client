import Banner from "../components/Banner"
import Bistro from "../components/Bistro"
import Menu from "../components/Menu"
import MenuDisplay from "../components/MenuDisplay"
import Order from "../components/Order"
import Recommends from "../components/Recommends"
import Testimonial from "../components/Testimonial"

const Home = () => {
    return (
        <div>
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
