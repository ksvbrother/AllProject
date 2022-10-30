import React from "react";
import './Testimonial.css'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination'

import 'swiper/css'
import { Pagination } from "swiper";
import profilePic1 from '../../img/profile1.jpg'
import profilePic2 from '../../img/profile2.jpg'
import profilePic3 from '../../img/profile3.jpg'
import profilePic4 from '../../img/profile4.jpg'

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review: 'Over the last two decades, Elon Musk has become a household name for creating and leading some of the most successful companies in the world, including Tesla, SpaceX and PayPal. He now has his sights set on Twitter, and plans to turn the already successful social media platform into a tech juggernaut, growing user count by 200% over the next three years and bringing in five times more revenue by 2028. ',
        },
        {
            img: profilePic2,
            review: 'Over the last two decades, Elon Musk has become a household name for creating and leading some of the most successful companies in the world, including Tesla, SpaceX and PayPal. He now has his sights set on Twitter, and plans to turn the already successful social media platform into a tech juggernaut, growing user count by 200% over the next three years and bringing in five times more revenue by 2028.',
        },
        {
            img: profilePic3,
            review: 'Over the last two decades, Elon Musk has become a household name for creating and leading some of the most successful companies in the world, including Tesla, SpaceX and PayPal. He now has his sights set on Twitter, and plans to turn the already successful social media platform into a tech juggernaut, growing user count by 200% over the next three years and bringing in five times more revenue by 2028.',
        },
        {
            img: profilePic4,
            review: 'Over the last two decades, Elon Musk has become a household name for creating and leading some of the most successful companies in the world, including Tesla, SpaceX and PayPal. He now has his sights set on Twitter, and plans to turn the already successful social media platform into a tech juggernaut, growing user count by 200% over the next three years and bringing in five times more revenue by 2028.',
        }
    ]
    return (
        <div className="t-wrapper" id="Testimonnial">
            <div className="t-heady">
                <span>Client Always Get</span>
                <span>Extensional Work</span>
                <span>For me</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple)' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}>
                </div>
            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((clients, index) => {

                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial ">
                                <img src={clients.img} alt="" />
                                <span>{clients.review}</span>
                            </div>

                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </div>


    )

}

export default Testimonial;