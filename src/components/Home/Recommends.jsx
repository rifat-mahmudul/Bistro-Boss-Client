import Title from "../Shared/Title"
import Recommend from "./Recommend";
import useMenu from "../../Hooks/useMenu";

const Recommends = () => {

    const [menu] = useMenu();
    const popularMenu = menu.filter(i => i.category === "popular");

    return (
        <section>
            <div>
                <Title title="Should Try" heading="CHEF RECOMMENDS"></Title>
            </div>

            <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16">
                {
                    popularMenu.map(recommend => <Recommend key={recommend._id} recommend={recommend}></Recommend>)
                }
            </div>
        </section>
    )
}

export default Recommends
