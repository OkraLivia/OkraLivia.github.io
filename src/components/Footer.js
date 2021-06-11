import React from 'react';
import './Footer.css';
/*import ScrollArrow from './ScrollUp';*/

function Footer() {
	return (
		<>
		{/*<Link to="/" className="up">
				<img src="/images/up.svg" alt='uparrow' width="50" className='up_arrow'/>
				<ScrollArrow />
		</Link>*/}
		<div className="footer-container">
			<div>
				<h4>
					<span>Let's stay in touch! </span>
					<a href = "mailto: okralivia@gmail.com" className="footer-link-items">okralivia@gmail.com</a>
				</h4>
			</div>
			<div>
				<small className='website-rights'>Okra Livia Inkeri-Dimle © 2021</small>
			</div>
		</div>
		</>
	);
}

export default Footer;