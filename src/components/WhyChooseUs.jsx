import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Clock,
  Award,
  Globe,
  Activity,
  HeartPulse,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const w = t.why;

  const icons = [Award, Globe, Activity, HeartPulse];
  const features = w.features.map((f, i) => ({ ...f, icon: icons[i] }));

  return (
    <>
      {/* ========================================= */}
      {/* WHY CHOOSE US SECTION (Clean & Creative)  */}
      {/* ========================================= */}
      <section className="relative py-16 sm:py-24 bg-slate-50 overflow-hidden">
        {/* Creative Background Elements */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#00a8ff]" />
              <span className="text-[#00a8ff] text-xs font-bold tracking-[0.3em] uppercase">
                {w.eyebrow}
              </span>
              <span className="w-8 h-[2px] bg-[#00a8ff]" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-slate-900 mb-6">
              {w.title}
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed">
              {w.desc}
            </p>
          </div>

          {/* 4 Cards Grid with Clean Shadow */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,168,255,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden"
                >
                  {/* Subtle colored glow inside card on hover */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                  {/* Icon */}
                  <div className="bg-blue-50 text-[#00a8ff] w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#00a8ff] group-hover:text-white transition-colors duration-300 relative z-10 shrink-0">
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight relative z-10">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow relative z-10">
                    {feature.desc}
                  </p>

                  {/* Bottom Footer Note */}
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-auto pt-4 border-t border-slate-100 relative z-10">
                    <Clock size={14} className="shrink-0 text-[#00a8ff]" />
                    <p>{w.verified}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CONTACT SECTION                           */}
      {/* ========================================= */}
      <section className="relative py-20 bg-white overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {w.ctaTitle}
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            {w.ctaDesc}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center text-center gap-3 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-6 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
          >
            <Phone size={20} />
            {w.ctaButton}
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
