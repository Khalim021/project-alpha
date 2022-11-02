import React from 'react'
import { aboutImg, benfits } from '../assets/data'

function About() {
  return (
    <div className='container md:px-10 px-7'>
      <div className="flex flex-col md:flex-row items-center">
        <div className='md:w-8/12 w-full'>
          <h2 className='text-3xl lg:text-5xl font-extrabold font-girloybold text-center md:text-left'>Tocha Online — это</h2>
          <div className="flex gap-8 flex-col pt-10">
            {benfits.map( (i , index) => {
              return (
                <div key={index} className="flex flex-row gap-6 items-center">
                  <img className='w-12 md:w-14' src={i.img} alt="" />
                  <div className="flex flex-col">
                    <p className='text-xl lg:text-2xl font-semibold text-light-black'>{i.title}</p>
                    <span className='text-sm md:text-base font-normal text-light-black'>{i.info}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className='md:w-4/12 w-full pt-16 scale-100 lg:scale-100 sm:scale-100'>
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About