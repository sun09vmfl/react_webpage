import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { Autoplay, Navigation } from 'swiper';

export default function Banner() {
  const path = process.env.PUBLIC_URL;
  return (
    <div className="banner" style={{ width: '1300px', margin: '60px auto', cursor: 'pointer' }}>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation
        slidesPerView={5}
        autoplay={{
          delay: 2000,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="banners">
          <img src={path + '/images/coop1.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop2.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop3.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop4.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop5.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop6.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop7.png'} />
        </SwiperSlide>
        <SwiperSlide className="banners">
          <img src={path + '/images/coop8.png'} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
