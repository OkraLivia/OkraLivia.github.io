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
	          <h4 className='technologies'>AR | UNITY | ENTERTAINMENT</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>OsqledARen</h1>
				   <p>Since all members of this project group were engaged in the student union's paper, Osqledaren, 
				   it felt natural for us to create a multimodal concept involving the magazine. OsqledARen is a project in which we created a mobile 
				   experience combining AR technology and a printed Osqledaren magazine. The AR functions extends the printed 
				   information and gives the reader the possibility to interact with the content in new and 
				   exciting ways, for example by watching videos and listening to music referred to in articles. Watch the video to 
				   see how it works.</p>
				   <br/>
				   <p>OsqledARen is the outcome from a group project of four people in the course <span style={{fontStyle:'italic'}}>Multimodal Interaction and 
				   Interfaces</span> at KTH. In this project we used Unity and Android smartphones. My part of the project was to create 
				   the interaction for the sound modality.</p>
	          </div>
	          <div>
	            <iframe title="OsqledARen video" src="https://player.vimeo.com/video/451970116" frameBorder="0" 
	             allow="autoplay; fullscreen" allowfullscreen></iframe>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;