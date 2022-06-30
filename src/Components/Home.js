import React from 'react'
import NavBar from './NavBar/NavBar'
import SuperSection from './SuperSection/SuperSection'
// import YelloNav from './YelloBar/YelloNav'
import About from './About/About'
import Coffee from './Coffee/Coffee'
import Review from './Review/Review'
import Blog from './Blog/Blog'
import Footer from './Footer/Footer'
function Home(){
  return (
	<div>
		{/* <YelloNav/> */}
		<NavBar/>
		<SuperSection/>
		<About/>
		<Coffee/>
		<Review/>
		<Blog/>
		<Footer/>
	</div>
  )
}

export default Home