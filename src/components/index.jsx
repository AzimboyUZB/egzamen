import React from 'react'
import Header from './Header/Header'
import HeaderBanner from './Header/HeaderBanner'
import TopDasturchilar from './TopDasturchilar/TopDasturchilar'
import Yangliklar from './Yangliklar/Yangliklar'
import BizHaqimizda from './BizHaqimizda/Bizhaqimizda'
import Maqolalar from './Maqolalar/Maqolalar'
import TalabalardanIzohlar from './TalabalardanIzohlar/TalabalardanIzohlar'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Menu from './Menu/Menu'

function Wrapper() {
  return (
    <div className='wrapper'>
        <Header />
        <HeaderBanner />
        <TopDasturchilar />
        <Yangliklar />
        <BizHaqimizda />
        <Maqolalar />
        <TalabalardanIzohlar />
        <Contact />
        <Footer />
        <Menu />
    </div>
  )
}

export default Wrapper