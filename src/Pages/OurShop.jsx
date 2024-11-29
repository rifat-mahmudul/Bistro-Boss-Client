import MenuBanner from "../components/Shared/MenuBanner"
import banner from '../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import Card from "../components/OurShop/Card";

const OurShop = () => {

    const [menu] = useMenu();
    const desserts = menu.filter(i => i.category === "dessert");
    const pizza = menu.filter(i => i.category === "pizza");
    const salads = menu.filter(i => i.category === "salad");
    const soups = menu.filter(i => i.category === "soup");
    const drinks = menu.filter(i => i.category === "drinks");

    return (
        <section>
            
            <div>
                <MenuBanner title='OUR SHOP' heading='Would you like to try a dish?' img={banner} height={`h-[500px]`}></MenuBanner>
            </div>

            <Tabs className=' mb-16 max-w-[90%] xl:max-w-[1200px] mx-auto'>
                <TabList className="font-semibold border-b border-gray-400 text-center">
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16 mt-5">

                        {
                            salads.map(item => <Card key={item._id} item={item}></Card>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16 mt-5">

                            {
                                pizza.map(item => <Card key={item._id} item={item}></Card>)
                            }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16 mt-5">

                        {
                            soups.map(item => <Card key={item._id} item={item}></Card>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16 mt-5">

                        {
                            desserts.map(item => <Card key={item._id} item={item}></Card>)
                        }

                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-8 mb-16 mt-5">

                        {
                            drinks.map(item => <Card key={item._id} item={item}></Card>)
                        }

                    </div>
                </TabPanel>
            </Tabs>

        </section>
    )
}

export default OurShop
