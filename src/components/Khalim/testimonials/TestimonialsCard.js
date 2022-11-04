import React from 'react'

const TestimonialsCard = ({desc}) => {
  return (
    <div className='justify-center text-center overflow-visible'>
      <div className="flex flex-col align-middle shadow-lg h-auto md:h-52 items-center top py-8 px-4 bg-white rounded-lg">
        <h3 className='text-lg font-bold'>{desc.title}</h3>
        <p className='text-sm py-4 leading-6'>{desc.description}</p>
      </div>
      <div className="flex justify-center text-left gap-4 pt-12">
        <img className='rounded-full w-14 h-14' src={desc.image} alt={desc.image} />
        <div>
          <p className='text-lg bold'>{desc.name}</p>
          <span className='text-sm'>{desc.site}</span>
        </div>
      </div>
    </div>
    
  )
}

export default TestimonialsCard