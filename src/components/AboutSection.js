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
				    <p>My name is Okra Livia Inkeri-Dimle, most people call me Okra, and I'm born and raised on Södermalm in Stockholm. 
				    My mother is from Finland and my father is from Sweden
					so I have grown up with both the Finnish and Swedish culture, which has been great and given me different perspectives on things. 
					My friends would describe me as a calm and fun-loving person. My freetime I like to spend drawing, taking care of 
					my plants and drinking craft beer.</p> <br/>

					<p>I got my interest for UX/UI design from my time at KTH in Stockholm where I have studied Media Technology with 
					a <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
					target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a> and a specialization in 
					Physical Interaction Design. I have experience in designing interactive prototypes with multimodality 
					in focus as well as HCI, UX/UI design, UX research, web development and graphic design from my time at KTH. These skills are combined 
					with experiences from personal side projects and 
					from working as a designer at <a href="https://www.netlight.com/" target="_blank" rel="noreferrer" className="nl-link">Netlight </a> 
					 as well as working as a UX/UI designer at <a href='https://www.twain.se/' target='_blank' rel="noreferrer">Twain</a>. 
					This portfolio is an example of a personal side project that I have made using React. 
					</p><br/>

					<p>I'm passionate about designing creative solutions where the user is in focus. I have always been interested in design 
					and beautiful and interesting aesthetics in both physical as well as digital products. I really enjoy building beautiful 
					user experiences, understanding the psychology behind user interactions and I’m always eager to try out new UX/UI trends. 
					It's really important for me to feel that my work is of importance.</p> 

					<p>Feel free to contact me, I'm always up for a fika!</p>

					<p><span style={{fontWeight: "bold", color: "#F77B80"}}> Email: </span>
					okralivia@gmail.com </p>
					<p><span style={{fontWeight: "bold", color: "#F77B80"}}> Phone: </span>+46 70 744 36 60 </p>
					
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
