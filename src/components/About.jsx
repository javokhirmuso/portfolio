import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { avatar, phone } from '../assets';

const ServiceCard = ({ index, title, icon, url }) => (
	<Tilt className='xs:w-[250px] w-full'>
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
		>
			<a
				href={url}
				target='_blank'
				rel='noopener noreferrer'
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className='bg-tertiary rounded-[20px] p-5 min-h-[280px] flex justify-evenly items-center flex-col'
			>
				<div className='w-16 h-16'>
					<img
						src={icon}
						alt='web-development'
						className=' object-cover h-full w-full'
					/>
				</div>

				<h3 className='text-white break-all flex flexc text-[20px] font-bold text-center'>
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

			<motion.div className='grid grid-cols-1 lg:grid-cols-2'>
				<div>
					<motion.p
						variants={fadeIn('', '', 0.1, 1)}
						className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
					>
						Dr. Javokhir Musaev is a postdoctoral researcher in the Department
						of Computer Engineering at Yeungnam University, South Korea, where
						he earned his Ph.D. in Computer Engineering in 2024. His research
						focuses on deep learning applications in computer vision,
						particularly in medical imaging and agricultural disease detection.
					</motion.p>
					<motion.p
						variants={fadeIn('', '', 0.2, 1)}
						className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
					>
						During his doctoral studies, Dr. Musaev co-authored a paper
						proposing an improved convolutional neural network ensemble model
						for medical image classification. This work introduced an enhanced
						ensemble approach to improve the accuracy of medical image
						classification by leveraging high-resolution image representations.
					</motion.p>
					<motion.p
						variants={fadeIn('', '', 0.3, 1)}
						className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
					>
						In his postdoctoral research, Dr. Musaev co-developed the MICL-UNet
						model, detailed in a publication that has garnered significant
						attention. This model integrates multi-input data and cross-layer
						connections to effectively classify agricultural diseases,
						demonstrating the versatility of deep learning techniques in diverse
						domains.
					</motion.p>
				</div>
				<div className='p-0 lg:p-10 invisible h-0 w-0 overflow-hidden lg:visible lg:w-full lg:h-full'>
					<img className='h-full w-full rounded-lg object-cover' src={avatar} />
				</div>
			</motion.div>

			<motion.p
				variants={fadeIn('', '', 0.4, 1)}
				className='mt-4 text-secondary text-[17px]  leading-[30px]'
			>
				Dr. Musaev's contributions to the field are further evidenced by his
				publication on hybrid convolutional network fusion, which explores
				dual-pathway learning strategies to improve medical image classification
				performance.
			</motion.p>
			<motion.p
				variants={fadeIn('', '', 0.5, 1)}
				className='mt-4 text-secondary text-[17px]  leading-[30px]'
			>
				Collectively, Dr. Musaev's research endeavors have significantly
				advanced deep learning methodologies in computer vision, particularly in
				the contexts of medical imaging and agricultural applications.
			</motion.p>

			<div className='py-10 lg:hidden'>
				<img className='h-full w-full rounded-lg object-cover' src={avatar} />
			</div>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
