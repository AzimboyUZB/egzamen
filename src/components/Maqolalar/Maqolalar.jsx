import maqolalar from '@/data/maqolalar'
import React from 'react'

function Maqolalar() {
    return (
        <div className="maqolalar">
            <div className="maqolalar__header">
                <h1 className='name'>Maqolalar</h1>
                <button className="btn">Barchasi</button>
            </div>
            <div className="box__card">
                {maqolalar.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.img} width="230px" height="100%" />
                        <div className="card__title">
                            <h3 className="card__name">{item.name}</h3>
                            <p className="card__text">{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Maqolalar