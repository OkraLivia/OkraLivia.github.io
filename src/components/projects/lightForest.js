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
	          <h4 className='technologies'>ARDUINO | CONSTRUCTION | PHYSICAL INTERACTION</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Light Forest</h1>
				   <p>The Swedish winters are dark, cold and wet. This however does not affect children’s 
				   excitement to play outside. Therefore, we created the Interactive Light Forest. A project 
				   made for the concept of the Winter Playground. The concept is a prototype of an interactive 
				   Light Forest where four sensors trigger different types of lights patterns. Watch the video to
				   learn more about how we created this project.</p>
				   <br/>
				   <p>This project is the outcome from a group project of four people in the course <span style={{fontStyle:'italic'}}>Physical 
				   Interaction Design</span> at KTH. In this project I did the construction of the physical forest as 
				   well as a lot of the soldering.</p>
	          </div>
	          <div>
	          	<iframe title="Light Forest video" src="https://drive.google.com/file/d/15AXryTpEiGn8IqukKAG0wD3YNczVnjry/preview" 
	          	frameBorder="0" style={{width:'‪1 920px', height:'1 080px'}} allow="autoplay; fullscreen" allowfullscreen></iframe>
	          	<p className='play-link'>Problem playing the video? Click <a href="https://drive.google.com/file/d/15AXryTpEiGn8IqukKAG0wD3YNczVnjry/view" 
	          	target='_blank' rel="noreferrer"> here</a> to watch it.</p>
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;