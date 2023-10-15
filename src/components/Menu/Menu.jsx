import MenuIcon from '@/assets/icons/MenuIcon'
import { MenuContext } from '@/context/store'
import Link from 'next/link'
import React, { useContext } from 'react'

function Menu() {
    const { setMenu, menu } = useContext(MenuContext)
    return (
        <div className={menu ? "menu open" : "menu"}>
            <div className="container">
                <button onClick={() => setMenu(false)} className="box__menu__icon">X</button>
                <Link onClick={() => setMenu(false)} href="">
                    <h1 className="list">Asosiy sahifa</h1>
                </Link>
                <Link onClick={() => setMenu(false)} href="">
                    <h1 className="list">Ta’im dasturlari</h1>
                </Link>
                <Link onClick={() => setMenu(false)} href="">
                    <h1 className="list">Biz haqimizda</h1>
                </Link>
                <Link onClick={() => setMenu(false)} href="">
                    <h1 className="list">Blog</h1>
                </Link>
            </div>
        </div>
    )
}

export default Menu