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
						<CardItem src="images/AR.png"
						text="OsqledARen"
						path="/osqledaren"
						/>
						<CardItem src="images/hunt_the_thimble.png"
						text="Hunt the Thimble"
						path="/huntthethimble"
						/>
						<CardItem src="images/LightForest.png"
						text="Light Forest"
						path="/lightforest"
						/>
						<CardItem src="images/KTH.png"
						text="Sonified Map"
						path="/sonifiedmap"
						/>
						
					</ul>
					<ul className="cards__items">
						<CardItem src="images/clue1.png"
						text="Clue Redesign"
						path="/clue"
						/>
						<CardItem src="images/study_spots.png"
						text="Study Places"
						path="/studyplaces"
						/>
						<CardItem src="images/night_sky.png"
						text="Bedtime"
						path="/bedtime"
						/>
						{/*<CardItem src="images/cozyCorners.png"
						text="Cozy Corners"
						path="/cozycorners"
						/>*/}
						<CardItem src="images/PerceptionPoster.png"
						text="Perception Project"
						path="/perceptionproject"
						/>
						<CardItem src="images/dailyUI.png"
						text="Daily UI"
						path="/dailyui"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;