"use client";
import { LineText } from "@/components/LineText";
import CTAButton from "@/components/home/CTAButton";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations('Hero');
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.3,
          ease: [0, 0.71, 0.2, 1],
          scale: {
            type: "tween",
          },
        }}
      >
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 pt-16 md:pt-24 text-center">
          <h1>
            {t("title1")} <LineText>{t("title2")}</LineText> {t("title3")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-2xl tracking-tight text-slate-700 dark:text-slate-400">

            {t("description")}
          </p>
        </section>
      </motion.div>
      <CTAButton ></CTAButton>
    </>
  );
};

export default Hero;
