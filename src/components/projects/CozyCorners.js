import React from "react"
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { CozyCorners } from '../SliderData';


function About(props) {

	return (

		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>JAVASCRIPT | HTML/CSS | UI & UX </h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Cozy Corners</h1>
				   <h4>Cozy Corners makes sharing your favourite places easier. A user with a profile can add a new 
				   cozy corner to a map by filling in the longitude and latitude as well as additional information 
				   about the place, sucha as a description, images and tags. Other users cozy corners can be explored even 
				   without a profile.</h4>
				   <br/>
				   <h4>Cozy Corners is the outcome from a group project of three people in the course Mobile Development 
				   with Web Technologies at KTH. My responsibility of this project was the UI of the application as well 
				   as programming the functionality of creating profiles.</h4>
	          </div>

	          <div className="cards">
			<div className="cards__container">
				<div className="cards__wrapper">
					<ImageSlider slides={CozyCorners} greenglow={true}/>
					<div style={{width:"500px"}}>
					</div>
					</div>
					</div>
					</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;