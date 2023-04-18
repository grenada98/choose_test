import React, {useRef} from 'react';
import { Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const imgArray = ['/img/slide1.jpg', '/img/slide2.jpg', '/img/slide3.jpg', '/img/slide4.jpg', '/img/slide5.jpg', '/img/slide1.jpg', '/img/slide2.jpg', '/img/slide3.jpg']
export const SwiperWrapper = () => {
    const swiperRef = useRef();

    return(
        <div className='wrapper-swiper'>
            <Swiper
            // install Swiper modules
            modules={[Navigation]}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="choose-swiper"
           slidesPerView={5}
           spaceBetween={43}
           centeredSlides={true}
           breakpoints={{
            200:{
                slidesPerView: 1,
                spaceBetween: 10
            },
            500:{
                slidesPerView: 3,
                spaceBetween: 20
            },
            900:{
                slidesPerView: 4
            },
            1200:{
                slidesPerView: 5,
                spaceBetween: 43
            }
           }}
        >
            {
                imgArray.map((item, index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='swiper__img-wrapper'>
                                <img src={process.env.PUBLIC_URL + item} className='swiper__img' alt="img"/>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
            <button className="swiper-prev " onClick={() => swiperRef.current?.slidePrev()}></button>
            <button className="swiper-next" onClick={() => swiperRef.current?.slideNext()}></button>
        </div>
    )
}