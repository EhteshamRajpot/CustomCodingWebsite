import React from 'react'
import Coffee1 from '../images/coffee1.webp'
import Coffee2 from '../images/coffee2.webp'
import './Blog.css'

function Blog() {
  return (
		<div style={{marginTop: "100px"}}>
			<h1 align={"center"} className={"fw-bold"}>What kind of Coffee we serve for you</h1>
			<h5 align={"center"}>Who are in extremly love with this eco friendly system.</h5>
			<div className={"container mt-5"}>
				<div className={'row'}>
					<div className={"col-sm-12 col-md-6 col-lg-6"}>
						<img src={Coffee1} width={"100%"} className={"img-fluid"}/>
						<div className='mt-3'>
							<a href='#' style={{textDecoration: "none", borderRadius: "30px"}} className={"px-4 py-1"}>Travel</a>
							<a href='#' style={{textDecoration: "none", borderRadius: "30px"}} className={"px-4 py-1 ms-2"}>Life Style</a>
							 <h4 className={'mt-5'}>Portable latest Fashion for young women</h4>
							 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							 <h5>31st January, 2018</h5>
						</div>
					</div>
					<div className={"col-sm-12 col-md-6 col-lg-6 mt-sm-5 mt-lg-0"}>
						<img src={Coffee2} width={"100%"} className={"img-fluid"}/>
						<div className='mt-3'>
							<a href='#' style={{textDecoration: "none", borderRadius: "30px"}} className={"px-4 py-1"}>Travel</a>
							<a href='#' style={{textDecoration: "none", borderRadius: "30px"}} className={"px-4 py-1 ms-2"}>Life Style</a>
						 	<h4 className={'mt-5'}>Portable latest Fashion for young women</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
							<h5>31st January, 2018</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}

export default Blog