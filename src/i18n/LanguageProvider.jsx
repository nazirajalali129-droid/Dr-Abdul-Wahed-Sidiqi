import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./context";
import { translations } from "./translations";

const STORAGE_KEY = "site-language";

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch {
    // localStorage can be blocked; fall back to English
  }
  return "en";
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage);

  // Keep <html lang dir> and the tab title in sync with the chosen language.
  useEffect(() => {
    const { lang: code, dir, title } = translations[lang].meta;
    document.documentElement.lang = code;
    document.documentElement.dir = dir;
    document.title = title;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang],
      isRTL: translations[lang].meta.dir === "rtl",
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
