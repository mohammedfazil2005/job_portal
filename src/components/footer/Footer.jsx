import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer>
        <div className='footer-details'>
            <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" />
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, facere aliquam tempora omnis sequi quibusdam excepturi incidunt in deleniti ex par</h6> 
            <div>
                <button><i className="fa-brands fa-facebook"></i></button>
                <button><i className="fa-brands fa-google"></i></button>
                <button><i className="fa-brands fa-twitter"></i></button>
                <button><i className="fa-brands fa-linkedin"></i></button>
            </div>
            </div>
            
            <div className='footer-details'>
                <h5>Job Categories</h5>
                <p><i className="fa-solid fa-arrow-right"></i>Work from Home</p>
                <p><i className="fa-solid fa-arrow-right"></i>Internship Job</p>
                <p><i className="fa-solid fa-arrow-right"></i>Freelancer Job</p>
                <p><i className="fa-solid fa-arrow-right"></i>Part Time Job</p>
                <p><i className="fa-solid fa-arrow-right"></i>Full Time Job</p>
            </div>
            
            <div className='footer-details'>
                <h5>Job Type</h5>
                <p><i className="fa-solid fa-arrow-right"></i>Create Account</p>
                <p><i className="fa-solid fa-arrow-right"></i>Career Counseling</p>
                <p><i className="fa-solid fa-arrow-right"></i>My Oficiona</p>
                <p><i className="fa-solid fa-arrow-right"></i>FAQ</p>
                <p><i className="fa-solid fa-arrow-right"></i> Report a Problem</p>
            </div>
            <div className='footer-details'>  
                <h5>Resources</h5>
                <p><i className="fa-solid fa-arrow-right"></i>My Account</p>
                <p><i className="fa-solid fa-arrow-right"></i>Support</p>
                <p><i className="fa-solid fa-arrow-right"></i> How It Works</p>
                <p><i className="fa-solid fa-arrow-right"></i>Underwriting</p>
                <p><i className="fa-solid fa-arrow-right"></i>Employers</p>
            </div>
            <div className='footer-details'>
                <h5>Quick Links</h5>
                <p><i className="fa-solid fa-arrow-right"></i>  Jobs Listing</p>
                <p><i className="fa-solid fa-arrow-right"></i> About Us</p>
                <p><i className="fa-solid fa-arrow-right"></i> Contact Us</p>
                <p><i className="fa-solid fa-arrow-right"></i> Privacy Policy</p>
                <p><i className="fa-solid fa-arrow-right"></i> Term & Condition</p>
          
        </div>
      </footer>
      <div className='copright-div'>
        <p>Copyright © 2021 All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
