import React from 'react'
import { VscSettings } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import PROPERTY from '../constant/Residency.json'
import Item from './Item'


function Properties() {
    return (
        <section className=' container'>
            <div className=' container bg-gray-700/5 py-16 xl:py-28 rounded-3xl p-3'>
                <span className=' font-medium'>Your Future Home Awaits!</span>
                <h2 className=' text-2xl'>Find your Zinx here</h2>
                <div className=' flex justify-between mt-8 mb-6'>
                    <h5><span className=' font-semibold'>Showing 1-9</span> out of 3k properties</h5>
                    <Link to={"/"} className=' bg-white text-3xl rounded-md h-10 w-10 p-2 border'><VscSettings /></Link>
                </div>
                {/* container */}
                <Swiper
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1124: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1300: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Autoplay]}
                    className=' h-[488px] md:h-[533px] xl:h-[422px] mt-5'>

                    {PROPERTY.map((property) => (
                        <SwiperSlide key={property.title} className=' rounded-3xl overflow-hidden relative'>
                            <Item property={property} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Properties
