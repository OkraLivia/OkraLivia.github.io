import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
	return (
		<div className="cards" id='cards'>
			<h1 className="title">Selected projects </h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem src="images/electrolux.jpeg"
							text="Electrolux mobile guidelines"
							summary="As a UX/UI designer at the digital business design studio, Twain, I researched and developed guidelines with best practices regarding mobile first design for the Electrolux brand sites."
							path="/electrolux"
							tags="UX RESEARCH | BRAND GUIDELINES | BEST PRACTICES"
						/>
						<CardItem src="images/netlight.jpeg"
							text="Netlight"
							summary="From 2019 to 2021 I worked as a graphic designer at IT and management consulting company, Netlight. As a graphic designer I'm part of the design studio which is a self driven part of the company where us designers have the ownership and a big impact on how the Netlight brand should look like."
							path="/netlight"
							tags="GRAPHIC DESIGN | BRAND IDENTITY | CONSULTING"
						/>
						</ul>
						
					<ul className="cards__items">
						<CardItem src="images/invitation.png"
							text="Graphic profile for wedding"
							summary="I was trusted with developing the graphic profile for a wedding that took place in August 2022. It was an outdoors wedding, which the couple wanted to reflect in all the visual material."
							path="/wedding"
							tags="DESIGN CONCEPT | GRAPHIC PROFILE | UX & UI"
							/>
						<CardItem src="images/KTH.png"
							text="Sonified Map"
							summary="This is an interactive, sonified map of the KTH campus Valhallavägen presenting two scenarios. One displays the sounds of the present and the other the possible sounds of the future. "
							path="/sonifiedmap"
							tags="SOUNDSCAPE | MAX/MSP | MOTION CAPTURE"
							/>
						</ul>

						<ul className="cards__items">
							<CardItem src="images/AR.png"
								text="OsqledARen"
								summary="Since all members of this project group were engaged in the student union's paper, Osqledaren, it felt natural for us to create a multimodal concept involving the magazine."
								path="/osqledaren"
								tags="AR | UNITY | ENTERTAINMENT"
							/>
							<CardItem src="images/LightForest-web.png"
								text="Light Forest"
								summary="The Swedish winters are dark, cold and wet. This however does not affect children’s excitement to play outside. Therefore, we created the Interactive Light Forest."
								path="/lightforest"
								tags="ARDUINO | CONSTRUCTION | PHYSICAL INTERACTION"
							/>
						</ul>

						<ul className="cards__items">
							{/*<CardItem src="images/dailyUI.png"
							text="Daily UI"
							summary="Daily UI is a subscription where one is prompted with daily design challenges that are aimed to help designers develop their skills."
							path="/dailyui"
							tags="UI DESIGN | FIGMA | DAILY CHALLENGE"
							/>*/}
							<CardItem src="images/night_sky.png"
								text="Experience design: Bedtime"
								summary="In this project our task was to design an experience for someone else. The lead word for the experience I was creating was bedtime. "
								path="/bedtime"
								tags="UX DESIGN | USER RESEARCH | PROBES"
							/>
							<CardItem src="images/Clue.png"
								text="Clue-app redesign"
								summary="This is a project I did in my free time using Figma. I thought it would be a fun and interesting task to redesign the period tracking app Clue, giving it a more modern look with a new and fresh color scheme as well as some features I have been missing."
								path="/clue"
								tags="FIGMA | REDESIGN | IPHONE APP"
							/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;