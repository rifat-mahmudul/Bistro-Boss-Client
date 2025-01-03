import Title from "../Shared/Title"
import Item from "../Shared/Item";
import useMenu from "../../Hooks/useMenu";
import { Link } from "react-router";

const Menu = () => {

    const [menu] = useMenu();
    const popularMenu = menu.filter(i => i.category === "popular");

    return (
        <section>
            <div>
                <Title title="Check it out" heading="FROM OUR MENU"></Title>
            </div>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8 ">
                {
                    popularMenu.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <Link to="/our-menu">
                    <button className="border-b-2 border-black rounded-lg">View Full  Menu</button>
                </Link>
            </div>
        </section>
    )
}

export default Menu
