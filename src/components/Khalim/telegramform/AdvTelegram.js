import React, { useState } from 'react';
import contactSVG from "../../../assets/img/contact.svg";
import "./advtelegram.css";

const AdvTelegram = () => {
  const [sendEmail, setSendEmail] = useState('');
  
  return (
    <section className='container md:px-10 py-8 bg-purple advtelegram'>
      <div className="flex items-center flex-col h-auto py-6 relative md:flex-row px-6  rounded-6 lg:h-280 lg:px-40">
        <div className='w-full lg:w-5/12'>
          <img className='lg:absolute bottom-0' src={contactSVG} alt="" />
        </div>
        <div className='w-full lg:w-2/3 '>
          <h2 className='text-white text-2xl md:text-3xl bold pt-8'>Подключите Telegram чат <br /> уже сегодня</h2>
          <form className="flex py-8">
            <input 
            className='rounded-l-6 w-full md:w-56 pl-4 placeholder:text-sm focus:outline-none' 
            type="text" 
            placeholder='Введите e-mail'
            value={sendEmail}
            onChange={(e) => setSendEmail(e.target.value)}
            />
            <button className='rounded-r-6 bg-black text-white text-base bold py-3 px-4'>Отправить</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AdvTelegram