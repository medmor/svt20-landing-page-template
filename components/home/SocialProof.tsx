import { Makers } from "@/config/makers";
import { useTranslations } from "next-intl";
import Image from "next/image";

const SocialProof = () => {
  const t = useTranslations('SocialProof');
  return (
    <section className="flex flex-col items-center justify-center gap-20 mt-14">
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-center">
          {Makers.map((user, index) => {
            return (
              <Image
                key={index}
                src={user.image}
                alt="User"
                height={40}
                width={40}
                className="rounded-full"
              />
            );
          })}
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          {t("maker")}
        </p>
      </div>
    </section>
  );
};

export default SocialProof;
