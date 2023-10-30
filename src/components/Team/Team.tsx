'use client'
import './Team.scss';

import { Swiper, SwiperSlide, useSwiperSlide, useSwiper } from 'swiper/react';
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/effect-coverflow';
import { capture_it } from '@/fonts';
import { useState, useEffect } from 'react';

export default function Team() {
    const team = ['vitia', 'vlad', 'ruslan', 'anuta', 'katya'];

    const [curr, setCurr] = useState(1);

    return (
        <div className="team-section w-full py-10">
            <h2 className={`${capture_it.className} relative z-10 heading`}>команда організаторів</h2>
            <Swiper
                className=' mx-auto max-w-5xl w-full relative z-10'
                autoHeight={true}
                slidesPerView={3}
                resizeObserver={true}
                centerInsufficientSlides={true}
                initialSlide={1}
                autoplay={false}
                mousewheel={false}
                keyboard={{
                    enabled: true,
                }}
                grabCursor={true}
                speed={500}
                loop={true}
                centeredSlides={true}
                watchSlidesProgress={true}
                spaceBetween={-10}
                modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 5,
                        spaceBetween: -20
                    }
                }}
            >
                <SwiperSlide className="bec5__swiper-slide swiper-slide swiper-slide_vitia bg-none">
                    <img src="/team/vitia.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide swiper-slide_vlad">
                    <img src="/team/vlad.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide swiper-slide_ruslan">
                    <img src="/team/ruslan.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide swiper-slide_anuta">
                    <img src="/team/anuta.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide swiper-slide_katya">
                    <img src="/team/katya.png" alt="" />
                </SwiperSlide>
            </Swiper>


            <div className="bec5__memberblock">
                {/* <div className="bec5__name">{team[(curr - 1) % team.length]}</div> */}
                <div className="bec5__work"></div>
            </div>
        </div >
    )
}
