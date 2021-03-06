import React, { useEffect } from "react"
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { StudyPlacesData } from '../SliderData';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])

	return (

		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 className='technologies'>FIGMA | UI & UX | USER RESEARCH</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Study Places</h1>
				   <p>In this project the task was to define a problem and a target group. To do this we used personas, empathy mapping and 
				   user journey workshops to find out what a relevant target group and its pain points are. What we decided to work 
				   with was students at universities and the struggle of finding suitable study spots. A survey conducted in this 
				   study showed that students had a strong interest in finding new study spots in the city, but with no good means 
				   to do so. The problem  was thereby defined as a lack of help in discovering study spaces in Stockholm. All team members
				   engaged in lo-fi sketching to explore the features to be implemented in the app. As a 
				   solution to the problem we developed a prototype in Figma to help local and international students find proper 
				   study places.</p>
				   <br/>
				   <p>This app is the outcome from a group project of four people in the course Media Lab at KTH. My responsibility 
				   in this project was to conduct user studies and I also created the entire prototype in Figma.</p>
	          </div>

	          	<div className="cards">
					<div className="cards__container">
						<div className="cards__wrapper">
							<ImageSlider slides={StudyPlacesData} glow={true}/>
						</div>
					</div>
				</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;