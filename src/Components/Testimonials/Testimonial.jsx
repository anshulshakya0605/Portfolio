import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import rew1 from '../../assets/rew1.jpg'
import rew2 from '../../assets/rew2.jpg'
import rew3 from '../../assets/rew3.jpg'
import rew4 from '../../assets/rew4.jpg'

function Testimonial() {

    const Testimonials = [
        {
        name: "Annu Sing",
        title:"CEO of Company",
        img:rew1,
        quote:"I highly recommend this to anyone looking for a game-changer in their field."
    },
        {
        name: "Aman Sing",
        title:"CEO of Company",
        img: rew2,
        quote:"I highly recommend this to anyone looking for a game-changer in their field."
    },
        {
        name: "Sachi Sing",
        title:"CEO of Company",
        img: rew3,
        quote:"I highly recommend this to anyone looking for a game-changer in their field."
    },
        {
        name: "Vinay Sing",
        title:"CEO of Company",
        img: rew4,
        quote:"I highly recommend this to anyone looking for a game-changer in their field."
    },
]

    return (
        <>
            <section className='py-12'>
                <div className="container mx-auto px-4">
                    <h2 className='text-4xl text-center text-yellow-500 font-bold mb-8'>What Our Clients Say</h2>

                    <Swiper 
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{clickable:true}}
                    navigation={true}
                    loop={true}
                    modules={[Pagination, Navigation]}
                    breakpoints={{
                        640:{
                            slidesPerView:1,
                        },
                        768: {
                            slidesPerView:2,
                        },
                        1024: {
                            slidesPerView:3,
                        }
                    }}
                    className='mySwiper'
                    >
                        {Testimonials.map((Testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-lg shadow-lg p-6 ">
                                    <img className='w-20 h-20 rounded-full border-4 border-red-400 mx-auto mb-4'
                                     src={Testimonial.img} alt={Testimonial.name} />
                                     <p className='text-gray-700 text-md font-semibold px-4 mb-4'>{Testimonial.quote}</p>
                                     <div className="text-center">
                                        <h2 className='text-gray-900 text-3xl mb-2 font-semibold'>{Testimonial.name}</h2>
                                        <p className='text-lg text-yellow-600 mb-4'>{Testimonial.title}</p>
                                     </div>
                                </div>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Testimonial
