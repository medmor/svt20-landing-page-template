import { IconType } from "react-icons";
import { BiCalculator, BiImages, BiMagnet } from "react-icons/bi";
import { BsBook, BsCheck2All, BsGithub } from "react-icons/bs";
import { FaToolbox } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import { MdCloudUpload, MdOutlineQuiz } from "react-icons/md";
import { PiExam } from "react-icons/pi";

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
    title: "Cours",
    content:
      "Une collection de résumés des cours pour les niveaux : TC, 1BAC et 2BAC.",
    icon: BsBook,
  },
  {
    title: "Exercices",
    content: "Une collection d'exercices pour les niveaux : TC, 1BAC et 2BAC.",
    icon: BsCheck2All, // Icon likely remains the same
  },
  {
    title: "Examen",
    content: "Collection des examen nationaux du 2BAC",
    icon: PiExam, // Icon likely remains the same
  },
  {
    title: "Quiz",
    content: "Testez vos connaissances par un ensemble de quiz interactif.",
    icon: MdOutlineQuiz, // Icon likely remains the same
  },
  {
    title: "Figures",
    content: "L'ensemble des figures des cours.",
    icon: BiImages, // Icon likely remains the same
  },
  {
    title: "Calculatrice",
    content:
      "La calculatrice du professeur, qui facilite le calcule des notes.",
    icon: BiCalculator, // Icon likely remains the same
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

