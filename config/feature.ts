import { IconType } from "react-icons";
import { BiMagnet } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload } from "react-icons/md";

export const FEATURES_EN = [
  {
    title: "Open Source Advantage",
    content: "Completely free with a wealth of customization options.",
    icon: BsGithub,
  },
  {
    title: "Responsive Design",
    content:
      "Templates meticulously designed to ensure optimal display on any device.",
    icon: FaMobileScreenButton,
  },
  {
    title: "Easy Customization",
    content:
      "Effortlessly change colors, fonts, and layouts without any coding knowledge.",
    icon: FaToolbox,
  },
  {
    title: "SEO Optimized",
    content:
      "Templates built with search engine optimization in mind to enhance your website's discoverability.",
    icon: BiMagnet,
  },
  {
    title: "One-Click Deployment",
    content:
      "Tightly integrated with leading web hosting services for instant website publishing.",
    icon: MdCloudUpload,
  },
  {
    title: "Globalization Support",
    content:
      "Supports multiple languages, making your website attractive to a global audience.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_AR = [
  {
    title: "ميزة المصدر المفتوح",
    content: "مجانية بالكامل مع ثروة من خيارات التخصيص.",
    icon: BsGithub,
  },
  {
    title: "تصميم متجاوب",
    content: "تم تصميم القوالب بعناية لضمان عرض مثالي على أي جهاز.",
    icon: FaMobileScreenButton,
  },
  {
    title: "تخصيص سهل",
    content:
      "غير الألوان والخطوط والتخطيطات بسهولة دون الحاجة إلى معرفة بالبرمجة.",
    icon: FaToolbox,
  },
  {
    title: "مُحسّن لمحركات البحث",
    content:
      "تم بناء القوالب مع مراعاة تحسين محركات البحث لتعزيز قابلية اكتشاف موقعك.",
    icon: BiMagnet,
  },
  {
    title: "نشر بنقرة واحدة",
    content:
      "متكاملة بشكل وثيق مع خدمات استضافة الويب الرائدة لنشر الموقع فوراً.",
    icon: MdCloudUpload,
  },
  {
    title: "دعم العولمة",
    content: "يدعم لغات متعددة، مما يجعل موقعك جذابًا لجمهور عالمي.",
    icon: FaEarthAsia,
  },
];

export const FEATURES_FR = [
  {
    title: "Avantage Open Source",
    content:
      "Complètement gratuit avec une multitude d'options de personnalisation.",
    icon: BsGithub, // Icon likely remains the same
  },
  {
    title: "Conception Réactive",
    content:
      "Modèles méticuleusement conçus pour assurer un affichage optimal sur tous les appareils.",
    icon: FaMobileScreenButton, // Icon likely remains the same
  },
  {
    title: "Personnalisation Facile",
    content:
      "Changez facilement les couleurs, les polices et les mises en page sans aucune connaissance en codage.",
    icon: FaToolbox, // Icon likely remains the same
  },
  {
    title: "Optimisé pour le référencement SEO",
    content:
      "Modèles conçus en tenant compte de l'optimisation pour les moteurs de recherche afin d'améliorer la découvrabilité de votre site Web.",
    icon: BiMagnet, // Icon likely remains the same
  },
  {
    title: "Déploiement en un clic",
    content:
      "Intégré de manière étroite aux principaux services d'hébergement Web pour une publication instantanée de votre site Web.",
    icon: MdCloudUpload, // Icon likely remains the same
  },
  {
    title: "Prise en charge de la mondialisation",
    content:
      "Prend en charge plusieurs langues, rendant votre site Web attrayant pour un public international.",
    icon: FaEarthAsia, // Icon likely remains the same
  },
];

interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_AR,
  FEATURES_FR,
};

