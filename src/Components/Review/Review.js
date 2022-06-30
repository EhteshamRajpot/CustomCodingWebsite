import React from 'react'
import './Review.css'
import Logo1 from "../images/logo1.webp"
import Logo2 from "../images/logo2.webp"
function Review() {
  return (
		<div id={"mainDiv"}>
			<h1 align={"center"} className={"text-white"}>What kind of Coffee we serve for you</h1>
			<h5 align={"center"} className={"text-white"}>Who are in extremely love with eco friendly system.</h5>
			<div className={'container mt-5'}>
				<div className={'row'}>
					<div className={'col-sm-12 col-md-12 col-lg-6'}>
						<img src={Logo1} className={"img-fluid"}/>
						<h4 className={"text-white mt-3"}>Lorem Ipsum </h4>
						<p style={{fontSize: "20px", color: "white"}}>
							Accessories Here you can find the best computer for your laptop,
							<br/>monitor, printer, scanner, speaker. Here you can find the best computer<br/>
							accessory for your laptop, monitor, printer, scanner, speaker.
						</p>
					</div>
					<div className={'col-sm-12 col-md-12 col-lg-6'}>
						<img src={Logo2} className={"img-fluid"}/>
						<h4 className={"text-white mt-3"}>Lorem Ipsum </h4>
						<p style={{fontSize: "20px", color: "white"}}>
							Accessories Here you can find the best computer for your laptop,
							<br/>monitor, printer, scanner, speaker. Here you can find the best computer<br/>
							accessory for your laptop, monitor, printer, scanner, speaker.
						</p>
					</div>
				</div>
				<div className={'container mt-5'}>
					<div className={'row'}>
						<div className={'col-sm-6 col-md-6 col-lg-3 text-white'}><h1 style={{fontSize: "70px"}}>2536 <br/></h1><span style={{fontSize: "20px"}}>Happy Client</span></div>
						<div className={'col-sm-6 col-md-6 col-lg-3 text-white'}><h1 style={{fontSize: "70px"}}>7562 <br/></h1><span style={{fontSize: "20px"}}>Total Projects</span></div>
						<div className={'col-sm-6 col-md-6 col-lg-3 text-white'}><h1 style={{fontSize: "70px"}}>2013 <br/></h1><span style={{fontSize: "20px"}}>Cups Coffee</span></div>
						<div className={'col-sm-6 col-md-6 col-lg-3 text-white'}><h1 style={{fontSize: "70px"}}>10536 <br/></h1><span style={{fontSize: "20px"}}>Total Submitted</span></div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Review