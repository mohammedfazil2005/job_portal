import React from 'react'
import './Navbar.css'

const Navbar = ({setShow}) => {
     const handleShow = () => setShow(true);
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://globalcybersecuritynetwork.com/wp-content/uploads/2023/03/nexxt-logo-job-platform.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li>Find Job</li>
                            <li>Upload Job</li>
                          
                        </ul>
                         <div className="login-btn-fiv">
                            <button  onClick={handleShow}>Login</button>
                            <i className="fa-regular fa-user"></i>
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
