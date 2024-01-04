import React, { useEffect } from "react"
import '../../App.css';
import { Link } from 'react-router-dom';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	        <Link to="/" className='back-btn'>
    			<img src="/images/arrow-left.svg" alt='navimg' width="30" style={{marginTop:"1em"}}/>
    		</Link>
	          <div className='about-link-items'>
	          <h4 className='technologies'>SOUNDSCAPE | MAX/MSP | MOTION CAPTURE</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Sonified Map</h1>
				   <p>In this project we used Max/MSP and a motion capture system to create a sonified map of 
				   the KTH campus Valhallavägen that had two scenarios. One displays the sounds of the present and 
				   the other the possible sounds of the future. By exploring this map you can follow a day in the 
				   life of a KTH student, the sounds create an immersive experience and provide a concept of time 
				   passing.</p>
				   <br/>
				  <p>This map is the outcome from a group project of two people in the course <span style={{fontStyle:'italic'}}>Sound in Interaction</span> 
				   at KTH. In this project me and my project partner split the work in half and did one scenario each 
				   since we had the same set up for the future and present soundscapes.</p>
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