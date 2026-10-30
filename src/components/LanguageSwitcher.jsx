import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "../i18n/context";
import { LANGUAGES } from "../i18n/translations";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGUAGES.find((l) => l.code === lang);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t.meta.switchLabel}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-slate-200 bg-white/70 text-slate-700 text-sm font-bold hover:border-[#00a8ff] hover:text-[#00a8ff] transition-colors"
      >
        <Globe size={16} />
        <span>{current.label}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute end-0 mt-2 min-w-[150px] overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-50"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code} role="option" aria-selected={l.code === lang}>
              <button
                type="button"
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-3 text-sm font-bold transition-colors ${
                  l.code === lang
                    ? "text-[#00a8ff] bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{l.label}</span>
                {l.code === lang && <Check size={15} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
