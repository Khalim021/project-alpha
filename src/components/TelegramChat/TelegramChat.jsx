import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import { shags } from '../../assets/data'

function TelegramChat() {
  return (
    <div className="blur-bg">
      <div className='container md:px-10 px-7 '>
        <h2 className='text-3xl lg:text-5xl font-extrabold font-girloybold text-center'>Всего 3 шага для подключения Telegram чата</h2>

        <div className="flex md:gap-10  justify-between pt-20  shags ">

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={false}
            pagination={true}
            modules={[Pagination]}

            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              868: {
                slidesPerView: 3,
              },
            }}
          >

            {shags.map((i, index) => {
              return (
                <SwiperSlide >
                  <div className={` ${index === 1 ? "lg:pt-70" : ""}`}>
                    <div className="w-224 text-center mx-auto">
                      <div className="bg-white-light rounded-full w-72 h-72 items-center flex justify-center text-3xl bold text-purple mx-auto">{i.n}</div>
                      <p className='text-lg font-bold pt-4'>{i.title}</p>
                      <p className='text-15 font-normal'>{i.describtion}</p>
                    </div>
                    <img className='mt-12 lg:mt-20 mx-auto h-420 md:h-auto' src={i.bottomImg} alt="" />
                  </div>
                </SwiperSlide>
              )
            })}

            <div className="swiper-pagination pt-20"></div>

          </Swiper>

        </div>
      </div>
    </div>
  )
}

export default TelegramChat