import { banners, eventPhoto } from "./images";
import { certificates } from "./certificates";

export interface Publication {
    id: number;
    banner: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    technologies: string[];
    aiContribution: string;
    novelty: string;
    status: 'Published' | 'Presented' | 'Accepted' | 'On Going';
    publisher: string;
    publisherBanner: string;
    conference: string;
    publicationType: 'Conference Paper' | 'Book Chapter' | 'Journal';
    doi: string;
    presentationDate: string;
    certificate: string;
    eventPhotos: Array<{ src: string; focus: 'top' | 'center' | 'bottom' }>;
    authors: string[];
    keywords: string[];
}

export const publications: Publication[] = [
    {
        id: 1,
        banner: banners.BIM25,
        title: "Enhancing Face Recognition in Unconstrained Conditions Using Ensemble Deep Learning Models",
        shortDescription: "This research develops deep learning-based facial recognition using CNNs and ensemble methods, demonstrating robust identification under challenging real-world conditions.",
        fullDescription: "This comprehensive research addresses the critical challenges of face recognition in unconstrained environments. By leveraging advanced CNN architectures and ensemble learning techniques, we achieved state-of-the-art performance in real-world scenarios including varying lighting, pose variations, and partial occlusions. The proposed system demonstrates superior accuracy and robustness compared to traditional methods.",
        technologies: ["TensorFlow", "OpenCV", "Streamlit", "User Interface"],
        aiContribution: "User interface development and feature fusion for reliable result.",
        novelty: "Novel ensemble architecture combining multiple CNN models with adaptive feature fusion, achieving 98.5% accuracy on challenging datasets. First implementation of dynamic weight adjustment based on environmental conditions.",
        status: "Presented",
        publisher: "Springer",
        publisherBanner: "",
        conference: "BIM 2025",
        publicationType: "Book Chapter",
        doi: "",
        presentationDate: "August 2025",
        certificate: certificates.BIM25_face,
        eventPhotos: [
            { src: eventPhoto.Me, focus: "top" },
            { src: eventPhoto.MS, focus: "top" },
            { src: eventPhoto.MSN, focus: "top" },
            { src: eventPhoto.MSTN, focus: "center" },
            { src: eventPhoto.PresentationRoom, focus: "center" },
            { src: eventPhoto.CertificateRecieve, focus: "top" },
        ],

        authors: ["Md. Mahfujur Rahman", "D.M. Asadujjaman", "Md. Mahmuduzzaman Ikbal", "Abdullah Tamim", "Jannatul Ferdous"],
        keywords: ["Face Recognition", "Deep Learning", "Ensemble Methods", "Computer Vision"]
    },
    {
        id: 2,
        banner: banners.ICDSA25,
        title: "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
        shortDescription: "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
        fullDescription: "A groundbreaking study focusing on Bangla handwritten numeral recognition using state-of-the-art deep learning techniques. We created a novel dataset of 50,000+ handwritten Bangla numerals and developed an ensemble model achieving 99.2% accuracy.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Primary dataset creation and ensemble model for higher accuracy.",
        novelty: "First large-scale publicly available Bangla handwritten numeral dataset with demographic diversity. Novel data augmentation techniques specific to Bangla script characteristics.",
        status: "Accepted",
        publisher: "Springer",
        publisherBanner: banners.ICDSA25,
        conference: "ICDSA 2025",
        publicationType: "Book Chapter",
        doi: "",
        presentationDate: "February 2025",
        certificate: certificates.ICDSA25_OCR,
        eventPhotos: [],
        authors: ["Md. Mahfujur Rahman", "D.M. Asadujjaman", "Md. Mahmuduzzaman Ikbal", "Solaiman Shakil", "Abdullah Tamim"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
    {
        id: 3,
        banner: banners.BIM25,
        title: "An Integrated Deep Learning Methodology for the Automated Histopathological Differentiation of Lung throughout Colon Cancer",
        shortDescription: "This research applies deep learning to classify lung and colon cancer histopathology images, providing accurate, interpretable, AI-assisted diagnostics.",
        fullDescription: "Revolutionary approach to cancer diagnosis through automated histopathological image analysis. Our integrated deep learning system combines multiple CNN architectures with attention mechanisms to differentiate between lung and colon cancer with exceptional accuracy, providing interpretable results for clinical use.",
        technologies: ["GRAD-CAM", "Keras", "CNN", "Medical Imaging"],
        aiContribution: "Grad-CAM and ensemble methods to reliably classify histopathology image.",
        novelty: "Novel attention-based architecture for histopathological image analysis with explainable AI features. Achieved 97.8% accuracy with clinical validation on 10,000+ samples.",
        status: "Presented",
        publisher: "Springer",
        publisherBanner: '',
        conference: "BIM 2025",
        publicationType: "Book Chapter",
        doi: "",
        presentationDate: "January 2025",
        certificate: certificates.BIM25_colon,
        eventPhotos: [
            { src: eventPhoto.VU, focus: "top" },
            { src: eventPhoto.PhotoCard_MeFocus, focus: "top" },
            { src: eventPhoto.MSTN, focus: "center" },
            { src: eventPhoto.MSN, focus: "top" },
            { src: eventPhoto.PresentationRoom, focus: "center" },
        ],
        authors: ["Md. Mahfujur Rahman", "D.M. Asadujjaman", "Md. Mahmuduzzaman Ikbal", "Fauhad Ahmed"],
        keywords: ["Medical AI", "Cancer Detection", "Histopathology", "Explainable AI"]
    },
    {
        id: 4,
        banner: banners.QPAIN25,
        title: "Transfer Learning Based Multiclass Brain Tumor Classification Using MRI Data",
        shortDescription: "Fine-tuned ResNet50 classifies brain tumors from MRI images with 99.31% accuracy, outperforming other models and enabling faster, accurate medical diagnosis.",
        fullDescription: "Brain tumor classification using deep learning has significantly improved medical image analysis. This study enhances ResNet50 with novel layers and applies preprocessing and data augmentation to MRI images from SARTAJ, Br35H, and Figshare datasets. The fine-tuned ResNet50 model is benchmarked against VGG16, VGG19, Xception, EfficientNet-B0, and DenseNet121, achieving 99.31% overall accuracy. These results highlight the effectiveness of advanced deep learning techniques in enabling faster, more accurate brain tumor detection, offering a promising tool for medical diagnostics.",
        technologies: ["TensorFlow", "MRI Image Processing", "Transfer Learning"],
        aiContribution: "Developed a fine-tuned model to achieves state-of-the-art performance in brain tumor classification.",
        novelty: "Integration of novel layers into ResNet50 architecture combined with extensive data augmentation and preprocessing to achieve state-of-the-art brain tumor classification accuracy.",
        status: "Published",
        publisher: "IEEE",
        publisherBanner: banners.QPAIN25,
        conference: "QPAIN 2025",
        publicationType: "Conference Paper",
        doi: "https://doi.org/10.1109/QPAIN66474.2025.11172074",
        presentationDate: "August 2025",
        certificate: certificates.QPAIN25_brainTumor,
        eventPhotos: [],
        authors: ["Md. Mahfujur Rahman", "D.M. Asadujjaman", "Md. Mahmuduzzaman Ikbal", "Chinmoy Mitra"],
        keywords: ["Brain Tumor Classification", "Medical Imaging", "MRI", "CNN", "Medical AI"]

    },
    {
        id: 5,
        banner: banners.QPAIN25,
        title: "Intelligent Recognition of Bangla Handwritten Digits",
        shortDescription: "Ensemble CNN models recognize Bangla handwritten digits with 99.97% accuracy, demonstrating robust OCR performance on the NumtaDB dataset.",
        fullDescription: "This study evaluates deep CNN architectures—InceptionV3, ResNet50, and DenseNet121—for Bangla handwritten numeral recognition using the NumtaDB dataset. An ensemble learning approach combines model outputs to further enhance accuracy and generalization. The ensemble achieves 99.97% test accuracy, outperforming individual models and demonstrating the effectiveness of CNN-based approaches for complex script OCR.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Designed and implemented an ensemble of CNN models achieving state-of-the-art accuracy for Bangla handwritten numeral recognition.",
        novelty: "Applied ensemble learning on top of multiple CNN architectures to enhance recognition accuracy and robustness for complex Bangla handwritten digits.",
        status: "Published",
        publisher: "IEEE    ",
        publisherBanner: banners.QPAIN25,
        conference: "QPAIN 2025",
        publicationType: "Conference Paper",
        doi: "https://doi.org/10.1109/QPAIN66474.2025.11172196",
        presentationDate: "August 2025",
        certificate: certificates.QPAIN25_OCR,
        eventPhotos: [],
        authors: ["Md. Mahfujur Rahman", "Md.Mahmuduzzaman Ikbal", "D.M. Asadujjaman", "Abdullah Tamim"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
    {
        id: 6,
        banner: banners.ICDSA25,
        title: "Recognizing Bangla Numerals: A Deep Learning Approach on a Novel Handwritten Dataset",
        shortDescription: "This research improves Bangla handwritten numeral recognition using deep learning and ensemble models, demonstrating effective recognition on a primary dataset.",
        fullDescription: "A groundbreaking study focusing on Bangla handwritten numeral recognition using state-of-the-art deep learning techniques. We created a novel dataset of 50,000+ handwritten Bangla numerals and developed an ensemble model achieving 99.2% accuracy.",
        technologies: ["Keras", "TensorFlow", "Deep Learning", "GRAD-CAM"],
        aiContribution: "Primary dataset creation and ensemble model for higher accuracy.",
        novelty: "First large-scale publicly available Bangla handwritten numeral dataset with demographic diversity. Novel data augmentation techniques specific to Bangla script characteristics.",
        status: "On Going",
        publisher: "Springer",
        publisherBanner: banners.ICDSA25,
        conference: "ICDSA 2025",
        publicationType: "Book Chapter",
        doi: "",
        presentationDate: "February 2025",
        certificate: certificates.ICDSA25_OCR,
        eventPhotos: [],
        authors: ["Md. Mahfujur Rahman", "Md.Mahmuduzzaman Ikbal", "D.M. Asadujjaman", "Abdullah Tamim", "Solaiman Shakil", "Sabina Yasmin"],
        keywords: ["Bangla OCR", "Handwriting Recognition", "Dataset Creation", "Deep Learning"]
    },
];