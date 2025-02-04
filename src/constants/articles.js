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
		name: 'Hybrid Convolutional Network Fusion: Enhanced Medical Image Classification with Dual-Pathway Learning from Raw and Enhanced Visual Features',
		description: `Medical image classification requires extracting subtle features that may not be apparent in raw pixel distributions, making preprocessing a crucial step. This study introduces a hybrid dual-pathway learning architecture, where raw images are processed by ResNet50 while filtered images with enhanced pixel intensities are analyzed by MobileNetV2, ensuring a more comprehensive feature extraction. By leveraging dual-stream learning and ensemble techniques, the proposed approach improves classification accuracy and enhances diagnostic insights in medical imaging applications.`,
		image: paper3,
		source_code_link:
			'https://link.springer.com/chapter/10.1007/978-3-031-70816-9_10',
	},
];
