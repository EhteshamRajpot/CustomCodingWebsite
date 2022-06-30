import React from 'react';
import LiveCoffeeMaking from "../images/liveCoffeMaking.webp";
import Sign from '../images/sign.webp';
import "./About.css"
import PLayButton from "../images/playButton.webp"

function About() {
  return (
	<div>
		<div className={"container mt-5"}>
			<div className={"row"}>
				<div className={"col-sm-12 col-lg-6"} id={"LiveCoffeMaking"}>
					<img className={"img-fluid"} src={LiveCoffeeMaking} id={"LiveCoffe"}/>
					<a href="https://www.youtube.com/watch?v=ARA0AxrnHdM" className={"btn play-btn"}>
						<div><img src={PLayButton } className={"img-fluid"} id={"playButton"}/></div>
					</a>
				</div>
				<div className={"col-sm-12 col-lg-6 mt-5"}>
						<h6>Live Coffee making process.</h6>
						<h1>We Telecast our <br/> Coffee Making Live</h1>
						<p><span className={"fw-bold"}>We are here to listen from you deliver exellence</span></p>
						<p style={{fontSize: "20px"}}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit,
						    sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
						</p>
						<img className={"img-fluid"} src={Sign}/>
				</div>
			</div>
		</div>
	</div>
  )
}

export default About