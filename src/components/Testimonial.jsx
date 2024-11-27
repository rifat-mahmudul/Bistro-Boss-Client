import { useEffect, useState } from "react";
import Title from "./Shared/Title";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { SiComma } from "react-icons/si";

const Testimonial = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./reviews.json')
        .then(res => res.json())
        .then(data => {
            setItems(data);
            console.log(data)
        })
    }, [])

    return (
        <section className="mb-16">
            <div>
                <Title title='What Our Clients Say' heading='TESTIMONIALS'></Title>
            </div>

            <div className="max-w-[90%] xl:max-w-[1000px] mx-auto border border-red-500 py-16">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                
                {
                    items.map(item => 
                    <SwiperSlide key={item._id}>
                        <div className="flex flex-col justify-center items-center mb-5 text-4xl">
                            <h1 className="flex">
                                <SiComma />
                                <SiComma />
                            </h1>
                        </div>
                        <p className="text-center sm:max-w-3xl mx-auto">{item.details}</p>
                        <h3 className="text-center text-yellow-600 text-3xl font-bold mt-3">{item.name}</h3>
                    </SwiperSlide>
                )
                }

            </Swiper>
            </div>
        </section>
    )
}

export default Testimonial
