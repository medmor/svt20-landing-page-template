import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n";

console.log(locales.join("|"));
export const config = {
  matcher: ["/", `/(en|en-US|ar|fr)/:path*`],
};

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: defaultLocale,
});

