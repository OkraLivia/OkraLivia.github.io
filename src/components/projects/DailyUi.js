import React, { useEffect } from "react";
import '../../App.css';
import UiGallery from '../UiGallery';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items-text-block'>
	          <h4 className='technologies'>UI DESIGN | FIGMA | DAILY CHALLENGE</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Daily UI</h1>
				   <span><a href="https://www.dailyui.co/" target='_blank' rel="noreferrer">Daily UI</a> is a subscription where one is prompted with daily design challenges that are aimed
				   to help designers develop their skills. For 100 days you will recieve a design prompt that varies in
				   difficulty from small interface elements to more elaborate tasks. I signed up to this mainly to learn
				   Figma better and to evolve my design skills. Here are some of my creations!
					</span>
					<UiGallery />
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;