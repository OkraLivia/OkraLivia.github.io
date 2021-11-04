import React from 'react';
import '../App.css';
import './Introduction.css';
import { Link } from 'react-router-dom';

function Introduction() {

	return (
		<div className='hero-container' id='hero'>
			<img className="me-img" alt='okra' src="images/profile_pic.png" width="550"/>
			<div className="text-block">
			    <h1 className="title" style={{marginBottom: "10px"}}>Hi, I'm Okra Livia!</h1>
			    <p>I love design and I’m all about designing multimodal and creative 
			    solutions where the user is in focus.</p> 

				<p>I’m currently finishing up my <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
				target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a> 
				at KTH in Stockholm. I have a specialisation in physical interaction 
				design and I enjoy building beautiful user experiences for both digital and physical 
				products as well as understanding the psychology behind user interactions.</p>
				<Link to="/about" style={{fontWeight: "bold"}}>Read more</Link>
			</div>
		</div>
	)
}

export default Introduction;