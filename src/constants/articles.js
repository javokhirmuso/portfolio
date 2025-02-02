import { paper3, paper4 } from '../assets';

const articleImages = [];
export default [
	{
		name: 'ICNN-Ensemble: An Improved Convolutional Neural Network Ensemble Model for Medical Image Classification',
		description: `Deep learning (DL) classification has significantly advanced medical image analysis, particularly in cancer prediction and cell classification. However, existing models often lack generalizability, limiting their effectiveness across diverse datasets. This research introduces ICNN-Ensemble, an improved convolutional neural network ensemble model that leverages high-resolution image channel representations (RHRIC) and a systematic model dropout ensemble (SMDE) to enhance classification accuracy. By optimizing residual feature connections and ensemble selection, the proposed method achieves superior performance on medical datasets, particularly in Malaria cell classification, demonstrating its potential for broader real-world applications.`,
		image:
			'https://ieeexplore.ieee.org/ielx7/6287639/10005208/10214220/graphical_abstract/access-gagraphic-3303966.jpg',
		source_code_link: 'https://ieeexplore.ieee.org/abstract/document/10214220',
	},
	{
		name: 'KeepNMax: Keep N Maximum of Epoch-channel ensemble method for Deep learning models',
		description: `Deep learning models for computer vision continue to evolve, yet challenges remain in optimizing accuracy through data representation and ensemble learning. This research introduces KeepNMax, an ensemble method that selects the top N maximum prediction probabilities across epochs and image channels, improving model generalization. By applying this approach to nine datasets using CNN and ConvMixer architectures, the proposed method significantly enhances classification accuracy compared to traditional training and baseline ensemble methods.`,
		image:
			'https://ieeexplore.ieee.org/ielx7/6287639/10005208/10025707/graphical_abstract/access-gagraphic-3239658.jpg',
		source_code_link: 'https://ieeexplore.ieee.org/abstract/document/10025707',
	},
	{
		name: 'ICNN-Ensemble: An Improved Convolutional Neural Network Ensemble Model for Medical Image Classification',
		description: `Deep learning (DL) classification has significantly advanced medical image analysis, particularly in cancer prediction and cell classification. However, existing models often lack generalizability, limiting their effectiveness across diverse datasets. This research introduces ICNN-Ensemble, an improved convolutional neural network ensemble model that leverages high-resolution image channel representations (RHRIC) and a systematic model dropout ensemble (SMDE) to enhance classification accuracy. By optimizing residual feature connections and ensemble selection, the proposed method achieves superior performance on medical datasets, particularly in Malaria cell classification, demonstrating its potential for broader real-world applications.`,
		image: paper3,
		source_code_link: 'https://ieeexplore.ieee.org/abstract/document/10214220',
	},
	{
		name: `IMed-CNN: Ensemble Learning Approach with Systematic Model Dropout for Enhanced Medical Image Classification Using Image Channels and Pixel Intervals`,
		description: `Deep learning models for image classification often struggle with optimizing ensemble selection, leading to inefficiencies in both accuracy and computational performance. This study presents IMed-CNN, a systematic approach that strategically applies model dropout to ensure that only the most effective models contribute to the final ensemble. By refining feature extraction and balancing model training complexities, the proposed framework significantly improves classification accuracy across multiple datasets, setting a strong foundation for future advancements in image processing and machine learning.`,
		image: paper4,
		source_code_link:
			'https://www.overleaf.com/project/6721c465dfc33e0bd4662b04',
	},
];
