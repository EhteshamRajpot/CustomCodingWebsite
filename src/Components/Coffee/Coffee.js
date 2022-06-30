import React from 'react'
import './Coffee.css'
import G1 from "../images/g1.jpg"
import G2 from "../images/g2.jpg"
import G3 from "../images/g3.jpg"
import G4 from "../images/g4.jpg"
import G5 from "../images/g5.jpg"

function Coffee() {
  return (
	<div>
		<div style={{marginTop: "100px"}} id={"Coffee"}>
			<div className={"container"} align="center">
				<h1 className={"fw-bold"}>What kind of Coffee we serve for you</h1>
				<h6>Who are in extremely love with eco friendly system.</h6>
			</div>
			<div className={"container"}>
				<div className={"row"} style={{marginTop: "30px"}}>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Cappuccino<span style={{color: "brown", marginLeft: "200px"}}>$49</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Americano<span style={{color: "brown", marginLeft: "200px"}}>$59</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Espresso<span style={{color: "brown", marginLeft: "230px"}}>$99</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
				</div>
				<div className={"row"} style={{marginTop: "80px"}}>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Macchiato<span style={{color: "brown", marginLeft: "220px"}}>$49</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Mocha<span style={{color: "brown", marginLeft: "250px"}}>$59</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Coffee Latte<span style={{color: "brown", marginLeft: "190px"}}>$99</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
				</div>
				<div className={"row"} style={{marginTop: "80px"}}>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Piccolo Latte<span style={{color: "brown", marginLeft: "190px"}}>$49</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Ristretto<span style={{color: "brown", marginLeft: "230px"}}>$59</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
					<div className={"col-sm-12 col-md-12 col-xl-4"}>
						<div className={"bg-white div1"} style={{borderRadius: "5px"}}>
							<span style={{fontSize: "25px"}} className={"fw-bold ms-3"}>Affogato<span style={{color: "brown", marginLeft: "230px"}}>$99</span></span>
							<p id={"para"}>Usage of the Internet is becoming more common due to rapid advance.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style={{marginTop: "100px"}}>
			<h1 align="center" className={"fw-bold"}>What kind of Coffee we serve for you</h1>
			<h6 align="center">Who are in extremely love with eco friendly system.</h6>
			<div className={"container mt-5"}>
				<div className={"row"}>
					<div className={"col-sm-12 col-md-12 col-lg-4"}>
						<img src={G1} className={"img-fluid"} width={"100%"}/>
						<img src={G2} className={"img-fluid mt-5"} width={"100%"}/>
					</div>
					<div className={"col-sm-12 col-md-12 col-lg-8"}>
						<div className={"row"}>
							<div className={"col-sm-12 col-md-12 col-lg-12 mt-sm-5 mt-lg-0"}>
								<img src={G3} className={"img-fluid"} width={"100%"}/>
							</div>
						<div className={"col-sm-12 col-md-12 col-lg-12"}>
							<div className={"row"}>
								<div className={"col-sm-12 col-md-12 col-lg-6"}>
									<img src={G4} className={"img-fluid mt-5"} width={"100%"}/>
								</div>
								<div className={"col-sm-12 col-md-12 col-lg-6"}>
									<img src={G5} className={"img-fluid mt-5"} width={"100%"}/>
								</div>
							</div>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>	
	</div>

  )
}

export default Coffee