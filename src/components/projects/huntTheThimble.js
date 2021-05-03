import React, { useEffect } from "react"
import '../../App.css';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])
	
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 className='technologies'>HAPTICS | GAME DEVELOPMENT | ANDROID</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Hunt the Thimble</h1>
				   <p><h4>In this project we investigated the difference in performance and whether or not the 
				   combination of visual and vibrotactile feedback increase the performance of playing a mobile 
				   game depending on what feedback is provided. This we did by developing a game for Android 
				   smartphones based on the traditional game “Hunt the Thimble” where in our version the player moves around in a
				   2D room by tilting the phone. Three versions of the game with different feedback was created: vibrotactile 
				   feedback combined with visual feedback, vibrotactile feedback only and lastly visual feedback only.</h4></p>
				   <br/>
				   <p><h4>This app is the outcome from a group project of two people in the course Haptic, Tactile 
				   and Tangible Interaction at KTH. To create the app we used JavaScript, DeviceOrientationEvent to keep track
				   of how the phone is being tilted, Vibration API to crete the vibration patterns and HTML and CSS. In this 
				   project I designed the vibration patterns and the UI.</h4></p>
	          </div>

	          <div className="cards">
					<div className="projectCard">
						<div className="cards__wrapper">
							<ul className="thimble_img_container">
								{/*<img src="/images/blue.png" alt="img" className='thimble-img' />
								<img src="/images/yellow.png" alt="img" className='thimble-img' />
								<img src="/images/red.png" alt="img" className='thimble-img' />*/}
								<img src='/images/thimble.png' alt='thimble' className='thimble-img' />
								<p>
									First image: the user is "cold", that is they are far away from the thimble. In the second
									image they are closer or "a bit warmer" and in the last image they have found the thimble and 
									are "warm".
								</p>
							</ul>
						</div>
					</div>
				</div>
	        </div>
	      </div>
    </div>
	)
}

export default About;