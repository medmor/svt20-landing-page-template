import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { BiRocket } from "react-icons/bi";

const CTAButton = () => {
  const t = useTranslations('CTAButton')
  return (
    <Link
      href="https://github.com/weijunext/landing-page-boilerplate"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <BiRocket />
        {t("title")}
      </Button>
    </Link>
  );
};

export default CTAButton;
