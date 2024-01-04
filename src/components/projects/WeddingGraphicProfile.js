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
	          <h4 className='technologies'>DESIGN CONCEPT | GRAPHIC PROFILE | UX & UI</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Graphic profile for wedding</h1>
				   <p>I was trusted with developing the graphic profile for a wedding that took place in August 2022. It was an outdoors 
				   wedding, which the couple wanted to reflect in all the visual material. Their theme was summery and romantic with green 
				   and pink being the main colors. The concept I came up with is light and quite simplistic, I arranged flowers and leaves 
				   along the top and bottom to frame everything in and to give the design a romantic feeling.
				   </p>
				   <p>The outcome of this project involves everything from physical invitations to signs for the venue as well as a 
				   responsive webpage. The webpage is a collaboration between me and my partner and is made from scratch using React and Firebase 
				   as the database. He was responsible for the backend while I took care of the frontend and UX. The most prominent design element
				    is the flower frame that is used in all the different deliveries to tie them all together. 
				   </p>
				   <p>This was a very fun project to work with since I got the opportunity to work with a lot of different mediums and 
				   think about how to translate a design to work with different use cases as well as to practice my React skills. The images 
				   display the invitation card on the top and below it is the webpage on both mobile and desktop.
				   </p>
	          </div>
					<div className="projectCard">
						<div className="cards__wrapper">
							<ul className="wedding_img_container">
								<img src="/images/wedding-invite.png" alt="img" className='wedding-img' style={{maxWidth:'500px'}} />
								<img src="/images/wedding-website.png" alt="img" className='wedding-img' style={{maxWidth:'500px'}} />
							</ul>
						</div>
				</div>
	        </div>
	      </div>
    </div>
	)
}

export default About;