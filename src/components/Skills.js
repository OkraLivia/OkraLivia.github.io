import React, { useEffect } from 'react';
import SkillItem from './SkillItem';
import './Skills.css';

/*"Blue": "#E4F2F2",
"Salmon": "#FDC3BB",
"Red": "#F77B80",*/

function Skills(props) {
	useEffect(() => {
	  window.top.scrollTo(0, 40)
	}, [])

	return (
		<div className="skillCards" id='skills'>
			<h1 className="title">Skills</h1>
			<div className="skillCards__container">
				<div className="skillCards__wrapper">
					<ul className="skillCards__items">
						<div className='skillGroup'>
							<SkillItem backgroundColor="#FDC3BB"
							text= {[<p style={{marginBottom:'0.2em'}}><span className='flag'>🇫🇮</span><span style={{fontWeight: "900"}}> Finnish </span> (native tongue)</p>, 
							<p style={{marginBottom:'0.2em'}}><span className='flag'>🇸🇪</span><span style={{fontWeight: "900"}}> Swedish </span> 
							 (native tongue)</p>, <p style={{marginBottom:'0.2em'}}><span className='flag'>🇬🇧</span><span style={{fontWeight: "900"}}> English </span> 
							(fluent)</p>,<span className='flag'>🇪🇸</span>,<span style={{fontWeight: "900"}}> Spanish </span>,<span> (limited)</span>]}
							label="Languages"
							index="1"
							/>
							<SkillItem backgroundColor="#F77B80" 
							text="I have experience working with HTML, CSS, JavaScript, React, Python, XML, PHP, SQL"
							label="Programming"
							index="3"
							/>
						</div>
						<div className='skillGroup'>
							<SkillItem backgroundColor="#E4F2F2"
								text="Illustrator, Photoshop, XD, After Effects, Audition, InDesign, Lightroom"
								label="Adobe Creative Suite"
								index="2"
							/>
							<SkillItem backgroundColor="#FDC3BB"
							text="Figma, Blender, Unity, traditional and digital art"
							label="Other"
							index="4"
							/>
						</div>
					</ul>
				</div>
			</div>
			<h1 className="title" style={{marginTop: '1.25em'}}>Education</h1>
			<div className="skillCards__container">
				<div className="skillCards__wrapper">
					<ul className="skillCards__items">
						<SkillItem backgroundColor="#E4F2F2"
						text="
						KTH Royal Institute of Technology
						Stockholm, Sweden
						2015-2018"
						title="B.Sc. Media Technology"
						index="5"
						/>
						<SkillItem backgroundColor="#FDC3BB"
						text="
						KTH Royal Institute of Technology 
						Stockholm, Sweden
						2018-present"
						title="M.Sc.Eng. Media Technology, 
						M.Sc. Interactive Media Technology"
						index="6"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Skills;