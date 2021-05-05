import React from 'react';
import '../App.css';
import './AboutSection.css';
import { Link } from 'react-router-dom';

function AboutSection() {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	            <h1 className="title" style={{marginBottom: "10px"}}>So, who am I?</h1>
				    <p>My name is Okra Livia, I'm born and raised on Södermalm in Stockholm. My mother is from Finland and my father is from Sweden
					so I have grown up with both the Finnish and Swedish culture which has been great and given me different perspectives on things. 
					My friends would describe me as a calm and fun-loving person. My freetime I like to spend drawing, taking care of 
					my plants and drinking craft beer.</p> <br/>

					<p>Right now I'm finishing up my <a href='https://www.kth.se/en/studies/master/interactivemediatechnology/description-1.593765' 
					target='_blank' rel="noreferrer">
				M.Sc. in Interactive Media Technology </a> with a specialization in 
					Physical Interaction Design at KTH in Stockholm. I have experience in designing interactive prototypes with multimodality 
					in focus as well as HCI, UX design and research, web development and graphic design from my time at KTH, personal side projects and 
					from working as a designer at <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">Netlight</a>. 
					This portfolio that I have programmed in React is an example of a personal side project. 
					</p><br/>

					<p>I'm passionate about designing creative solutions where the user is in focus. Design is something 
					that I've always been interested in, both for shaping physical as well as digital products and I enjoy 
					building beautiful user experiences for IoT and AR. I also like working with rapid prototyping, 
					investigating different materials and creating interesting aesthetics. It's really important for 
					me to feel that my work is of importance. 
					Feel free to contact me, I'm always up for a fika!</p><br/>

					<p><span style={{fontWeight: "bold", color: "#F77B80"}}> Email: </span><a href = "mailto: okralivia@gmail.com">
					okralivia@gmail.com</a> </p>
					<p><span style={{fontWeight: "bold", color: "#F77B80"}}> Phone: </span>+46707443660 </p>
					
					<p style={{marginTop:"20px"}}>
					<Link to="/CV_OkraLivia_2021.pdf" target="_blank" className='cv'>Open CV</Link>
					<a href='https://www.linkedin.com/in/okralivia-inkeri-dimle/' target="_blank" 
					className="fa fa-linkedin" rel="noopener noreferrer">
					</a>
					</p>
	          </div>
	          <div className='about-link-items'>
	            <img className="about-img" src="images/OkraLiviaNew.png" width="250" alt='okra'/>
	            <div className="square"></div>
	            <div className="square2"></div>
	          </div>
	        </div>
	      </div>
    </div>
	)
}

export default AboutSection;
