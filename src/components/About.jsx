import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon, url }) => (
	<Tilt className='xs:w-[250px] w-full' options={{ max: 45, scale: 1, speed: 450 }}>
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				className='bg-tertiary rounded-[20px] p-5 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<div className='w-16 h-16'>
					<img src={icon} alt={title} className='object-cover h-full w-full' />
				</div>

				<h3 className='text-white break-all text-[20px] font-bold text-center'>
					{title}
				</h3>
			</a>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
			>
				I am a postdoctoral researcher in the Department of Computer Engineering at 
				Yeungnam University, South Korea, where I earned my Ph.D. in Computer Engineering 
				in 2024. My research focuses on deep learning applications in computer vision, 
				particularly in medical imaging and agricultural disease detection.
			</motion.p>

			<motion.div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</motion.div>
		</>
	);
};

export default SectionWrapper(About, 'about');
