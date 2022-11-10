import logo from "./img/logo.png";
import headerImg from "./img/header.svg";
import aboutImg from "./img/about.svg";

// import benfit images 
import b1 from "./img/icons/telegram.svg";
import b2 from "./img/icons/castle.svg";
import b3 from "./img/icons/man.svg";
import b4 from "./img/icons/woman.svg";

// import iphone images 
import iphone1 from "./img/iphone1.svg";
import iphone2 from "./img/iphone2.svg";
import iphone3 from "./img/iphone3.svg";

// import contact image 
import contactImg from "./img/contact.svg"


import footerLogo from "../assets/img/footerlogo.svg"

const benfits = [
    {
        title: "Ничего лишнего",
        info: "Отсутствие лишних приложений для операторов. Оператору не нужно учиться работать с чатом",
        img: b1
    },
    {
        title: "Простота",
        info: "Простая установка на сайт",
        img: b2
    },
    {
        title: "Несколько ассистентов",
        info: "Возможность подключения нескольких ассистентов",
        img: b3
    },
    {
        title: "Кастомизация",
        info: "Кастомизация",
        img: b4
    },

];

const prices = [
    {
        header: "Бесплатно",
        title: `Пробный период на 1 месяц`,
        price: '0₽/первый месяц',
        active: 'Подключить за 0₽'
    },
    {
        header: "Базовый",
        title: "Менее 1000 посещений в сутки",
        price: '200₽/месяц',
        active: 'Подключить за 200₽'
    },
    {
        header: "Премиум",
        title: "Более 1000 посещений в сутки",
        price: '500₽/месяц',
        active: 'Подключить за 500₽'
    },

];

const shags = [
    {
        n: '1',
        title: 'Telegram bot',
        describtion: 'Вы создаёте Telegram бота для вашего сайта',
        bottomImg: iphone1
    },
    {
        n: '2',
        title: 'Подключение Tocha',
        describtion: 'Tocha подключает Telegram бота к вашиму сайту',
        bottomImg: iphone2
    },
    {
        n: '3',
        title: 'Telegram-чат',
        describtion: 'Консультант отвечает на вопросы посетителей сайта',
        bottomImg: iphone3
    }
] ;

const comments = [
    {
        title: 'Как же удобно!',
        comment: 'В рамках спецификации современных стандартов, базовые сценарии поведения пользователей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут преданы социально-демократической анафеме.',
        userImg: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
        userName: 'Анна Купер',
        userJob: 'romashka.ru'
    },
    {
        title: 'Теперь мы идем в ногу со временем',
        comment: 'А ещё интерактивные прототипы превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. Банальные, но неопровержимые выводы, а также тщательные исследования конкурентов формируют сеть.',
        userImg: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        userName: 'Андрей Васильев',
        userJob: 'samogon-ont.ru'
    }
] ;

export {
    logo, headerImg, aboutImg, benfits, prices, shags , comments , contactImg , footerLogo
}