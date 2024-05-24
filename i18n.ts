import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export const locales = ["", "en", "en-US", "ar", "fr"];
export const localeNames: any = {
  en: "🇺🇸 English",
  ar: "🇸🇦 العربية",
  fr: "FR Français",
};
export const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
