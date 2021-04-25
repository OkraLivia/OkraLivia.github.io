import React from "react"
import '../../App.css';

function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 className='technologies'>SOUNDSCAPE | MAX/MSP | MOTION CAPTURE</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Sonified Map</h1>
				   <h4>In this project we used Max/MSP and a motion capture system to create a sonified map of 
				   the KTH campus Valhallavägen with two scenarios. One displays the sounds of the present and 
				   the other the possible sounds of the future. By exploring this map you can follow a day in the 
				   life of a KTH student, the sounds create an immensive experience and provides a concept of time 
				   passing.</h4>
				   <br/>
				   <h4>This map is the outcome from a group project of two people in the course Sound in Interaction 
				   at KTH. In this project me and my project partner split the work in half since we had the same set 
				   up for the future and present soundscapes.</h4>
	          </div>
	          <div>
	            <iframe title="Sonified map video" src="https://player.vimeo.com/video/399129124" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;