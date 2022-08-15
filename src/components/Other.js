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
									From 2019 to 2021 I worked as a graphic designer at IT and management 
									consulting company, <a href="https://www.netlight.com/" target="_blank" rel="noreferrer">Netlight</a>. 
									As a graphic designer I'm part of the design studio which is a self driven part of the company where us designers 
									have the ownership and a big impact on how the Netlight brand should look like. Since we are self driven there is 
									a lot of responsibility and being resourceful which has enabled me to grow a lot as a designer and person. In my role I consult 
									stakeholders about what their vision is for a certain design, do research on the subject, handle feedback and 
									motivate my design decisions and deliver to a deadline. We work with all parts of Netlight and support the nine 
									offices around Europe both locally and remotely, from sales and recruitment to event experiences and professional 
									development. In my role I have gained knowledge about Netlight's graphic profile and adapted my design aesthetics 
									to go with it. I have also had the opportunity to onboard new team members and thereby developed my pedagogic skills. 
									Through my work I have broadened my knowledge about the Adobe suite, in particular Illustrator, Photoshop, Lightroom, 
									After Effects and InDesign.</p>
									<p>Some of the work that I've done at Netlight can be seen in the image gallery.</p>
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
							<div className="otherCards__item__info2" style={{backgroundColor:"#E4F2F2"}}>
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
							<div className="otherCards__item__info2" style={{backgroundColor:"#FDC3BB"}}>
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