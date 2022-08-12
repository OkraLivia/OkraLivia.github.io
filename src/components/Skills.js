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
								text="Adobe Creative Suite, Figma, Blender, Unity, Miro, Max/MSP"
								label="Software"
								index="1"
							/>
							<SkillItem backgroundColor="#F77B80" 
								text="HTML, CSS, JavaScript, React, Python, XML, PHP, SQL"
								label="Programming"
								index="2"
							/>
						</div>
						<div className='skillGroup'>
							<SkillItem backgroundColor="#E4F2F2"
								text= {[<p style={{marginBottom:'0.2em'}}><span className='flag'>🇫🇮</span><span style={{fontWeight: "800"}}> Finnish </span> (native tongue)</p>, 
								<p style={{marginBottom:'0.2em'}}><span className='flag'>🇸🇪</span><span style={{fontWeight: "800"}}> Swedish </span> 
								 (native tongue)</p>, <p style={{marginBottom:'0.2em'}}><span className='flag'>🇬🇧</span><span style={{fontWeight: "800"}}> English </span> 
								(fluent)</p>,<p style={{marginBottom:'0.2em'}}><span className='flag'>🇪🇸</span><span style={{fontWeight: "800"}}> Spanish </span><span> (limited)</span></p>,
								<span className='flag'>🇮🇹</span>,<span style={{fontWeight: "800"}}> Italian </span>,<span> (limited)</span>]}
								label="Languages"
								index="3"
							/>
							<SkillItem backgroundColor="#FDC3BB"
								text={[<p style={{marginBottom:'0.2em'}}><span>🎨</span><span style={{fontWeight: "800"}}> Traditional art </span></p>,<p>
								 (like drawing, painting, photograpy & sculpting)</p>,<p><span>💻</span><span style={{fontWeight: "800"}}> Digital art </span>
								 (like illustration & 3D modelling)</p>]}
								label="Other"
								index="4"
							/>
						</div>
					</ul>
				</div>
			</div>
			<h1 className="title">Education</h1>
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
						2018-2022"
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