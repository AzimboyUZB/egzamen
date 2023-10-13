import React from 'react'
import { EnvironmentOutlined } from '@ant-design/icons';
import topDasturlar from '@/data/topdasturlar';

function TopDasturchilar() {
    return (
        <div className='top__dasturchilar'>
            <div className="container__header">
                <h1 className="name">Top <span className='name__span'>dasturchilar</span></h1>
                <button className="btn">Barchasi</button>
            </div>
            <div className="box__card">
                {topDasturlar.map((item) => (
                    <div key={item.id} className={item.class}>
                        <h1 className='card__name'>Myunhem texnika universiteti</h1>
                        <div className="card__title">
                            <div className="card__location">
                                <EnvironmentOutlined />
                                <h4 className='card__text'>Germaniya</h4>
                            </div>
                            <h4 className='card__text'>Magistratura</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopDasturchilar