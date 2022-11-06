import React from "react";
import './Tariffs.css'
import IphoneX from '../../assets/img/X.svg';
import IphoneX1 from '../../assets/img/X2.svg';
import IphoneX2 from '../../assets/img/X3.svg';

function Tariffs() {
    return(
        <>
    <div className="tariffs">
        <h1 className="tariffs__header">Тарифы</h1>
        <p className="tariffs__text">Стоимость зависит от трафика сайта</p>
        <ul className="tariffs__list">
            <li className="tariffs__item">
                <p className="tariffs__item--heading">
                    Бесплатно
                </p>

                <p className="tariffs__item--paragraph">
                    Пробный период на 1 месяц
                </p>

                <p className="tariffs__item--text">
                    0₽/первый месяц
                </p>

                <button onClick={() => console.log('You connected')} className="tariffs__item--button" type="click">
                    Подключить за 0₽
                </button>
            </li>

            <li className="tariffs__item">
                <p className="tariffs__item--heading">
                    Базовый
                </p>

                <p className="tariffs__item--parag">
                    Менее 1000 посещений в сутки
                </p>

                <p className="tariffs__item--text">
                    200₽/месяц
                </p>

                <button className="tariffs__item--button">
                    Подключить за 200₽
                </button>
            </li>

            <li className="tariffs__item">
                <p className="tariffs__item--heading">
                    Премиум
                </p>

                <p className="tariffs__item--paragr">
                    Более 1000 посещений в сутки
                </p>

                <p className="tariffs__item--text">
                    500₽/месяц
                </p>

                <button className="tariffs__item--button">
                    Подключить за 200₽
                </button>
            </li>
        </ul>
    </div>

    <div className="Telegramchat">
        <h2 className="telegramchat__heading">Всего 3 шага для подключения Telegram чата</h2>
        <div className="circle">
            <div className="circle__1">
                <div className="circle__1--1">
                    <span className="span__circle--1">1</span>
                    <p className="tg__bot">Telegram bot</p>
                    <p className="tg__text1">Вы создаёте Telegram бота для вашего сайта</p>
                </div>

                <div className="circle__1--img">
                <svg className="vector17" width="138" height="36" viewBox="0 0 138 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M137.5 35.5C115 29 106.9 11.1 68.5 3.49998C30.1 -4.10002 7.66667 8.66667 1 14.5" stroke="#18E1F7" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 7"/>
                </svg>
                </div>

                <div className="circle__2--img">
                <svg className="tg1" width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.8519 40.904L75.9994 24.249L42.2691 23.0258L43.8918 28.7417L35.6861 35.4718L35.8519 40.904Z" fill="#685ED6"/>
                <path d="M75.9997 24.2484L36.4523 27.4765L5.20192 43.6227L75.9997 24.2484Z" fill="#18E1F7"/>
                <path d="M42.2697 23.0255L76 24.2487L42.8146 11.0767L42.2697 23.0255Z" fill="#18E1F7"/>
                </svg>
                </div>

                <div className="circle__3--img">
                <svg className="vector18" width="128" height="35" viewBox="0 0 128 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C10 12 34.5 28.8 64.5 32C94.5 35.2 118.667 33.3333 127 32" stroke="#33AFE1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 7"/>
                </svg>
                </div>

                <div className="circle__3--img">
                <svg className="vector18" width="128" height="35" viewBox="0 0 128 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C10 12 34.5 28.8 64.5 32C94.5 35.2 118.667 33.3333 127 32" stroke="#33AFE1" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 7"/>
                </svg>
                </div>
            </div>

            <div className="circle__2">
                <span className="span__circle--2">2</span>
                <p className="tg__bot">Подключение Tocha</p>
                <p className="tg__text2">Tocha подключает Telegram бота к вашиму сайту</p>
                <div className="circle__4--img">
                <svg className="vector19" width="137" height="95" viewBox="0 0 137 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.5 9.99997C96.5 -6.99999 76.4 3.49999 58 21.5C35 44 56 97.5 1 94" stroke="#685ED6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 7"/>
                </svg>
                </div>

                <div className="circle__5--img">
                <svg className="tg2" width="93" height="65" viewBox="0 0 93 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.217 47.6011L92.2834 43.1047L52.6327 24.5849L53.3307 33.7656L42.1822 39.5587L41.217 47.6011Z" fill="#685ED6"/>
                <path d="M92.2838 43.104L44.7981 28.2223L4.36818 36.3854L92.2838 43.104Z" fill="#18E1F7"/>
                <path d="M52.6336 24.5846L92.2843 43.1044L55.8329 7.34511L52.6336 24.5846Z" fill="#18E1F7"/>
                </svg>
                </div>

                <div className="circle__6--img">
                <svg className="tg2" width="93" height="65" viewBox="0 0 93 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.217 47.6011L92.2834 43.1047L52.6327 24.5849L53.3307 33.7656L42.1822 39.5587L41.217 47.6011Z" fill="#685ED6"/>
                <path d="M92.2838 43.104L44.7981 28.2223L4.36818 36.3854L92.2838 43.104Z" fill="#18E1F7"/>
                <path d="M52.6336 24.5846L92.2843 43.1044L55.8329 7.34511L52.6336 24.5846Z" fill="#18E1F7"/>
                </svg>
                </div>

                <div className="circle__7--img">
                <svg className="vector20" width="108" height="18" viewBox="0 0 108 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1C13.8333 9.83333 54.5 25.5 107.5 10" stroke="#685ED6" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="5 7"/>
                </svg>

                </div>
            </div>

            <div className="circle__3">
                <span className="span__circle--3">3</span>
                <p className="tg__bot">Telegram-чат</p>
                <p className="tg__text3">Консультант отвечает на вопросы посетителей сайта</p>
            </div>
        </div>
    </div>

    <div className="iphone__mobiles">
            <img className="img__iphone1" src={IphoneX} alt="IphoneX"/>
            <img className="iphone__x1" src={IphoneX1} alt="IphoneX-1"/>
            <img className="img__iphone2" src={IphoneX2} alt="IphoneX-2"/>
    </div>
    </>
    )
}

export default Tariffs