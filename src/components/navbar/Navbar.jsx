import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = ({setShow}) => {
     const handleShow = () => setShow(true);
    return (
        <div className='sticky-top'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                   <Link className='navbar-brand' to={'/'}> <img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <Link to={'/jobs'}><li>Find Job</li></Link> 
                         <Link to={'/uploadjobs'}><li>Upload Job</li></Link> 
                          
                        </ul>
                         <div className="login-btn-fiv">
                            <button  onClick={handleShow}>Login</button>
                         <Link to={'/profile'}><i className="fa-regular fa-user"></i></Link> 
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
