import React, { useEffect } from "react";
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
	          <h4 className='technologies'>UX RESEARCH | BRAND GUIDELINES | BEST PRACTICES</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Electrolux mobile guidelines</h1>
				   <p>Together with the digital business design studio, <a href='https://www.twain.se/' target='_blank' rel="noreferrer">Twain</a>, 
				   we researched and developed guidelines with best practices 
				   regarding mobile first design for the <a href='https://www.electrolux.com/en/' target='_blank' rel="noreferrer">Electrolux brand sites</a>. The aim with the guidelines is to facilitate 
				   the work for designers and developers working with the Electrolux brand site across the different markets in 
				   Europe. Another important aspect of the guidelines was to highlight that designing for mobile first should be 
				   the approach when working with the website, since today the majority of sessions on e-commerce sites come from 
				   mobile devices.</p>
				 
				   <p>The guidelines covers a wide range of topics and examplify good and bad design decisions. For example, 
				   technical aspects are such as page loading speed, common viewport sizes and mobile versus desktop share of 
				   traffic to the brand site. Design best practices are also an important part of the guidelines containing 
				   guides for how to work with brand assets, colors and fonts, margins and button design, touch targets, scroll 
				   directions and overlays as well as how to optimise both visual and written content for browsing on mobile 
				   devices.</p>
	          </div>
				<div className="projectCard">
					<div className="cards__wrapper">
						<img src="images/mobile-guidelines.png" alt="guidelines" className="guidelines" style={{maxWidth:'500px', marginBottom:'10px'}}/>
					</div>
				</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;