import React from 'react';
import '../App.css';
import './Introduction.css';
import { Link } from 'react-router-dom';

function Introduction() {

	return (
		<div className='hero-container' id='hero'>
			<img className="me-img" alt='okra' src="images/OkraLivia_bw.png" width="250"/>
			<div className="text-block">
			    <h1 className="start-title" style={{marginBottom: "10px", marginTop: "0"}}>Hi, I'm Okra Livia!</h1>
			    <p className='intro-text'>I am a UX/UI designer from Stockholm, I love art and design and I’m all about designing multimodal and creative 
			    solutions where the user is in focus. </p> 

				<p className='intro-text'>My background is from KTH where I have studied Media Technology engineering with a <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
				target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a>. I truly enjoy 
				building beautiful user experiences for both digital and physical products as well as understanding the psychology 
				behind user interactions.
				</p>
				<Link to="/about" className="about-link">Read more</Link>
			</div>
		</div>
	)
}

export default Introduction;