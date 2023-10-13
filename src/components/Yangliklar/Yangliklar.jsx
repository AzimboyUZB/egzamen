import yangliklar from '@/data/yangliklar'
import React from 'react'

function Yangliklar() {
    return (
        <div className='yangliklar'>
            <h1>Yangliklar</h1>
            <div className="box__card">
                {yangliklar.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.photo} />
                        <h2 className="card__name">{item.name}</h2>
                        <h4 className="card__title">{item.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Yangliklar