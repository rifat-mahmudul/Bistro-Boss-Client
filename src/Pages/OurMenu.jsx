import MenuBanner from "../components/Shared/MenuBanner"
import banner1 from "../assets/menu/banner3.jpg"

const OurMenu = () => {
    return (
        <div>
            <MenuBanner img={banner1} heading='OUR MENU' title='Would you like to try a dish?' height={`h-[500px]`}></MenuBanner>
        </div>
    )
}

export default OurMenu
