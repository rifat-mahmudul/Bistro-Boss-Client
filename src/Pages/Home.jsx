import Banner from "../components/Banner"
import Bistro from "../components/Bistro"
import Menu from "../components/Menu"
import Order from "../components/Order"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <Bistro></Bistro>
            <Menu></Menu>
        </div>
    )
}

export default Home
