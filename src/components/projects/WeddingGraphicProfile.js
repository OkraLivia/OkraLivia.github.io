import React, { useEffect } from "react"
import '../../App.css';

function About(props) {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])

/*function enlargeImg(img) {
	img.style.transform = "scale(1.5)";
	img.style.transition = "transform 0.25s ease";

	onClick={enlargeImg(this)}
}*/
	
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 className='technologies'>DESIGN CONCEPT | GRAPHIC PROFILE | UX & UI</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Graphic profile for wedding</h1>
				   <p>I was trusted with developing the graphic profile for a wedding that took place in August 2022. It was an outdoors 
				   wedding, which the couple wanted to reflect in all the visual material. Their theme was summery and romantic with green 
				   and pink being the main colors. The concept I came up with is light and quite simplistic, I arranged flowers and leaves 
				   along the top and bottom to frame everything in and to give the design a romantic feeling.
				   </p>
				   <br/>
				   <p>The outcome of this project involves everything from physical invitations to signs for the venue as well as a 
				   responsive webpage. The webpage is a collaboration between me and my partner and is made from scratch. He was 
				   responsible for the backend while I took care of the frontend and UX. The main thing about the design is the flower 
				   frame that is used in all the different deliveries to tie them together. 
				   </p>
				   <br/>
				   <p>This was a very fun project to work with since I got the opportunity to work with a lot of different mediums and 
				   think about how to translate a design to work with different use cases.
				   </p>
	          </div>

	          {/*<div className="thimble_cards">*/}
		          	{/*<p>
			          	This app is the outcome from a group project of two people in the course Haptic, Tactile 
						and Tangible Interaction at KTH. To create the app we used JavaScript, DeviceOrientationEvent to keep track
						of how the phone is being tilted, Vibration API to create the vibration patterns and HTML and CSS. In this 
						project I designed the vibration patterns and the UI.
					</p>*/}
					<div className="projectCard">
						<div className="cards__wrapper">
							<ul className="wedding_img_container">
								<img src="/images/wedding-invite.png" alt="img" className='wedding-img' style={{maxWidth:'500px'}} />
								<img src="/images/wedding-website.png" alt="img" className='wedding-img' style={{maxWidth:'500px'}} />
							</ul>
						</div>
					{/*</div>*/}
				</div>
	        </div>
	      </div>
    </div>
	)
}

export default About;