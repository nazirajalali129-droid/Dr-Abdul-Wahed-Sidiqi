import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, HeartPulse, Menu, X, Globe } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/context";
import { LANGUAGES } from "../i18n/translations";

export default function Navbar() {
  const location = useLocation();
  const { t, lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.about, path: "/about" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.contact, path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  // Escape closes the menu
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // CRYSTAL EFFECT: Semi-transparent background, heavy blur, light borders, and soft shadow
      className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 gap-3">
          {/* Logo Section */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3 group min-w-0"
          >
            <div className="w-11 h-11 shrink-0 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-100 shadow-sm transition-transform group-hover:scale-105">
              <HeartPulse size={24} className="animate-pulse" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-[1.15rem] font-extrabold text-slate-800 leading-tight tracking-tight truncate">
                {t.nav.name}
              </span>
              <span className="text-[10px] font-bold text-[#00a8ff] tracking-[0.2em] uppercase mt-0.5 truncate">
                {t.nav.role}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-[#00a8ff]"
                    : "text-slate-600 hover:text-[#00a8ff]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop: language + CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="flex items-center gap-2 bg-[#00a8ff] text-white px-5 xl:px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:bg-[#0096e0] transition-colors"
              >
                {t.nav.book}
                <CalendarDays size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Mobile / tablet: hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden shrink-0 w-11 h-11 rounded-full border border-slate-200 bg-white/70 text-slate-700 flex items-center justify-center hover:border-[#00a8ff] hover:text-[#00a8ff] transition-colors"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full inset-x-0 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMenu}
                    className={`px-5 py-3.5 rounded-xl text-base font-bold transition-colors ${
                      active
                        ? "bg-blue-50 text-[#00a8ff]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#00a8ff]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Language choice */}
              <div className="mt-3 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 px-1 mb-3 text-xs font-bold text-slate-400">
                  <Globe size={14} />
                  {t.meta.switchLabel}
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      onClick={() => setLang(l.code)}
                      className={`py-3 rounded-xl text-sm font-bold border transition-colors ${
                        l.code === lang
                          ? "bg-[#00a8ff] border-[#00a8ff] text-white"
                          : "bg-white border-slate-200 text-slate-700 hover:border-[#00a8ff]"
                      }`}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(0,168,255,0.3)] transition-colors"
              >
                {t.nav.book}
                <CalendarDays size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
