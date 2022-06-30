import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Yello.css'
function YelloNav() {
  return (
		<div>
			<div className={"bg-warning text-center"}>
				<span className={"fw-bold"} style={{fontSize: "18px"}}>Mid-Season Sale Ending Soon</span>
				<span className={"ms-5 fw-bold"} style={{fontSize: "20px"}}>03 <sup>D</sup></span>
				<span className={"ms-5 fw-bold"} style={{fontSize: "20px"}}>13 <sup>H</sup></span>
				<span className={"ms-5 fw-bold"} style={{fontSize: "20px"}}>09 <sup>M</sup></span>
				<a className={"ms-5 text-dark text-decoration-underline"} style={{textDecoration: "none"}}>Get Access</a>
			</div>
		</div>
  )
}

export default YelloNav