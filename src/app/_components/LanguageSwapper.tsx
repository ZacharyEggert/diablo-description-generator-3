"use client";

import { defaultLanguage, supportedLanguages } from "~/lib/localization";

import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const LanguageSwapper = ({
  lang,
}: {
  lang: (typeof supportedLanguages)[number];
}) => {
  const pathname = usePathname();

  const getNextLang = (lang: string) => {
    const index = supportedLanguages.indexOf(
      lang as (typeof supportedLanguages)[number],
    );
    const nextIndex = (index + 1) % supportedLanguages.length;
    return supportedLanguages[nextIndex] ?? defaultLanguage;
  };

  const nextLang = useMemo(() => getNextLang(lang), [lang]);
  const nextLangURL = useMemo(
    () => `${pathname}?lang=${nextLang}`,
    [nextLang, pathname],
  );

  return (
    <div className="fixed right-4 bottom-4 z-10 flex h-8 w-8 max-w-sm items-center justify-between rounded-lg bg-neutral-100 p-2 shadow-md dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <Link href={nextLangURL}>{lang}</Link>
      </div>
    </div>
  );
};

export default LanguageSwapper;
