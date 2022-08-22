import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards" id='cards'>
			<h1 className="title">Selected Projects </h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/electrolux-logo.png"
						text="Electrolux mobile guidelines"
						path="/electrolux"
						/>
						<CardItem src="images/study_spots.png"
						text="Study Places"
						path="/studyplaces"
						/>
						<CardItem src="images/KTH.png"
						text="Sonified Map"
						path="/sonifiedmap"
						/>
						<CardItem src="images/AR.png"
						text="OsqledARen"
						path="/osqledaren"
						/>
						{/*<CardItem src="images/hunt_the_thimble.png"
						text="Hunt the Thimble"
						path="/huntthethimble"
						/>*/}
					</ul>
					<ul className="cards__items">
						<CardItem src="images/LightForest-web.png"
						text="Light Forest"
						path="/lightforest"
						/>
						<CardItem src="images/night_sky.png"
						text="Experience design: Bedtime"
						path="/bedtime"
						/>
						{/*<CardItem src="images/PerceptionPoster.png"
						text="Perception Project"
						path="/perceptionproject"
						/>*/}
						<CardItem src="images/invitation.png"
						text="Graphic profile for wedding"
						path="/wedding"
						/>
						<CardItem src="images/dailyUI.png"
						text="Daily UI"
						path="/dailyui"
						/>
						<CardItem src="images/clue1.png"
						text="Clue-app redesign"
						path="/clue"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;