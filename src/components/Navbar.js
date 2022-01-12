import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<>
			<nav className="navbar">
				<div className="navbar-container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
			    		<img src="/images/logo.png" alt='navimg' width="60" className='logo' style={{marginRight:"20px"}}/>
			    	</Link>
			    	
			    	<div style={{float:'left'}}>
			    	<div className="menu-icon" onClick={handleClick}>
			    		<i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
			    	</div>
			    	<ul className={click ? 'nav-menu active' : 'nav-menu'}>
			    		<li className='nav-item'>
			    			<Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
			    				Skills
			    			</Link>
			    		</li>
			    		<li className='nav-item'>
			    			<Link to='/cards' className='nav-links' onClick={closeMobileMenu}>
			    				Projects
			    			</Link>
			    		</li>
			    		<li className='nav-item'>
			    			<Link to='/art' className='nav-links' onClick={closeMobileMenu}>
			    				Artwork
			    			</Link>
			    		</li>
			    		<li className='nav-item'>
			    			<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
			    				About
			    			</Link>
			    		</li>
			    	</ul>
			    	</div>
			    	<a href = "mailto: okralivia@gmail.com" style={{textDecoration:"none"}}>
			    	<h1 className='title-name'>Okra Livia </h1></a>

				</div>
			</nav>
		</>
	)
}

export default Navbar