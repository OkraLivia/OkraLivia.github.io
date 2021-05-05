import React, { useEffect } from "react"
import '../../App.css';
import ImageSlider from '../ImageSlider';
import { ClueData } from '../SliderData';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 className='technologies'>ADOBE XD | REDESIGN | IPHONE APP</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Redesign of the app Clue</h1>
				   <p>This is a project I did in my freetime using Adobe XD. I thought it would be a fun and 
				   interesting task to redesign the period tracking app Clue giving 
				   it a more modern look with a new and fresh color scheme as well as some features I have been
				   missing in the app. Since I have been using this app for quite some time I have had the time
				   to think about and discover areas that in my opinion need some improvement.</p>
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