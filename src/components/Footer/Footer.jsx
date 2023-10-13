import React from 'react'
import {
    InstagramOutlined,
    FacebookOutlined,
    TwitterOutlined,
    PhoneOutlined,
    EnvironmentOutlined
} from '@ant-design/icons';
import Telegram from './../../assets/icons/Telegram';
import Link from 'next/link';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <img className="logo" src="https://i.ibb.co/2dKcxpZ/8new-1.png" />
                <div className="list">
                    <h4 className="list__text">Ijtimoiy tarmoqlarimiz</h4>
                    <div className="box__icons">
                        <Link href=""><InstagramOutlined /></Link>
                        <Link href=""><FacebookOutlined /></Link>
                        <Link href=""><TwitterOutlined /></Link>
                        <Link href=""><Telegram /></Link>
                    </div>
                </div>
                <div className="list">
                    <div className="number">
                        <PhoneOutlined />
                        <h4 className="list__text">+998 95 145 86 86</h4>
                    </div>
                    <div className="number">
                        <h4 className="list__text">@</h4>
                        <h4 className="list__text">info@edu-action.com</h4>
                    </div>
                </div>
                <div className="list location">
                    <h4 className="list__text">Toshkent shahri, Сhilanzor Yakkabog’ ko’chasi 25-uy</h4>
                    <Link href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwL4mvMGD04iqtSkrNziwuScwDAEyqB1U&q=uzbekistan&rlz=1C1GCEA_enUZ1048UZ1048&oq=uzbe&gs_lcrp=EgZjaHJvbWUqDQgEEC4YgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDITCAMQLhiDARjHARixAxjRAxiABDINCAQQLhiDARixAxiABDIKCAUQABixAxiABDINCAYQLhjHARjRAxiABDINCAcQLhjHARjRAxiABDIKCAgQABixAxiABDIHCAkQABiABNIBCDYxODJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">
                        <div className="number">
                            <EnvironmentOutlined />
                            <h4 className="list__text">Uzbekistan</h4>
                        </div>
                    </Link>
                </div>
                <div className="list">
                    <img src="https://i.ibb.co/ZH2Kcpc/Group-72-1.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer