import React from 'react'
import './footer.css'

const CopyRight = () => {
  return (
    <div className='flex py-6 text-white copyright-container'>
      <span className='ml-16 copyright'>© {new Date().getFullYear()} Tocha. Bce права защищены</span>
    </div>
  )
}

export default CopyRight