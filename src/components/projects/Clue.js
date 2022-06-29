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
	            <h1 className="title" style={{marginBottom: "10px"}}>Redesign of the Clue-app</h1>
				   <p>This is a project I did in my freetime using Adobe XD. I thought it would be a fun and 
				   interesting task to redesign the period tracking app <a href='https://helloclue.com/' target='_blank' rel="noreferrer">Clue</a> giving 
				   it a more modern look with a new and fresh color scheme as well as some features I have been
				   missing in the app. Since I have been using this app for quite some time I have had the time
				   to think about and discover areas that in my opinion need some improvement.</p>
				   <p>I started by creating a moodboard for the feeling I was after for the app. I researched what 
				   the new UI trends were and looked at other apps to get inspiration
				   for my redesign. I proceeded to create a color scheme that is more energetic and that I thought suited the 
				   	purpose of the app, that is period tracking, in a nice way. I wanted to make tracking one's period a fun
				   	experience. I went through the functionalities of the
				    existing app, listing the things that I considered as pain points after which I started to implement the 
				    new design. I have not used personas or feedback from other users because I wanted to design an app that
				    fit my needs and preferences since the main goal of this project was to become even better at using Adobe XD
				    and to try out redesigning an already existing app.</p>
	          </div>

	          <div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper">
						<ImageSlider slides={ClueData} double={true}/>
					</div>
				</div>
			</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;