import React from 'react';
import './Other.css';
import ImageSlider from './ImageSlider';
import { NlImages } from './SliderData';

function Skills(props) {

	return (
		<div className="otherCards" id='other'>
			<h1 className="title">Other Engagements</h1>
			<div className="otherCards__container">
				<div className="otherCards__wrapper">
					<ul className="otherCards__items">
						<li className="otherCards__item">
							<div className="otherCards__item__info" style={{backgroundColor:"#FDC3BB"}}>
								<h1 className="labelTitle">Netlight</h1>
								<h5 className="otherCards__item__text"><p>
									I have since February 2019 worked as a graphic designer at IT and management 
									consulting company, <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">Netlight</a>. 
									As a graphic designer I'm part of the design studio which is a self driven part of the company where we have
									the ownership. I consult clients about what 
									their vision is for a certain design and deliver to a deadline. In my 
									role I have gained knowledge about Netlight's graphic profile 
									and adapted my design aesthetics to suit it. I have also had the opportunity to onboard new team members and thereby
									trained my pedagogic skills. Through my work I have broadened my knowledge about 
									the Adobe suite, in particular Illustrator, Photoshop, Lightroom, After Effects and 
									InDesign.</p>
									<p>Some of the work that I've done at Netlight is presented in the image gallery.</p>
								</h5>
							</div>
						</li>

						<li className="otherCards__item">
							<div className="otherCards__nl__info" key={ImageSlider.slides}>
								<ImageSlider slides={NlImages} work={true} className='NLtext' />
							</div>
						</li>

					</ul>
				</div>
			</div>
			
			<div className="otherCards__container">
				<div className="otherCards__wrapper">
					<ul className="otherCards__items">
						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#F77B80"}}>
								<h1 className="labelTitle">Osqledaren</h1>
								<h5 className="otherCards__item__text">
									I was an illustrator at <a href="https://osqledaren.se/" target="_blank" rel="noreferrer">Osqledaren</a>, 
									KTH’s student union paper, for four years where I did the 
									illustrations for articles that I was assigned and delivered to a deadline. I have worked 
									with many different types of articles, everything from educational ones to political and 
									pure entertainment oriented articles. I have also gotten to work with many different writers 
									as well as quite a few different editors in chiefs and art directors, since they have been 
									new people each year.
								</h5>
							</div>
						</li>

						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#E4F2F2"}}>
								<h1 className="labelTitle">Studs</h1>
								<h5 className="otherCards__item__text">
									I was part of <a href='https://studieresan.se/' target='_blank' rel="noreferrer">Studs</a> 2018/2019 which is a student driven 
									project course where we network with relevant companies in the tech industry 
									and end the course with a study trip. I was a member of the travel group, our responsibilities being 
									the planning and execution of the 2,5 weeks long trip for 30 engineering students to the USA. 
									The travel group consisted of five students and we did everything from researching cities, booking flights and 
									hotels as well as coming up with fun activities to do at each destination. On the trip we visited five cities in the
									USA: New York, New Orleans, Fraser in Rocky Mountains, Colorado and San Francisco.
								</h5>
							</div>
						</li>

						<li className="otherCards__item">
							<div className="otherCards__item__info2" style={{backgroundColor:"#FDC3BB"}}>
								<h1 className="labelTitle">Mottagningen</h1>
								<h5 className="otherCards__item__text">
									I was part of the reception at the Media Technology chapter for four years. The aim 
									of the reception is to make the new students feel welcome to the chapter as well as for them 
									to get to know their new classmates and how university studies are. I have been part of the group 
									KPH whose main responsibility is to be a group leader taking care of the new students and be there if they have 
									questions or other things they need help with.
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