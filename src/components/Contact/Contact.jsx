import React from 'react'

function Contact() {
  return (
    <div className="contact">
      <h1 className="name">Bog’lanish</h1>
      <div className="container">
        <img className="photo" src="https://i.ibb.co/jwsgJgm/Rectangle-116-2.png" />
        <div className="title">
          <h2 className="title__name">Ariza qoldirish uchun.</h2>
          <input className='title__input' placeholder='Ism Familiya'/>
          <input className='title__input' placeholder='Telefon raqaming' type='number'/>
          <textarea className='title__textarea' placeholder='Ta’lim olish rejangiz (ihtiyoriy)' />
        </div>
      </div>
    </div>
  )
}

export default Contact