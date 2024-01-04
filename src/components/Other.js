import React from 'react';
import './Other.css';

function Skills(props) {

	return (
		<div className="otherCards" id='other'>
			<h1 className="title">Other engagements</h1>
			<div className="otherCards__container">
				<div className="otherCards__wrapper">
					<ul className="otherCards__items">
						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#FAD167"}}>
								<h1 className="labelTitle">Osqledaren</h1>
								<h5 className="otherCards__item__text">
									I was an illustrator at <a href="https://osqledaren.se/" target="_blank" rel="noreferrer">Osqledaren</a>, 
									KTH’s student union paper with over 10 000 subscribers, for four years where I did the 
									illustrations for articles that I was assigned and delivered to a deadline. I have worked 
									with many different types of articles, everything from educational ones to political and 
									pure entertainment oriented articles. I have also gotten to work with many different writers 
									as well as quite a few different editors in chief and art directors, since they have been 
									new people each year. Working with so many different people and genres I got to explore different art styles 
									and mediums to create content that suits each article.
								</h5>
							</div>
						</li>

						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#FAD167"}}>
								<h1 className="labelTitle">Studs</h1>
								<h5 className="otherCards__item__text">
									I was part of <a href='https://studieresan.se/' target='_blank' rel="noreferrer" className='studs'>Studs</a> 2018/2019 which is a student driven 
									project course where we network with relevant companies in the tech industry 
									and end the course with a study trip. I was a member of the travel group, our responsibilities being 
									the planning and execution of the 2,5 weeks long trip for 30 engineering students to the USA. 
									The travel group consisted of five students and we did everything from researching cities, booking flights and 
									hotels as well as coming up with fun activities to do at each destination. On the trip we visited five cities in the
									USA: New York, New Orleans, Fraser in Rocky Mountains Colorado and San Francisco.
								</h5>
							</div>
						</li>

						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#FAD167"}}>
								<h1 className="labelTitle">Mottagningen</h1>
								<h5 className="otherCards__item__text">
									I was part of the reception at the Media Technology chapter for four years. The aim 
									of the reception is to make the new students feel welcome to the chapter as well as for them 
									to get to know their new classmates and how university studies work. I have been part of the group 
									KPH whose main responsibility is to be group leaders taking care of the new students and be there if they have 
									questions or other things they need help with. As a part of KPH I got to develop my leadership skills as well as social skills
									since one of our main tasks is to drive the new students to talk to eachother and making sure noone is being left out or feeling 
									insecure.
								</h5>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Skills;