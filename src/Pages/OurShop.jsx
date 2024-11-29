import MenuBanner from "../components/Shared/MenuBanner"
import banner from '../assets/shop/banner2.jpg';

const OurShop = () => {
    return (
        <section>
            
            <div>
                <MenuBanner title='OUR SHOP' heading='Would you like to try a dish?' img={banner} height={`h-[500px]`}></MenuBanner>
            </div>

        </section>
    )
}

export default OurShop
