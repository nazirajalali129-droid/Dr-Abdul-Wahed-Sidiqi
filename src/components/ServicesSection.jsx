import { motion } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Stethoscope,
  Microscope,
  ShieldCheck,
  ArrowRight,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

export default function ServicesSection() {
  const { t } = useLanguage();
  const s = t.servicesSection;

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            {s.title1}<span className="text-[#00a8ff]">{s.title2}</span>
          </h2>
          <p className="text-slate-600 text-lg">
            {s.desc}
          </p>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 mb-12"
        >
          {/* Main Left Card (Invasive Cardiology) */}
          <motion.div
            variants={item}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-red-50 to-white p-8 rounded-3xl border border-red-100 shadow-sm flex flex-col justify-center relative overflow-hidden group hover:border-blue-200 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 group-hover:bg-blue-500 transition-colors duration-500"></div>

            {/* Icon - Changes to Blue on Hover */}
            <div className="bg-red-100 text-red-500 p-4 rounded-2xl w-fit mb-6 transition-all duration-300 group-hover:bg-blue-50 group-hover:text-[#00a8ff]">
              <HeartPulse size={32} />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {s.invasiveTitle}
            </h3>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              {s.invasiveDesc}
            </p>

            {/* Badge - Changes to Blue on Hover */}
            <div className="bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold w-fit flex items-center gap-2 border border-red-100 shadow-sm transition-all duration-300 group-hover:text-[#00a8ff] group-hover:border-blue-100">
              <Award size={16} />
              {s.fesc}
            </div>
          </motion.div>

          {/* Top Right Card (Echocardiography) */}
          <motion.div
            variants={item}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="bg-red-50 text-red-500 p-3 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-[#00a8ff]">
              <Activity size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00a8ff] transition-colors">
              {s.echoTitle}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {s.echoDesc}
            </p>
          </motion.div>

          {/* Top Right Card 2 (ECG) */}
          <motion.div
            variants={item}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="bg-red-50 text-red-500 p-3 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-[#00a8ff]">
              <Stethoscope size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00a8ff] transition-colors">
              {s.ecgTitle}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {s.ecgDesc}
            </p>
          </motion.div>

          {/* Bottom Right Card (Doppler) */}
          <motion.div
            variants={item}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="bg-red-50 text-red-500 p-3 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-[#00a8ff]">
              <Microscope size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00a8ff] transition-colors">
              {s.dopplerTitle}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {s.dopplerDesc}
            </p>
          </motion.div>

          {/* Bottom Right Card 2 (Emergency) */}
          <motion.div
            variants={item}
            className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 group"
          >
            <div className="bg-red-50 text-red-500 p-3 rounded-xl w-fit mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-50 group-hover:text-[#00a8ff]">
              <ShieldCheck size={24} />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#00a8ff] transition-colors">
              {s.emergencyTitle}
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              {s.emergencyDesc}
            </p>
          </motion.div>
        </motion.div>

        {/* More Services Button */}
        <div className="flex justify-center mt-10">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
          >
            {s.more}
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
