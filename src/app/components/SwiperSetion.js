
"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/css';
import images from '../../../public/banner.jpg';
import images1 from '../../../public/banner1.jpg';
import images2 from '../../../public/cartoon2.jpg';
import Image from 'next/image'


const SwiperSetion = () => {
    SwiperCore.use([Autoplay]);

    return (
       
         <Swiper
        slidesPerView={3}
        loop={true}
        autoplay={{
            delay:2000
        }}
    >
      <SwiperSlide>
        {<Image src={images} alt=""/>}
      </SwiperSlide>
      <SwiperSlide>
      {<Image src={images1} alt=""/>}
      </SwiperSlide>
      <SwiperSlide>
      {<Image src={images2} alt=""/>}
      </SwiperSlide>
      ...
    </Swiper>
       
    );
};

export default SwiperSetion;