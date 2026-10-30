import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/context";

// Import your 4 JPEG images from the assets folder
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

export default function AboutSection() {
  const { t } = useLanguage();
  const a = t.aboutSection;
  const [currentImage, setCurrentImage] = useState(0);
  const images = [pic1, pic2, pic3, pic4];

  // Image carousel logic: changes every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* FULL SECTION BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Left: Clinic Image Carousel (Pure CSS Fade, No Zoom) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] lg:h-[500px]"
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={a.imgAlt}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
              <span className="text-slate-900">{a.title1}</span>
              <span className="text-[#00a8ff]">{a.title2}</span>
            </h2>

            {/* Content with Light Red Highlights */}
            <p className="text-slate-600 text-base sm:text-lg mb-6 leading-relaxed">
              {a.p1[0]}
              <strong className="text-red-400">{a.p1[1]}</strong>
              {a.p1[2]}
            </p>

            <p className="text-slate-600 text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              {a.p2[0]}
              <strong className="text-red-400">{a.p2[1]}</strong>
              {a.p2[2]}
            </p>

            {/* Smaller Button */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-6 py-3 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(0,168,255,0.2)] group text-sm"
            >
              <User
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              {a.button}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
