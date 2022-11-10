import React from 'react'

function Card({item}) {
    return (
        <div className=" flex flex-col w-350 h-400 bg-white-bg rounded-md card overflow-hidden caret-card-bg shadow-card">
            <div>
                <div className="card-header text-center bg-card-bg py-4">
                    <span className='text-center text-purple bold font-extrabold text-2xl'>{item.header}</span>
                </div>
                <div className="card-body text-center">
                    <p className='text-center text-3xl font-bold bold pb-10 pt-10 px-8 md:px-4 lg:px-14'>{item.title}</p>
                    <span className='text-center text-xl font-medium'>{item.price}</span>
                </div>
                <div className="card-footer pt-12 justify-center flex">
                    <button className='bg-purple text-white py-3 px-14 lg:px-16 md:px-8 rounded-6 font-bold text-base bold'>
                        {item.active}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card