import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg';
import img2 from '../../assets/home/slide2.jpg';
import img3 from '../../assets/home/slide3.jpg';
import img4 from '../../assets/home/slide4.jpg';
import img5 from '../../assets/home/slide5.jpg';
import Title from '../Shared/Title';


const Order = () => {
    return (
        <section className='pb-16 pt-4 max-w-[90%] xl:max-w-[1000px] mx-auto'>

            <div>
                <Title title='From 11:00am to 10:00pm' heading='ORDER ONLINE'></Title>
            </div>

            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={true}
            pagination={{
            clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className=""
        >
            <SwiperSlide>
                <img className='h-[300px] sm:w-[300px] rounded-lg' src={img1} alt="" />
                <p className='-mt-10 text-center text-3xl text-white'>Salads</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] sm:w-[300px] rounded-lg' src={img2} alt="" />
                <p className='-mt-10 text-center text-3xl text-white'>Soups</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] sm:w-[300px] rounded-lg' src={img3} alt="" />
                <p className='-mt-10 text-center text-3xl text-white'>Salads</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] sm:w-[300px] rounded-lg' src={img4} alt="" />
                <p className='-mt-10 text-center text-3xl text-white'>pizzas</p>
            </SwiperSlide>
            <SwiperSlide>
                <img className='h-[300px] sm:w-[300px] rounded-lg' src={img5} alt="" />
                <p className='-mt-10 text-center text-3xl text-white'>desserts</p>
            </SwiperSlide>
        </Swiper>
        </section>
    )
}

export default Order
