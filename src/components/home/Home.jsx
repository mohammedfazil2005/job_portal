import React from 'react'
import Header from './header/Header'
import './Home.css'
import HeaderMiddle from './headerMiddle/HeaderMiddle'
import FooterHeading from './footerHeading/FooterHeading'

const Home = () => {
  return (
    <div className='home-parent'>
      <Header/>
      <HeaderMiddle/>
      <FooterHeading/>
    </div>
  )
}

export default Home
