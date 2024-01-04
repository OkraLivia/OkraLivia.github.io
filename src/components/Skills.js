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
	<h1 className="title">Skills & education</h1>
	<div className="skillCards__container">
		<div className="skillCards__wrapper">
			<ul className="skillCards__items">
				<div className='skillGroup'>
					<SkillItem backgroundColor="#fff"
						text= {[<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Figma </span></p>, 
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Dovetail </span></p>, 
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Blender </span></p>,
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Office suite </span></p>,
						<p><span style={{fontWeight:'500'}}> Adobe Creative suite </span></p>]}
						label="Software"
						index="1"
					/>
					<SkillItem backgroundColor="#fff"
						text= {[<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Prototyping </span></p>, 
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> User research </span></p>, 
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Design processes </span></p>,
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Programming </span><span style={{color:'#617072'}}> (HTML, CSS, JavaScript, React)</span></p>,
						<p style={{marginBottom:'0.2em'}}><span style={{fontWeight:'500'}}> Traditional art </span><span style={{color:'#617072'}}> (drawing, painting, photography, sculpting)</span></p>,
						<p><span style={{fontWeight:'500'}}> Digital art </span><span style={{color:'#617072'}}> (illustration, animation)</span></p>]}
						label="Practices"
						index="2"
					/>
				</div>
				<div className='skillGroup'>
					<SkillItem backgroundColor="#fff"
						text= {[<p style={{marginBottom:'0.2em'}}><span className='flag'>🇫🇮</span><span style={{fontWeight:'500'}}> Finnish </span><span style={{color:'#617072'}}>(native tongue)</span></p>, 
						<p style={{marginBottom:'0.2em'}}><span className='flag'>🇸🇪</span><span style={{fontWeight:'500'}}> Swedish </span><span style={{color:'#617072'}}>(native tongue)</span></p>, 
						<p style={{marginBottom:'0.2em'}}><span className='flag'>🇬🇧</span><span style={{fontWeight:'500'}}> English </span><span style={{color:'#617072'}}>(fluent)</span></p>,
						<p><span className='flag'>🇪🇸</span><span style={{fontWeight:'500'}}> Spanish </span><span style={{color:'#617072'}}> (limited)</span></p>]}
						label="Languages"
						index="3"
					/>
					<SkillItem backgroundColor="#fff"
						text= {[<p style={{marginBottom:'0.4em'}}><span style={{fontWeight:'500'}}>B.Sc. Media Technology</span> <p style={{color:'#617072'}}>KTH Royal Institute of Technology Stockholm, Sweden</p></p>,
						<p><span style={{fontWeight:'500'}}>M.Sc.Eng. Media Technology, M.Sc. Interactive Media Technology</span> <p style={{color:'#617072'}}>KTH Royal Institute of Technology Stockholm, Sweden</p></p>]}
						label="Education"
						index="4"
					/>
				</div>
			</ul>
		</div>
	</div>
	{/*<div className="skillCards__container">
		<div className="skillCards__wrapper">
			<ul className="skillCards__items">
				<SkillItem backgroundColor="#fff"
					text="
					KTH Royal Institute of Technology
					Stockholm, Sweden"
					title="B.Sc. Media Technology"
					index="5"
				/>
				<SkillItem backgroundColor="#fff"
					text="
					KTH Royal Institute of Technology 
					Stockholm, Sweden"
					title="M.Sc.Eng. Media Technology, 
					M.Sc. Interactive Media Technology"
					index="6"
				/>
			</ul>
		</div>
	</div>*/}
</div>
	);
}

export default Skills;