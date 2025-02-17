import React from 'react'
import './HeaderMiddle.css'
const HeaderMiddle = () => {
  return (
    <div className='header-middle'>
      <div>
        <button><i className="fa-solid fa-globe"></i></button>
        <button><i className="fa-solid fa-suitcase"></i></button>
      </div>
      <h1>12M</h1>
      <p>User Worldwide</p>
    </div>
  )
}

export default HeaderMiddle
