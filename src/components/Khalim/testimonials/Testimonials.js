import React from 'react'
import testData from "./testData";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import TestimonialsCard from './TestimonialsCard';
import { Pagination } from 'swiper';
import './testimonials.css'

const Testimonials = () => {
  return (
    <section className='container md:px-10 px-7'>
      <h3 className='text-3xl lg:text-5xl font-extrabold font-girloybold text-center'>Отзывы клиентов</h3>
      <Swiper className='mx-auto pt-20 pb-20'
      slidesPerView={1} 
      loop={true} 
      pagination={{clickable: true}}
      modules={[Pagination]}
      spaceBetween={50}
      breakpoints={{1080: {slidesPerView: 2,}}}>
        {testData.map((desc, i) => {
          return (
            <SwiperSlide key={i} className='flex justify-center'>
              <TestimonialsCard desc={desc}/>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials
