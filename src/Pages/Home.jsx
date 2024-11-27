import Banner from "../components/Banner"
import Bistro from "../components/Bistro"
import Menu from "../components/Menu"
import Order from "../components/Order"
import Recommends from "../components/Recommends"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Order></Order>
            <Bistro></Bistro>
            <Menu></Menu>
            <Recommends></Recommends>
        </div>
    )
}

export default Home
