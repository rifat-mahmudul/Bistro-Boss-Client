import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Recommend = ({recommend}) => {
    AOS.init();
    
    const {image, name, recipe} = recommend;

    return (
        <div data-aos="zoom-in-up" className="shadow-xl border border-gray-400 rounded-lg hover:scale-105 transition">
            <div>
                <img className="rounded-t-lg" src={image} alt="" />
            </div>

            <div className="text-center bg-gray-300 px-3 pb-5 rounded-b-lg">
                <h3 className="pt-4 font-bold">{name}</h3>
                <p className="text-gray-500 my-2">{recipe}</p>
                <button className="text-yellow-600 border-b-2 border-yellow-600 rounded-lg p-2 mt-2 bg-[#80808038]">ADD TO CART</button>
            </div>
        </div>
    )
}

Recommend.propTypes = {
    recommend : PropTypes.object
}

export default Recommend
