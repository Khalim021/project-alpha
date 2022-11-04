import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from "../../../assets/img/footerlogo.svg";
import CopyRight from './CopyRight';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-light-black h-auto lg:h-96 py-16">
        <div className='container md:px-10 px-7 '>
          <div className="flex justify-between text-twhite gap-4">
            <div className="box">
              <Link to="/"><img src={footerLogo} alt="" /></Link>
            </div>
            <div className="flex flex-col md:flex-row gap-8 lg:w-1/2 justify-around pl-12 sm:pl-0 sm:w-2/3">
              <div>
                <p className='text-xl pb-8 footer-title'>Telegram чат</p>
                <ul>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">O нас</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Партнеры</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Цены</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Контакты</Link></li>
                </ul>
              </div>
              <div>
                <p className="text-xl pb-8 footer-title">Поддержка</p>
                <ul>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Центр поддержки</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Политика</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Документы оферта</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Документы оферта</Link></li>
                  <li className='pb-4 items-center flex gap-2 text-base hover:translate-x-2 duration-300'><Link to="/">Статус</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <CopyRight />
    </>
  )
}

export default Footer