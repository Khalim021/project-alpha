import React from 'react'
import { headerImg } from '../assets/data'

function Header() {
  return (
    <div className="header">
      <div className='container md:px-10 px-7'>
        <div className="flex-col gap-y-16 md:flex-row flex md:py-10 lg:py-16">
          <div className="w-full md:w-6/12 pt-4  md:items-center lg:pt-8 lg:w-5/12" >
            <h1 className='text-3xl lg:text-6xl md:text-4xl bold'>
              <span className='text-purple bold'>Telegram чат</span> <br />
              на вашем сайте
            </h1>
            <p className='text-lg py-4 lg:text-2xl md:text-xl md:py-4 lg:py-6'>
              Общение с клиентами станет простым и удобным, а подключение займёт 5 минут.
              Первый месяц — бесплатно!
            </p>
            <button className='bg-purple text-white py-3 px-10 rounded-6 font-bold text-base'>
              Подключить
            </button>
          </div>
          <div className='w-full md:w-7/12 md:scale-125  md:pt-10 lg:scale-100 lg:pt-0'>
            <img className='mx-auto' src={headerImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header