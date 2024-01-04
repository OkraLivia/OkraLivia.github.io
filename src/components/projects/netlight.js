import React, { useEffect } from "react"
import '../../App.css';
import { Link } from 'react-router-dom';
import ImageSlider from '../ImageSlider';
import { NlImages } from '../SliderData';

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
	          <h4 className='technologies'>GRAPHIC DESIGN | BRAND IDENTITY | CONSULTING</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Netlight</h1>
				   <p>From 2019 to 2021 I worked as a graphic designer at IT and management 
					consulting company, <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">Netlight</a>. 
					As a graphic designer I'm part of the design studio which is a self driven part of the company where us designers 
					have the ownership and a big impact on how the Netlight brand should look like. Since we are self driven there is 
					a lot of responsibility and being resourceful which has enabled me to grow a lot as a designer and person. In my role I consult 
					stakeholders about what their vision is for a certain design, do research on the subject, handle feedback and 
					motivate my design decisions and deliver to a deadline. We work with all parts of Netlight and support the nine 
					offices around Europe both locally and remotely, from sales and recruitment to event experiences and professional 
					development. In my role I have gained knowledge about Netlight's graphic profile and adapted my design aesthetics 
					to go with it. I have also had the opportunity to onboard new team members and thereby developed my pedagogic skills. 
					Through my work I have broadened my knowledge about the Adobe suite, in particular Illustrator, Photoshop, Lightroom, 
					After Effects and InDesign.</p>
				   <p>Some of the work that I've done at Netlight can be seen in the image gallery.</p>
	          </div>

	          <div className="cards">
				<div className="cards__container">
					<div className="cards__wrapper otherCards__nl__info" key={ImageSlider.slides}>
						<ImageSlider slides={NlImages} work={true} className='NLtext' />
					</div>
				</div>
			</div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;