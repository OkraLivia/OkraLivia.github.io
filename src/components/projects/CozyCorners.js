import React, { useEffect } from "react"
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { CozyCorners } from '../SliderData';


function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])

	return (

		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          	<h4 className='technologies'>JAVASCRIPT | HTML/CSS | UI & UX </h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Cozy Corners</h1>
				   <p>Cozy Corners makes sharing your favourite places easier. A user with a profile can add a new 
				   cozy corner to a map by filling in the longitude and latitude as well as additional information 
				   about the place, such as a description, images and tags. Other users' cozy corners can be explored even 
				   without a profile.</p>
				   <br/>
				   <p>Cozy Corners is the outcome from a group project of three people in the course Mobile Development 
				   with Web Technologies at KTH. The app was created using HTML, CSS, JavaScript and a Firebase-database. My 
				   responsibility in this project was the UX/UI as well as programming the functionality of 
				   creating profiles.</p>
	          </div>

	          <div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper">
						<ImageSlider slides={CozyCorners} greenglow={true}/>
					</div>
				</div>
			</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;