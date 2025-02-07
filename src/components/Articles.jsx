import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github, googleScholar } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import articles from '../constants/articles';
import { Link, useLocation } from 'react-router-dom';

const ArticleCard = ({ index, name, description, image, source_code_link }) => {
	return (
		<motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary flex flex-col justify-between h-full p-5 rounded-2xl w-full'
			>
				<div>
					<div className='relative w-full h-[230px]'>
						<img
							src={image}
							alt='project_image'
							className='w-full h-full object-cover rounded-2xl'
						/>

						<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
							<div
								onClick={() => window.open(source_code_link, '_blank')}
								className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
							>
								<img
									src={googleScholar}
									alt='source code'
									className='w-1/2 h-1/2 object-contain'
								/>
							</div>
						</div>
					</div>

					<div className='mt-5'>
						<h3 className='text-white font-bold text-[24px]'>{name}</h3>
						<p className='mt-2 text-secondary text-[14px]'>{description}</p>
					</div>
				</div>

				{/* <div className='mt-4 flex flex-wrap gap-2'>
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div> */}
			</Tilt>
		</motion.div>
	);
};

const Articles = () => {
	const location = useLocation();
	const isHome = location.pathname === '/';
	const data = isHome ? articles.slice(0, 3) : articles;
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My papers</p>
				<h2 className={`${styles.sectionHeadText}`}>Articles.</h2>
			</motion.div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn('', '', 0.1, 1)}
					className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					My research focuses on developing advanced deep learning models for
					medical image analysis and agricultural disease detection. I have
					worked on designing ensemble learning methods to enhance
					classification accuracy in medical diagnostics and applying deep
					learning architectures to identify plant diseases, helping improve
					healthcare and agricultural outcomes. Additionally, I have explored
					other AI-driven solutions to address real-world challenges, including
					disease prediction and automated decision-making systems.
				</motion.p>
			</div>

			<div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
				{data.map((article, index) => (
					<ArticleCard key={`project-${index}`} index={index} {...article} />
				))}
			</div>
			{isHome && (
				<div className='mt-10 flex justify-center'>
					<a
						href={'https://scholar.google.com/citations?user=-ccQ6R0AAAAJ&hl=en&oi=ao'}
						target='_blank'
						rel='noopener noreferrer'
						type='submit'
						className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
					>
						See all
					</a>
				</div>
			)}
		</>
	);
};

export default SectionWrapper(Articles, 'articles');
