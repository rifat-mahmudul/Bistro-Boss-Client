import { useEffect, useState } from "react"
import Title from "./Shared/Title"
import Item from "./Shared/Item";

const Menu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('./menu.json')
        .then(res => res.json())
        .then(data => {
            setMenu(data);
        })
    }, [])

    return (
        <section>
            <div>
                <Title title="Check it out" heading="FROM OUR MENU"></Title>
            </div>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-8 ">
                {
                    menu.filter(i => i.category === "popular").map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>

            <div className="text-center mt-5 mb-16">
                <button className="border-b-2 border-black p-1 rounded-lg">View Full  Menu</button>
            </div>
        </section>
    )
}

export default Menu
