import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  return (
    <section className='testimonials-container'>
      <div className='section-testimonials__title'>
        <h3 className='testiomonials-title'>Отзывы клиентов</h3>
      </div>
      <div className='what-they-think'>
        <div className='testimonials-items'>
          <h4>Как же удебно</h4>
          <p>B рамках спецификации современных стандартов, базовые 
            сценарии поведения пользователей, которые представляют 
            собой яркий пример континентально-европейского 
            типа политической культуры, будут преданы социально-демократической анафеме.
          </p>
        </div>
        <div className='testimonials-items'>
          <h4>Теперь мы идем в ногу co временем</h4>
          <p>A ещё интерактивные прототипы превращены 
            в посмешище, хотя само их существование приносит 
            несомненную пользу обществу. Банальные, но неопровержимые выводы, 
            a также тщательные исследования конкурентов формируют сеть.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
