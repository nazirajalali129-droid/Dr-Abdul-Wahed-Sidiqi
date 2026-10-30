import { motion } from "framer-motion";
import {
  Activity,
  HeartPulse,
  Stethoscope,
  Users,
  ShieldCheck,
  Microscope,
  Droplets,
  Brain,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

// Icons for the 9 services, in the same order as the translated list
const serviceIcons = [
  <HeartPulse size={32} />,
  <Stethoscope size={32} />,
  <Activity size={32} />,
  <Microscope size={32} />,
  <ShieldCheck size={32} />,
  <Users size={32} />,
  <Droplets size={32} />,
  <Brain size={32} />,
  <Activity size={32} />,
];

export default function Services() {
  const { t } = useLanguage();
  const sp = t.servicesPage;
  const detailedServices = sp.items.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
  }));

  return (
    <div className="relative min-h-screen bg-white overflow-hidden pt-28 pb-20">
      {/* FULL PAGE BACKGROUND GLOWS (Matches Hero & About) */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight">
            <span className="text-slate-900">{sp.title1}</span>
            <span className="text-[#00a8ff]">{sp.title2}</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            {sp.desc}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon Box - Changes from Blue to Red on Hover */}
              <div className="bg-blue-50 text-[#00a8ff] p-4 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#00a8ff] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Light Crystal CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-14 sm:mt-20 bg-white/40 backdrop-blur-md border border-white/60 rounded-[2rem] sm:rounded-[3rem] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden shadow-[0_8px_32px_0_rgba(31,38,135,0.05)]"
        >
          {/* Subtle glows inside the banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 relative z-10">
            {sp.ctaTitle}
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto relative z-10 text-lg">
            {sp.ctaDesc}
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center text-center gap-2 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-6 sm:px-8 py-4 rounded-full font-bold text-sm sm:text-base transition-all relative z-10 shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
          >
            {sp.ctaButton} <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
