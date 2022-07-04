import React from 'react';
import '../App.css';
import './Introduction.css';
import { Link } from 'react-router-dom';

function Introduction() {

	return (
		<div className='hero-container' id='hero'>
			<img className="me-img" alt='okra' src="images/profile_pic-web.png" width="550"/>
			<div className="text-block">
			    <h1 className="title" style={{marginBottom: "10px"}}>Hi, I'm Okra Livia!</h1>
			    <p>I am a UX/UI designer from Stockholm, I love design and I’m all about designing multimodal and creative 
			    solutions where the user is in focus. </p> 

				<p>My background is from KTH where I have studied Media Technology engineering with a <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
				target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a>. I truly enjoy 
				building beautiful user experiences for both digital and physical products as well as understanding the psychology 
				behind user interactions.
				</p>
				<Link to="/about" style={{fontWeight: "bold"}}>Read more</Link>
			</div>
		</div>
	)
}

export default Introduction;