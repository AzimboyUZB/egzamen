import Link from 'next/link'
import React, { useContext } from 'react'
import { Select } from 'antd';
import MenuIcon from '@/assets/icons/MenuIcon';
import { MenuContext } from '@/context/store';
import Menu from '../Menu/Menu';

function Header() {
    const { setMenu } = useContext(MenuContext)

    return (
        <div className='header'>
            <img className="logo" src="https://i.ibb.co/2dKcxpZ/8new-1.png" />
            <div className="nav">
                <Link href="">
                    <h1 className="list">Asosiy sahifa</h1>
                </Link>
                <Link href="">
                    <h1 className="list">Ta’im dasturlari</h1>
                </Link>
                <Link href="">
                    <h1 className="list">Biz haqimizda</h1>
                </Link>
                <Link href="">
                    <h1 className="list">Blog</h1>
                </Link>
            </div>
            <div className="box__btns">
                <button className="btn">Ariza qoldirish</button>
                <Select
                    defaultValue="uz"
                    style={{
                        width: 60,
                        height: 40,
                    }}
                    options={[
                        {
                            value: 'uz',
                            label: 'Uz',
                        },
                        {
                            value: 'ru',
                            label: 'Ru',
                        },
                        {
                            value: 'eng',
                            label: 'Eng',
                        },
                    ]}
                />
                <button onClick={() => setMenu(true)} className="box__menu__icon">
                    <MenuIcon />
                </button>
            </div>
        </div>
    )
}

export default Header