import {
	backend,
	creator,
	email,
	github,
	googleScholar,
	meta,
	mobile,
	phone,
	shopify,
	starbucks,
	tesla,
	web,
	yeungnam,
} from '../assets';
import projects from './projects';
import technologies from './technologies';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'articles',
		title: 'Articles',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: '+8210 9820 9304',
		url: 'tel:+8210 9820 9304',
		icon: phone,
	},
	{
		title: 'javokhirmuso@gmail.com',
		url: 'mailto:javokhirmuso@gmail.com',
		icon: email,
	},
	{
		title: 'Github',
		url: 'https://github.com/javokhirmuso',
		icon: github,
	},
	{
		title: 'Google Scholar',
		url: 'https://scholar.google.com/citations?user=-ccQ6R0AAAAJ&hl=en&oi=ao',
		icon: googleScholar,
	},
];

const experiences = [
	{
		title: 'Postdoctoral Researcher',
		company_name: 'Yeungnam University | Computer Engineering Department',
		icon: yeungnam,
		iconBg: '#383E56',
		date: 'March 2024 - Present',
		points: [
			`Conducted advanced research in computer vision, focusing on hand keypoint detection and the application of Vision Transformers (ViT).`,
			`Collaborated with interdisciplinary teams to develop innovative algorithms enhancing machine understanding across various domains.`,
			`Published findings in leading peer-reviewed journals and presented at international conferences, contributing to the broader scientific community.`,
			`Mentored graduate students, fostering their research skills and guiding them in their academic pursuits. `,
		],
	},
	{
		title: 'Doctor of Philosophy',
		company_name: 'Yeungnam University | Computer Engineering Department',
		icon: yeungnam,
		iconBg: '#383E56',
		date: 'March 2020 - February 2024',
		points: [
			`Enhancing AI for Medical Imaging – Ph.D. Research (2020–2024) Developed IMed-CNN, an ensemble model integrating systematic model dropout and unique true prediction analysis to improve medical image classification accuracy.`,
			`Optimizing Deep Learning for Medical Image Analysis (2020–2024) Introduced multi-channel processing and pixel-interval-based feature extraction, leading to improved diagnosis and classification in medical imaging datasets.`,
			`Ensemble Learning for Medical AI (2020–2024) Designed novel hybrid convolutional network fusion methods to boost deep learning performance in detecting diseases from X-ray, MRI, and CT scans.`,
			`Data Representation Innovations for Computer Vision (2020–2024) Co-developed the Image Pixel Interval Power (IPIP) method, an advanced image transformation technique enhancing deep learning classification for medical and general image datasets.`,
			`AI for Precision Agriculture – Deep Learning in Plant Disease Detection (2020–2024) Applied deep learning methodologies to multi-input cross-layer models (MICL-UNet), improving crop disease classification accuracy and aiding smart agriculture.`,
		],
	},
];

const testimonials = [
	{
		testimonial:
			'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
		name: 'Sara Lee',
		designation: 'CFO',
		company: 'Acme Co',
		image: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: 'Chris Brown',
		designation: 'COO',
		company: 'DEF Corp',
		image: 'https://randomuser.me/api/portraits/men/5.jpg',
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: 'Lisa Wang',
		designation: 'CTO',
		company: '456 Enterprises',
		image: 'https://randomuser.me/api/portraits/women/6.jpg',
	},
];

export { experiences, projects, services, technologies, testimonials };
