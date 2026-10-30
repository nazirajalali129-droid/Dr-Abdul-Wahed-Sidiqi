import { motion } from "framer-motion";
import { useLanguage } from "../i18n/context";

export default function StatsMarquee() {
  const { t } = useLanguage();

  // Values come from Dr. Sidiqi's biography; labels are translated
  const values = ["20+", "100+", "10+", "3+"];
  const stats = values.map((value, i) => ({ value, label: t.stats[i] }));

  return (
    <div className="bg-slate-50 py-8 border-y border-slate-200 overflow-hidden">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex gap-16 px-8"
        >
          {/* Render multiple times for seamless loop */}
          {[...stats, ...stats, ...stats, ...stats].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[220px] group cursor-default"
            >
              {/* Numbers - Kept the beautiful blue gradient */}
              <h3 className="text-4xl md:text-5xl italic font-black font-['Outfit'] text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-400 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </h3>

              {/* Labels - Changed to bold, dark black, and slightly larger for easy reading */}
              <p className="text-sm italic font-black font-['Syne'] text-slate-900 mt-2 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
