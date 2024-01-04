import React, { useEffect } from "react";
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
	          <h4 className='technologies'>UX DESIGN | USER RESEARCH | PROBES</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Bedtime</h1>
				   <p>In this project our task was to design an experience for someone else. The lead word for the experience I was creating was
				   <span style={{backgroundColor: '#d8f2f2'}}> bedtime</span>. With the help of interviews and probes I gathered that my client usually has a lot on 
				   their mind when they go to bed in the evening and therefore have a hard time winding down and falling asleep. 
				   Furthermore, they like warm colors and since they are a exchange student they miss home and their family.  
				   Based on these findings I created a relaxing ritual for when one can't fall asleep or is feeling anxious. The 
				   idea of the experience is that one is laying in bed and a (for this project conceptual) system connected to an 
				   eye- and motion tracking device projects a sky on the ceiling above the bed. For every deep breath the sky changes color 
				   within the color scheme of a sunset at the same pace as one's breathing. In this way one can be more aware of one's breathing and
				    try to take deeper and slower breaths. When the sky is dark and the stars and 
				   moon are visible one can draw constellations in the sky between the stars using eye tracking.</p>
				 
				   <p>This experience is the outcome from a project I did by myself in the course <span style={{fontStyle:'italic'}}>User Experience Design and 
				   Evaluation</span> at KTH. To create this experience I used interviews, probes, moodboards, hybrid sketching and finally Adobe After 
				   Effects to create a demo.</p>
				   <a href='images/Bedtime - Okra Livia Inkeri Dimle.pdf' target='_blank' style={{fontWeight:'bold'}}>Link to presentation slides</a><br/>
	          </div>
	          <div style={{marginTop: '5em'}}>
	             <embed className='bedtimePDF' title="Bedtime presentation" src="images/Bedtime - Okra Livia Inkeri Dimle.pdf#toolbar=0&navpanes=0&scrollbar=0"  width="550px" 
	             height="80%" frameBorder="0" type="application/pdf" scrolling='no' ></embed>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;