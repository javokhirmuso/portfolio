import React, { useEffect } from 'react';
import { Hero, Navbar } from '../components';
import Articles from '../components/Articles';

const ArticlesPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div>
			<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
				<Navbar />
				{/* <Hero /> */}
			</div>
			<div className='pt-10'>
				<Articles />
			</div>
		</div>
	);
};

export default ArticlesPage;
