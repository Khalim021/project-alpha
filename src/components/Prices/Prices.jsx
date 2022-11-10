import React from 'react'
import Card from '../ui/Card';
import { prices } from '../../assets/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import "swiper/css/bundle";


function Prices() {

  return (
    <div className='container md:px-10 px-7'>
      <h2 className='text-3xl lg:text-5xl font-extrabold font-girloybold text-center'>Тарифы</h2>
      <p className='text-center font-girloybold bold text-xl pt-6 md:text-2xl'>Стоимость зависит от трафика сайта</p>

      <Swiper className="mx-auto pt-20 pb-20"
        spaceBetween={10}
        slidesPerView={1}
        loop={false}
        pagination={true}
        modules={[Pagination]}

        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 768px
          868: {
            slidesPerView: 3,
          },
        }}
      >

        {prices.map((item, index) => {
          return (
            <SwiperSlide className='justify-center flex' key={index}>
              <Card item={item} />
            </SwiperSlide>
          )
        })}

        <div className="swiper-pagination"></div>

      </Swiper>
    </div>
  )
}

export default Prices;