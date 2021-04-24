import React from "react"
import '../../App.css';

/*const ImageHoverZoom = ({ imagePath }) => {
return (
    <div className="img-wrapper">
        <img
            src='images/blue.png'
            alt=""
            className="hover-zoom"
        />
    </div>
);
};*/


function About(props) {
	return (
		<div className='about-container'>
	      <div className='about-links'>
	        <div className='about-link-wrapper'>
	          <div className='about-link-items'>
	          <h4 style={{marginBottom: "10px", color:"#F77B80"}}>COLOR COMBINATIONS | USER RESEARCH | UX DESIGN</h4>
	            <h1 className="title" style={{marginBottom: "10px"}}>Perception Project</h1>
				   <h4>Different colors can be used for evoking different emotions and associations and is an important factor when
				    creating a product or service. In this study we researched which emotions are related to which color combinations, 
				    as well as what companies are associated with those colors, using five websites with the same design but with 
				    different color schemes. In the end, each page had at least one emotion that had been chosen by at least half of 
				    the participants. Also, the majority of the participants perceived the color schemes with one color with different 
				    hues as harmonic, while the color schemes with contrasting colors mostly were perceived as chaotic.</h4>
				   <br/>
				   <h4>This study is the outcome from a group project of four people in the course Human Perception for Information 
				   echnology at KTH. In this project I worked with the appearance of the webpage and with user tests.</h4>
	          </div>
	          <div className='about-link-items'>
	            <object title="Perception" data="images/DT2350_PerceptionPoster.pdf" frameborder="0" 
	            width='500px' height='750px'></object>  {/*width='550px' height='800px'*/}
	          </div>
	        </div>
	      </div>
    </div>
	)
}
 
export default About;