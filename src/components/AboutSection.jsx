import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import your 4 JPEG images from the assets folder
import pic1 from "../assets/pic1.jpeg";
import pic2 from "../assets/pic2.jpeg";
import pic3 from "../assets/pic3.jpeg";
import pic4 from "../assets/pic4.jpeg";

export default function AboutSection() {
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Clinic Image Carousel (Pure CSS Fade, No Zoom) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Ariana Medical Complex"
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
              <span className="text-slate-900">About </span>
              <span className="text-[#00a8ff]">Dr. Sidiqi</span>
            </h2>

            {/* Content with Light Red Highlights */}
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Dr. Abdul Wahed Sidiqi is a distinguished cardiologist and medical
              pioneer dedicated to transforming cardiovascular care in
              Afghanistan. He is the founder of the{" "}
              <strong className="text-red-400">Ariana Medical Complex</strong>{" "}
              (2018) and the Afghanistan Cardiovascular Association,
              establishing world-class diagnostic and treatment facilities for
              thousands of patients.
            </p>

            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              Beyond his clinical excellence, Dr. Sidiqi is a proud member of
              the{" "}
              <strong className="text-red-400">World Heart Association</strong>{" "}
              and a Fellow of the European Society of Cardiology (FESC). His
              unwavering commitment to patient-first care and his international
              collaborations have positioned him as a leading figure in
              advancing heart health globally.
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
              More about Dr. Sidiqi
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
