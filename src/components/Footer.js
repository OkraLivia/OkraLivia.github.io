import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<>
		<div className="footer-container">
			<div>
				<h4>
					<span>Let's stay in touch! </span>
					<a href = "mailto: okralivia@gmail.com" className="footer-link-items">okralivia@gmail.com</a>
				</h4>
			</div>
			<div>
				<small className='website-rights'>Okra Livia Inkeri-Dimle © 2024</small>
			</div>
		</div>
		</>
	);
}

export default Footer;