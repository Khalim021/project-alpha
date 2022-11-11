import React from 'react'
import { NavLink } from 'react-router-dom'

function RegisterPage() {
    return (
        <div className='w-full h-screen justify-center flex items-center absolute top-0 left-0 border z-10 register'>
            <div className="box bg-white rounded-xl md:py-10 md:px-20 md:w-2/3 lg:w-1/3 w-11/12 px-8 py-10 relative">
                <div className="close-btn absolute right-5 top-5">
                    <NavLink to="/">
                        <i className="bx bx-x text-5xl hover:cursor-pointer"></i>
                    </NavLink>
                </div>
                <form className='flex flex-col w-11/12 md:w-full mx-auto' action="#">
                    <div className="form-header pb-4 pt-6 text-center">
                        <h2 className='text-3xl bold text-purple'>Регистрация</h2>
                    </div>
                    <div className="form-body lg:gap-8 gap-5 flex flex-col py-6">
                        <input className='border w-full py-3 pl-6 rounded-xl outline-none border-none bg-white-light focus:bg-white focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="text" placeholder='Электронная почта' />
                        <input className='border w-full py-3 pl-6 rounded-xl outline-none border-none bg-white-light focus:bg-white focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Пароль' />
                        <input className='border w-full py-3 pl-6 rounded-xl outline-none border-none bg-white-light focus:bg-white focus:border-sky-500 focus:ring-sky-500 focus:ring-1' type="password" placeholder='Повторите пароль' />
                    </div>
                    <div className="form-footer pt-4 pb-5">
                        <button className='bg-purple text-white w-full py-3 rounded-6 font-bold text-base'>
                            Войти
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default RegisterPage