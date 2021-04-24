import React from "react"
import '../../App.css';

function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>AR | UNITY | ENTERTAINMENT</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>OsqledARen</h1>
				   <h4>OsqledARen is a school project in which we created a mobile 
				   experience combining AR technology and a printed magazine. The AR functions extended the printed 
				   information and gave the readers the possibility to interact with the content in new and 
				   exciting ways.</h4>
				   <br/>
				   <h4>OsqledARen is the outcome from a group project of four people in the course Multimodal Interaction and 
				   Interfaces at KTH. My part of the project was to create the interaction for the sound modality.</h4>
	          </div>
	          <div>
	            <iframe title="OsqledARen video" src="https://player.vimeo.com/video/451970116" frameborder="0" 
	             allow="autoplay; fullscreen" allowfullscreen></iframe>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;