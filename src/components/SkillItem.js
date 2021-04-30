import React from 'react';

function SkillItem(props) {
	return (
		<>
			<li className="skillCards__item" key={props.index}>
				<div className="skillCards__item__info" style={{backgroundColor:props.backgroundColor}}>
					<h1 className="labelTitle">{props.label}</h1><div className="eduTitle">{props.title}</div>
					<h5 className="skillCards__item__text">{props.text}</h5>
				</div>
			</li>
		</>
	);
}

export default SkillItem;