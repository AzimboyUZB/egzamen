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
                    <h3>Ijtimoiy tarmoqlarimiz</h3>
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
                        <h3>+998 95 145 86 86</h3>
                    </div>
                    <div className="number">
                        <h3>@</h3>
                        <h3>info@edu-action.com</h3>
                    </div>
                </div>
                <div className="list">
                    <h4>Toshkent shahri, Сhilanzor Yakkabog’ ko’chasi 25-uy</h4>
                    <Link href="https://www.google.com/search?gs_ssp=eJzj4tDP1TcwL4mvMGD04iqtSkrNziwuScwDAEyqB1U&q=uzbekistan&rlz=1C1GCEA_enUZ1048UZ1048&oq=uzbe&gs_lcrp=EgZjaHJvbWUqDQgEEC4YgwEYsQMYgAQyBggAEEUYOTINCAEQABiDARixAxiABDINCAIQABiDARixAxiABDITCAMQLhiDARjHARixAxjRAxiABDINCAQQLhiDARixAxiABDIKCAUQABixAxiABDINCAYQLhjHARjRAxiABDINCAcQLhjHARjRAxiABDIKCAgQABixAxiABDIHCAkQABiABNIBCDYxODJqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8" target="_blank">
                        <div className="number">
                            <EnvironmentOutlined />
                            <h4>Uzbekistan</h4>
                        </div>
                    </Link>
                </div>
                <div className="list">
                    <img src="https://i.ibb.co/t4wvLw8/Group-72.png" />
                </div>
            </div>
        </div>
    )
}

export default Footer