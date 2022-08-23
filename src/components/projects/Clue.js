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
	          <h4 className='technologies'>FIGMA | REDESIGN | IPHONE APP</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Redesign of the Clue-app</h1>
				   <p>This is a project I did in my free time using Figma. I thought it would be a fun and interesting task to redesign 
				   the period tracking app <a href='https://helloclue.com/' target='_blank' rel="noreferrer">Clue</a>, giving it a more 
				   modern look with a new and fresh color scheme as well as some features I have been missing. I have been 
				   using this app for quite long, so I have had the time to think about and discover areas that in my opinion need some 
				   improvement.</p>
				   <p>I wanted to redesign the app to be more inviting, it should be “fun” to track one’s period. With this in mind 
				   and with inspiration from UI trends and other period tracking apps, I started by creating a moodboard and a color 
				   scheme that is more energetic and has brighter colors for my redesign. I went 
				   through the functionalities of the existing app, listing the things that I considered as pain points, after which I 
				   started to implement the new design. I wanted to play around in Figma and try 
				   tp redesign an already existing app, so no personas or other UX research methods were used when designing the 
				   app.</p>
				   <p>
				   	I like tracking things and collecting data, which might be because of my engineering background, so I 
				   	added some more tracking possibilities. For instance, it is possible to add notes to days as well as to 
				   	display how much, and what kind of, pain one is experiencing or how heavy one’s flow is.
				   </p>
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