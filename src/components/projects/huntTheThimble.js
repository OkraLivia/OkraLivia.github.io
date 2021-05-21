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
				   <p>In this project we investigated how the performance of a player is impacted depending on what feedback the 
				   player is provided with while playing a smartphone game. This we did by developing a game for Android 
				   smartphones based on the traditional game “Hunt the Thimble” where in our version the player moves around in a
				   2D room by tilting the phone. Three versions of the game with different feedback was created: vibrotactile 
				   feedback combined with visual feedback, vibrotactile feedback only and lastly visual feedback only.
				   </p>
				   <br/>
				   <p>The game was played in two sets with the different feedback types. The results from the rounds with only visual feedback 
				   were unchanged between both sets but resulted in quick times, while the rounds with only vibration feedback took clearly the 
				   longest to complete. One participant stated that the vibration patterns created 
				   an additional layer of complexity, since one had to understand the 
				   patterns to be able to navigate the game field with them. The rounds with both haptic and visual feedback 
				   were slightly slower than the rounds with only visual feedback in the first set. However, the times improved in the 
				   second set and ended up being the fastest, which entails that with training this is the most successful feedback when 
				   searching for the thimble.</p>
				   <br/>
	          </div>

	          <div className="thimble_cards">
		          	<p>
			          	This app is the outcome from a group project of two people in the course Haptic, Tactile 
						and Tangible Interaction at KTH. To create the app we used JavaScript, DeviceOrientationEvent to keep track
						of how the phone is being tilted, Vibration API to create the vibration patterns and HTML and CSS. In this 
						project I designed the vibration patterns and the UI.
					</p>
					<div className="projectCard">
						<div className="cards__wrapper">
							<ul className="thimble_img_container">
								{/*<img src="/images/blue.png" alt="img" className='thimble-img' />
								<img src="/images/yellow.png" alt="img" className='thimble-img' />
								<img src="/images/red.png" alt="img" className='thimble-img' />*/}
								<img src='/images/thimble.png' alt='thimble' className='thimble-img' />
								<p className='thimble_img_text'>
									First image, the user is "<span style={{color:'blue'}}>cold</span>", that is they are far away from the thimble. In the second
									image they are closer or "<span style={{color:'#F79014'}}>a bit warmer</span>" and in the last image they have found the thimble and 
									are "<span style={{color:'red'}}>warm</span>".
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