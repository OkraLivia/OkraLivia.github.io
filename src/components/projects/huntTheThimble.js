import React from "react"
import '../../App.css';

function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>HAPTICS | GAME DEVELOPMENT | ANDROID</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Hunt the Thimble</h1>
				   <h4>In this project we investigated the difference in performance and whether or not the 
				   combination of visual and vibrotactile feedback increase the performance of playing a mobile 
				   game depending on what feedback is provided. This we did by developing a game for Android 
				   smartphones based on the traditional game “Hunt the Thimble”. Three versions of the game with 
				   different feedback was created: vibrotactile feedback combined with visual feedback, 
				   vibrotactile feedback only and lastly visual feedback only.</h4>
				   <br/>
				   <h4>This app is the outcome from a group project of two people in the course Haptic, Tactile 
				   and Tangible Interaction at KTH. In this project I designed the vibration patterns and the UI.</h4>
	          </div>

	          <div className="cards">
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
					<img src="/images/blue.png" alt="img" width="170" style={{borderRadius: "7px",
					 marginRight: "20px", boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)"}}/>
					<img src="/images/yellow.png" alt="img" width="170" style={{borderRadius: "7px", 
					marginRight: "20px", boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)"}}/>
					<img src="/images/red.png" alt="img" width="170" style={{borderRadius: "7px", 
					boxShadow: "0 6px 20px rgba(56, 125, 255, 0.17)"}}/>
					</ul>
					<ul>First image: the user is "cold", that is they are far away from the thimble. In the second
					image they are closer or "a bit warmer" and in the last image they have found the thimble and are "warm".</ul>
					</div>
					</div>
					</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;