import React from 'react';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
	const data = Object.keys(technologies)
		.map((key) => technologies[key].icon)
		.filter((item) => item);
	return (
		<div className='flex flex-row flex-wrap justify-center gap-10'>
			{data.map((item, index) => (
				<div className='w-28 h-28' key={index}>
					{<BallCanvas icon={item} />}
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Tech, '');
