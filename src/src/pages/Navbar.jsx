import React, { useState } from 'react'
import { logo } from '../assets/data';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='w-full top-0 left-0'>
            <div className='md:flex items-center justify-between pb-4 pt-8 md:px-10 px-7 container'>
                <div className='font-bold text-2xl cursor-pointer flex items-center  text-gray-800 '>
                    <img className='w-28 sm:w-auto' src={logo} alt="" />
                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute  right-8 top-8 cursor-pointer md:hidden sm:block '>
                    <i className={`text-purple bx ${open ? 'bx-x' : 'bx-menu'}`}></i>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9  ${open ? 'top-20 pr-12 z-10 w-full h-20 transition-all delay-200' : 'top-[-490px] easy-in '}`}>
                    <div className={`flex gap-3 ${open ? "w-64 rounded-6 absolute right-8 top-00 bg-white flex-col py-10 px-6 gap-6" : ""}`}>
                        <button className="bg-white-light text-purple py-4 md:py-3 px-10 rounded-6 font-bold text-base">
                            Вход
                        </button>
                        <button className='bg-purple text-white py-4 md:py-2 px-6 rounded-6 font-bold text-base'>
                            Регистрация
                        </button>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Navbar