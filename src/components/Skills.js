import React from 'react';
import SkillItem from './SkillItem';
import './Skills.css';

// 	var bgColors = { 
//     "Blue": "#E4F2F2",
//     "Salmon": "#FDC3BB",
//     "Red": "#F77B80",
// };

function Skills(props) {
	return (
		<div className="skillCards" id='skills'>
			<h1 className="title">Skills</h1>
			<div className="skillCards__container">
				<div className="skillCards__wrapper">
					<ul className="skillCards__items">
						<div className='skillGroup'>
							<SkillItem backgroundColor="#FDC3BB"
							text="Finnish - native, Swedish - native
							English - fluent, Spanish - basic"
							label="Languages"
							index="1"
							/>
							<SkillItem backgroundColor="#F77B80"
							text="Illustrator, Photoshop, XD, After Effects, Audition, InDesign, Lightroom"
							label="Adobe Creative Suit"
							index="2"
							/>
						</div>
						<div className='skillGroup'>
							<SkillItem backgroundColor="#E4F2F2"
							text="I have experience working with HTML, CSS, JavaScript, React, Python, XML, PHP, SQL"
							label="Programming"
							index="3"
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
