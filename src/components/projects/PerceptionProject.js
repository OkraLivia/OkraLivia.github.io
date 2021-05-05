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
	          <h4 className='technologies'>COLOR COMBINATIONS | USER RESEARCH | UX DESIGN</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Perception Project</h1>
				   <p><h4>Different colors can be used for evoking different emotions and associations and is an important factor when
				    creating a product or service. In this study we researched which emotions are related to which color combinations, 
				    as well as what type of companies are associated with those colors, using five websites with the same design but with 
				    different color schemes. In the end, each page had at least one emotion that had been chosen by at least half of 
				    the participants. Also, the majority of the participants perceived the color schemes with different hues of one color 
				    as harmonic, while the color schemes with contrasting colors were mostly perceived as chaotic.</h4></p>
				   <br /> 
				   <p><h4>This study is the outcome from a group project of four people in the course Human Perception for Information 
				   technology at KTH. In this project I worked with the appearance of the webpage and with user tests and analysing the collected data.</h4></p>
				   <br /> <a href='images/DT2350_PerceptionPoster.pdf' target='_blank' style={{fontWeight:'600'}}>Link to our exhibition poster</a>
	          </div>
	          <div className='about-link-items'>
	            <embed title="Perception" src="images/DT2350_PerceptionPoster.pdf" frameborder="0" 
	            width='500px' height='650px' className='perceptionPDF'></embed>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;