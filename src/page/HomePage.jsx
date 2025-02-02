import React from 'react';
import {
	About,
	Contact,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
} from '../components';
import Articles from '../components/Articles';
const HomePage = () => {
	return (
		<>
			<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
				<Navbar />
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Articles />
			{/* <Feedbacks /> */}
			<div className='relative z-0'>
				<Contact />
				<StarsCanvas />
			</div>
		</>
	);
};

export default HomePage;
