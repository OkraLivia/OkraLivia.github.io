import React from "react"
import '../../App.css';

function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>UX DESIGN | USER RESEARCH | PROBES</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Bedtime</h1>
				   <h4>In this project our task was to create an experience for someone else. The lead word for my experience was 
				   <text style={{backgroundColor: '#d8f2f2'}}> bedtime</text>. With the help of interviews and probes I gathered that my participant usually has a lot on 
				   their mind when they go to bed in the evening and therefor have a hard time winding down and falling asleep. 
				   Furthermore, they like warm colors and since they are a exchange student they miss home and their family.  
				   Based on these findings I created a relaxing ritual for when one can't fall asleep or is feeling anxious. The 
				   idea of the experience is that one is laying in bed and a (for this project conceptual) system connected to an 
				   eye tracking device projects a sky in the ceiling above the bed. For every deep breath the sky changes color 
				   within the color scheme of a sunset at the same pace as one's breathing. When the sky is dark and the stars and 
				   moon are visible it is possible to draw constellations in the sky between the stars using eye tracking.</h4>
				   <br/>
				   <h4>This experience is the outcome from a project I did by myself in the course User Experience Design and 
				   Evaluation at KTH.</h4>
	          </div>
	          <div style={{marginTop:'100px'}}>
	            <iframe title="Bedtime presentation" src="images/Bedtime - Okra Livia Inkeri Dimle.pdf" frameborder="0" 
	             allowfullscreen></iframe>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;