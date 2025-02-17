import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-content'>
        <h6><i class="fa-regular fa-star"></i>Find Jobs,Employment & Career</h6>
        <h1>Get a <span>Job</span> that Perfect for <span>you</span></h1>
        <p>"Explore thousands of job opportunities tailored to your skills and passion, and take the next step in your career today!</p>
        <button>FIND JOB</button>
      </div>
      <div className='header-img-parent'>
        <div>
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
            <img src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_512px.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
