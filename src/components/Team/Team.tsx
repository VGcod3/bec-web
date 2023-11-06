/* eslint-disable @next/next/no-img-element */
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
                className=' mx-auto max-w-5xl w-full relative z-10 h-[480px]'
                autoHeight={true}
                slidesPerView={3}
                resizeObserver={true}
                centerInsufficientSlides={true}
                initialSlide={5}
                autoplay={true}
                mousewheel={false}
                keyboard={{
                    enabled: true,
                }}
                grabCursor={true}
                speed={500}
                loop={true}
                centeredSlides={true}
                watchSlidesProgress={true}
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
                        spaceBetween: -10
                    }
                }}
            >

                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/pryima.png" alt="pryima" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/veronika.png" alt="veronika" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/vitia.png" alt="vitia" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/ruslan.png" alt="rulan" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide">
                    <img src="/team/vlad.png" alt="vlad" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/bodia.png" alt="bodia" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/anuta.png" alt="anuta" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/katya.png" alt="katya" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/andrii.png" alt="andrii" />
                </SwiperSlide>
                <SwiperSlide className="bec5__swiper-slide swiper-slide ">
                    <img src="/team/bogdan.png" alt="bogdan" />
                </SwiperSlide>

            </Swiper>


            <div className="bec5__memberblock">
                {/* <div className="bec5__name">{team[(curr - 1) % team.length]}</div> */}
                <div className="bec5__work"></div>
            </div>
        </div >
    )
}
