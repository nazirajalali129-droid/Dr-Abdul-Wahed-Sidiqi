import { motion } from "framer-motion";
import { CalendarDays, Heart, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

// Ensure the path matches your file exactly
import DrSidiqiImg from "../assets/Drsidiqi.png";

import StatsMarquee from "../components/StatsMarquee";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";

import WhyChooseUs from "../components/WhyChooseUs";
import { useLanguage } from "../i18n/context";

export default function Home() {
  const { t } = useLanguage();
  const h = t.home;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-white">
      {/* ========================================= */}
      {/* 1. HERO SECTION (Full Screen)             */}
      {/* ========================================= */}
      <div className="relative min-h-screen lg:h-screen bg-white overflow-hidden pt-20">
        {/* Subtle Light Blue & Light Red Background Glows */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[120px] opacity-60"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full lg:h-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 w-full lg:h-full">
            {/* LEFT CONTENT: Doctor Name & Information */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl flex flex-col justify-center order-2 lg:order-1 pb-12 lg:pb-0 lg:ps-10"
            >
              {/* Badge with Heart Icon */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 mb-6"
              >
                <span className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-blue-200 shadow-sm">
                  <Heart
                    size={14}
                    className="text-red-500 fill-red-500 animate-pulse"
                  />
                  {h.badge}
                </span>
              </motion.div>

              {/* Name layout (Size reduced & Colors adjusted) */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5 sm:mb-6 tracking-tight flex flex-wrap gap-x-3 sm:gap-x-6"
              >
                <span className="text-slate-900">{h.name1}</span>
                <span className="text-[#00a8ff]">{h.name2}</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg"
              >
                {h.desc}
              </motion.p>

              {/* Buttons (Size reduced) */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                {/* Book Appointment - Light Red */}
                <Link
                  to="/contact"
                  className="flex items-center gap-2 bg-red-400 hover:bg-red-500 text-white px-6 py-3 text-sm rounded-full font-semibold transition-all shadow-[0_10px_20px_rgba(248,113,113,0.3)]"
                >
                  {h.book} <CalendarDays size={16} />
                </Link>

                {/* View Services - Exact Blue (#00a8ff) */}
                <Link
                  to="/services"
                  className="flex items-center gap-2 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-6 py-3 text-sm rounded-full font-semibold transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)]"
                >
                  {h.viewServices} <Stethoscope size={16} />
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT: Large Image Touching Bottom */}
            <div className="relative flex justify-center items-end order-1 lg:order-2 h-[340px] sm:h-[440px] lg:h-full w-full">
              {/* BLUE SHADOW BEHIND IMAGE */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

              {/* DOCTOR IMAGE 
                  - pt-[25px] keeps 25px space from the top
                  - items-end on parent keeps 0 space from the bottom
              */}
              <motion.img
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                src={DrSidiqiImg}
                alt={h.imgAlt}
                className="relative z-10 object-contain object-bottom w-full max-w-lg lg:max-w-2xl h-auto max-h-full pt-[25px] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <StatsMarquee />
      <AboutSection />
      <ServicesSection />

      <WhyChooseUs />
    </div>
  );
}
