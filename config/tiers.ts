import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open-Source / Free",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Freely clone the landing page boilerplate from the GitHub repository.",
    features: [
      "Free",
      "Access to full code",
      "Secondary development",
      "MIT License",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Customize",
    href: siteConfig.authors[0].twitter || "#",
    description: "Pay to customize an exclusive landing page.",
    price: "$188",
    features: [
      "Access to full code",
      "Secondary development",
      "Exclusive style",
      "One-on-one service",
      "More exquisite pages",
    ],
    buttonText: "Contact us",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "مفتوح المصدر / مجاني",
    price: "مجاناً",
    href: siteConfig.openSourceURL || "#",
    description: "يمكنك نسخ قالب صفحة الهبوط من مستودع GitHub بحرية.",
    features: ["مجاني", "الوصول إلى كامل الكود", "التطوير الثانوي", "رخصة MIT"],
    buttonText: "ابدأ الآن",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "تخصيص",
    href: siteConfig.authors[0].twitter || "#",
    description: "ادفع لتخصيص صفحة هبوط حصرية.",
    price: "$188",
    features: [
      "الوصول إلى كامل الكود",
      "التطوير الثانوي",
      "أسلوب حصري",
      "خدمة فردية",
      "صفحات أكثر دقة",
    ],
    buttonText: "اتصل بنا",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_FR: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Open Source / Gratuit",
    price: "Gratuit",
    href: siteConfig.openSourceURL || "#",
    description:
      "Clonez gratuitement le modèle de page de destination à partir du dépôt GitHub.",
    features: [
      "Gratuit",
      "Accès au code complet",
      "Développement secondaire",
      "Licence MIT",
    ],
    buttonText: "Démarrer",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Customize,
    title: "Personnaliser",
    href: siteConfig.authors[0].twitter || "#",
    description: "Payez pour personnaliser une page de destination exclusive.",
    price: "188 $", // Note the currency symbol change
    features: [
      "Accès au code complet",
      "Développement secondaire",
      "Style exclusif",
      "Service personnalisé",
      "Pages plus raffinées",
    ],
    buttonText: "Contactez-nous",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_AR,
  TIERS_FR,
};
