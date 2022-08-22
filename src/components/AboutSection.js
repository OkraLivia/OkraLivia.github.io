import React, { useEffect } from 'react';
import '../App.css';
import './AboutSection.css';
import { Link } from 'react-router-dom';

function AboutSection() {

	useEffect(() => {
	  window.scrollTo(0, 0)
	}, [])

	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items txt'>
	            <h1 className="title" style={{marginBottom: "10px"}}>So, who am I?</h1>
				    <p>My name is Okra Livia Inkeri-Dimle, but most people call me Okra. I'm from Stockholm where I have grown up in a 
				    family with one leg in Finnish culture and the other in Swedish culture. Having parets with different backgrounds 
				    have taught me to see things from different perspective, something that has come in handy in my everyday life, for 
				    instance when interacting with people and when solving problems at work. My friends would describe me as a calm and 
				    fun-loving person. My freetime I like to spend drawing, taking care of my plants and drinking craft beer.</p> <br/>

					<p>I found my interest for UX/UI design during my time at KTH where I have studied Media Technology with 
					a <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
					target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a> and a specialization in 
					Physical Interaction Design. I have experience in designing interactive prototypes with multimodality 
					in focus as well as HCI, UX/UI design, UX research, web development and graphic design. These skills are combined 
					with experiences from personal side projects and 
					from working as a designer at <a href="https://www.netlight.com/" target="_blank" rel="noreferrer" className="nl-link">Netlight </a> 
					 as well as working as a UX/UI designer at <a href='https://www.twain.se/' target='_blank' rel="noreferrer">Twain</a>. I have also worked
					 ideally for several yeara as an illustrator at <a href="https://osqledaren.se/" target="_blank" rel="noreferrer">Osqledaren</a>, 
					 KTH’s union paper that reaches the roughly 10 000 union members. This portfolio is an example of a personal side project that I have made using React. 
					</p><br/>

					<p>I'm passionate about designing creative solutions where the user is in focus. I have always been interested in design 
					and beautiful and interesting aesthetics in both digital as well as physical products. I really enjoy building good looking 
					user experiences and understanding the psychology behind user interactions. I’m always eager to try out new UX/UI trends and 
					it is really important for me to feel that my work is of importance.</p> 

					<p>Feel free to contact me, I'm always up for a fika!</p><br/>

					<p><span style={{fontWeight: "bold", color: "#F77B80"}}> Email: </span>
					okralivia@gmail.com </p>
					
					<p style={{marginTop:"20px"}}>
					<Link to="/CV_OkraLivia_2022.pdf" target="_blank" className='cv'>Open CV</Link>
					<a href='https://www.linkedin.com/in/okralivia-inkeri-dimle/' target="_blank" 
					className="fa fa-linkedin" rel="noopener noreferrer">
					</a>
					</p>
	          </div>
	          <div className='about-link-items me'>
	            <img className="about-img" src="images/OkraLiviaNew.png" width="250" alt='okra'/>
	            <div  className='squares'>
	            <div className="square"></div>
	            <div className="square2"></div>
	            </div>
	          </div>
	        </div>
	      </div>
    </div>
	)
}

export default AboutSection;
