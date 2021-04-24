import React , { useEffect } from 'react';
import '../../App.css';
import Introduction from '../Introduction';
import Skills from '../Skills';
import Cards from '../Cards';
import Footer from '../Footer';
import Other from '../Other';
import Gallery from '../Gallery';

function Home(props) {
	const scrollIntoView = (section) => {
		const anchor = document.querySelector('#' + section);
		if (anchor) {
			anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	};

	useEffect(() => {
		const { match: { params } } = props;

		if (params.section) {
			scrollIntoView(params.section);
		} else {
			scrollIntoView('hero');
		}
	});

	return (
		<>
			<Introduction />
			<Skills />
			<Cards />
			<Other />
			<Gallery />
			<Footer />
		</>
	);
}

export default Home;