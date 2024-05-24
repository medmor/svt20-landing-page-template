import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/medmor/svt20-landing-page-template";

const baseSiteConfig = {
  name: "SVT20 Landing Page Template",
  description:
    "SVT20 landing page based on : https://landingpage.weijunext.com/",
  url: "https://svt20.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: [
    "landing page boilerplate",
    "landing page template",
    "awesome landing page",
    "next.js landing page",
    "svt20 landing page",
  ],
  authors: [
    {
      name: "medmor",
      url: "https://svt20.com",
      twitter: "https://x.com/medmor4",
    },
  ],
  creator: "@medmor",
  openSourceURL: "https://github.com/medmor/svt20-landing-page-template",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "dark", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "twitter",
      href: "https://x.com/medmor4",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://buymeacoffee.com/svtbacma11w?new=1",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:svtbacma11@gmail.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://x.com/medmor4",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/medmor", icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://buymeacoffee.com/svtbacma11w?new=1",
      icon: SiBuymeacoffee,
    },
    {
      name: "juejin",
      href: "https://juejin.cn/user/26044008768029",
      icon: SiJuejin,
    },
    {
      name: "weChat",
      href: "https://weijunext.com/make-a-friend",
      icon: BsWechat,
    },
  ],
  footerProducts: [
    { url: "https://weijunext.com/", name: "J实验室" },
    { url: "https://smartexcel.cc/", name: "Smart Excel" },
    {
      url: "https://landingpage.weijunext.com/",
      name: "Landing Page Boilerplate",
    },
    { url: "https://nextjs.weijunext.com/", name: "Next.js Practice" },
    { url: "https://starter.weijunext.com/", name: "Next.js Starter" },
    { url: "https://githubbio.com", name: "Github Bio Generator" },
    {
      url: "https://github.com/weijunext/indie-hacker-tools",
      name: "Indie Hacker Tools",
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};

