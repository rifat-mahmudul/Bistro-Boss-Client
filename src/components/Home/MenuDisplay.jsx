import '../compo.css'
import Title from '../Shared/Title'
import img from '../../assets/home/featured.jpg'

const MenuDisplay = () => {

    const heading = <>
        <p className='text-white'>FROM OUR MENU</p>
    </>

    return (
        <section className="sm:p-20 mb-16 menu">
            <div>
                <Title title='Check it out' heading={heading}></Title>
            </div>

            <div className='sm:flex gap-16 items-center text-white justify-between max-w-[90%] xl:max-w-[1000px] mx-auto'>
                <div>
                    <img className='h-[300px] rounded-lg' src={img} alt="" />
                </div>

                <div>
                    <h3 className='text-xl mt-5 sm:mt-0'>March 20, 2024</h3>
                    <h3 className='text-xl'>Where can I get some ?</h3>
                    <p className='max-w-lg my-3 text-gray-300'>In the digital age, restaurants are not just about food; they are about experiences, convenience, and connection. Bistro Boss, a dynamic restaurant website, epitomizes this modern approach, seamlessly blending technology with the art of gastronomy.</p>
                    <button className="border-b-2 border-white p-1 rounded-lg">Read More</button>
                </div>
            </div>
        </section>
    )
}

export default MenuDisplay
