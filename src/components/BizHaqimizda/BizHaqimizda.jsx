import React from 'react'

function BizHaqimizda() {
    return (
        <div className='biz__haqimizda'>
            <h1>Biz <span className='span'>haqimizda</span></h1>
            <div className="container">
                <div className="title">
                    <h3 className="title__name">Edu-action</h3>
                    <p className="title__text">Biz xorijda ta’lim olish bo’yicha abuturentlargako’maklashuvchi
                        kompaniyamiz. Bizning maqsadimiz "Barcha talabalarga ularning kelib chiqishi yoki ijtimoiy
                        sharoitlaridan qat'i nazar, mukammal ta'lim orqali eng yaxshi imkoniyat beriladi".
                        Biz muntazam ravishda turli xorijiy treninglar, ko'rgazmalarda qatnashamiz va butun
                        dunyo bo'ylab hamkorlar bilan shartnomalar tuzamiz.
                    </p>
                    <button className="title__btn">Batafsil</button>
                </div>
                <div className="box__photo">
                    <img className="photo" src="https://i.ibb.co/fF25c7v/Group-14.png" />
                </div>
                <button className="title__btn__two">Batafsil</button>
            </div>
        </div>
    )
}

export default BizHaqimizda