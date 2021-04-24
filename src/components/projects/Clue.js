import React from "react"
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { ClueData } from '../SliderData';



function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>ADOBE XD | REDESIGN | IPHONE</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Redesign of the app Clue</h1>
				   <h4>This is a project I did on my freetime using Adobe XD. I thought it would be a fun and 
				   interesting task to redesign the period tracking app Clue giving 
				   it a more modern look with a new and fresh color scheme as well as some features I have been
				   missing in the app. Since I have been using this app for quitet some time I have had the time
				   to think about and discover areas that in my opining need some work.</h4>
	          </div>

	          <div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper">
						<ImageSlider slides={ClueData} />
						
					</div>
				</div>
			</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;
