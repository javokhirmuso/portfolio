import technologies from './technologies';

export default [
	{
		name: 'Microscopy Cell Segmentation',
		description:
			"In this project, I developed a robust solution for segmenting microscopy images using advanced deep learning techniques. Leveraging the YOLOv11n-seg model, I trained the system on a dataset sourced from Roboflow Universe, which includes classes such as 'blood_vessel', 'glomerulus', and 'unsure'. The model was trained over 500 epochs with a batch size of 64 and an image size of 640 pixels, resulting in a tool capable of accurately identifying and segmenting cellular structures in microscopy images. This work aims to assist researchers in analyzing complex biological data more efficiently.",
		tags: [
			technologies.pytorch,
			technologies.roboflow,
			technologies.ultralytics,
			technologies.opencv,
			technologies.numpy,
			technologies.matplotlib,
		],
		image:
			'https://github.com/javokhirmuso/Microscopy-cell-segmentation--/raw/main/runs/segment/cell/val_batch2_labels.jpg',
		source_code_link:
			'https://github.com/javokhirmuso/Microscopy-cell-segmentation--',
	},
	{
		name: 'Hand Keypoint Detection',
		description: `The Hand Keypoint Detection project leverages Vision Transformers (ViT) to accurately identify and localize key points on human hands. This repository encompasses comprehensive scripts for training, evaluation, and visualization, facilitating a streamlined workflow for researchers and developers. The project's structure is organized into directories for training and validation images, annotations, and essential Python scripts, ensuring clarity and ease of use. By utilizing advanced deep learning techniques, this project aims to advance the precision and efficiency of hand keypoint detection applications.  `,
		tags: [
			technologies.transformers,
			technologies.vit,
			technologies.pytorch,
			technologies.matplotlib,
			technologies.opencv,
		],
		image:
			'https://github.com/javokhirmuso/Hand-keypoint-detection/raw/main/visualizations/output.png',
		source_code_link: 'https://github.com/javokhirmuso/Hand-keypoint-detection',
	},
	{
		name: 'Water Flood Segformer',
		description: `The "Water Flood Segformer" project is dedicated to the segmentation of water flood areas utilizing the Segformer model, a cutting-edge transformer-based architecture for semantic segmentation. This initiative involves training the Segformer model on relevant datasets to accurately identify and delineate flooded regions. The project's outcomes are visualized and stored in the 'visualization_outputs' directory, providing clear insights into the model's performance and the effectiveness of the segmentation process.`,
		tags: [
			technologies.transformers,
			technologies.matplotlib,
			technologies.opencv,
			technologies.numpy,
			technologies.pytorch,
		],
		image:
			'https://github.com/javokhirmuso/Water_Flood_Segformer/raw/main/visualization_outputs/output.png',
		source_code_link: 'https://github.com/javokhirmuso/Water_Flood_Segformer',
	},
	{
		name: 'Fabric Anomaly Detection',
		description: `In my Fabric Anomaly Detection project, I utilized advanced object detection models, including YOLOv5, YOLOv8x, and YOLOv11n, to identify defects in fabric materials. These models were trained to detect various types of anomalies, such as tears, stains, and weaving defects, enabling precise and efficient quality control in textile manufacturing. By leveraging the strengths of these YOLO models, the system achieves real-time detection with high accuracy, facilitating prompt identification and rectification of fabric defects.`,
		tags: [
			technologies.pytorch,
			technologies.yolo,
			technologies.ultralytics,
			technologies.opencv,
			technologies.numpy,
			technologies.matplotlib,
		],
		image:
			'https://github.com/javokhirmuso/Fabric-Anomaly-Detection/raw/main/results/val_batch0_pred.jpg',
		source_code_link:
			'https://github.com/javokhirmuso/Fabric-Anomaly-Detection',
	},
	{
		name: 'Vehicle Tracking YOLO11n',
		description:
			'Introducing the Vehicle Tracking with YOLO11n project—a real-time system designed to detect and track vehicles, specifically cars and trucks, in video streams. Leveraging the YOLO11n model, this project offers efficient multi-class tracking capabilities, GPU acceleration support, and the flexibility to train on custom datasets. The dataset utilized is sourced from Roboflow Universe, containing annotated images of cars and trucks, and is organized into training, validation, and test sets. This system is ideal for applications in traffic monitoring, surveillance, and autonomous driving research.',
		tags: [
			technologies.pytorch,
			technologies.roboflow,
			technologies.ultralytics,
			technologies.opencv,
			technologies.numpy,
			technologies.matplotlib,
			technologies.yolo,
			technologies.deepsort,
		],
		image:
			'https://github.com/javokhirmuso/Vehicle-tracking-YOLO11n/raw/main/results/result.gif',
		source_code_link:
			'https://github.com/javokhirmuso/Vehicle-tracking-YOLO11n',
	},
	{
		name: 'Vehicle License Plate Detection using YOLO11n',
		description: `The "Car License Plate Detection" project is a real-time system designed to accurately identify vehicle license plates using the YOLO11 model. Leveraging a dataset sourced from Roboflow Universe, this project focuses on detecting license plates within images and videos. The repository includes organized directories for training, validation, and testing images, as well as the necessary scripts for model training and detection. To set up the project, clone the repository, install the required dependencies, and follow the provided instructions. This project showcases the application of advanced object detection techniques in the field of computer vision.`,
		tags: [
			technologies.pytorch,
			technologies.ultralytics,
			technologies.opencv,
			technologies.numpy,
			technologies.matplotlib,
			technologies.yolo,
		],
		image:
			'https://github.com/javokhirmuso/Car-license-plate-detection/raw/main/results/val_batch0_pred.jpg',
		source_code_link:
			'https://github.com/javokhirmuso/Car-license-plate-detection',
	},
];
