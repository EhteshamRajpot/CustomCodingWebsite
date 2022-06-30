import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Logo from '../images/logo.webp'
import './Nav.css'

function NavBar() {
  return (
	<div>
		<nav className={"navbar navbar-expand-lg navbar-light fixed-top"} id={"NavBar"}>
    		<div className={"container-fluid"}>
        		<a href="#" className={"navbar-brand ms-lg-5"} style={{display: "block"}}><img src={Logo} alt="logo"/></a>
        		<button type="button" className={"navbar-toggler text-white"} data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           	    	<span className={"navbar-toggler-icon"}></span>
        		</button>
       	    <div className={"collapse navbar-collapse"} id="navbarCollapse">
            <ul className={"navbar-nav ms-auto me-5"}>
				<li className='nav-item'>
              		  <a href="#" className={"nav-link text-white"}>Home</a>
				</li>
				<li className='nav-item'>
              		  <a href="#" className={"nav-link text-white"}>About</a>
				</li>
				<li className='nav-item'>
              		  <a href="#" className={"nav-link text-white"}>Coffee</a>
				</li>
				<li className='nav-item'>
              		  <a href="#" className={"nav-link text-white"}>Review</a>
				</li>
				<li className='nav-item'>
              		  <a href="#" className={"nav-link text-white"}>Blog</a>
				</li>
           	</ul>
       	    </div>
    		</div>
		</nav>
	</div>
  )
}

export default NavBar