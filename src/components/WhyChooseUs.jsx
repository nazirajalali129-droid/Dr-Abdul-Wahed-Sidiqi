import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

// Import your local JPEG images from the assets folder
import why1 from "../assets/why1.jpeg";
import why2 from "../assets/why2.jpeg";
import why3 from "../assets/why3.jpeg";
import why4 from "../assets/why4.jpeg";

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "25+ Years of Excellence",
      desc: "With over two decades of dedicated medical practice since graduating in 2001, Dr. Sidiqi has established himself as a leading figure in Afghan cardiology.",
    },
    {
      title: "International Expertise",
      desc: "As a Fellow of the European Society of Cardiology (FESC) and a member of the World Heart Association, Dr. Sidiqi brings global standards to local care.",
    },
    {
      title: "Advanced Diagnostics",
      desc: "Dr. Sidiqi pioneered structured Echocardiography and ECG training in Afghanistan, personally training over 100 physicians.",
    },
    {
      title: "Comprehensive Patient Care",
      desc: "From preventive cardiology and lifestyle management to emergency cardiac care (ACLS) and invasive procedures, we offer a full spectrum of services.",
    },
  ];

  const images = [why1, why2, why3, why4];

  return (
    <>
      <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-slate-900">
        {/* PURE CSS SMOOTH FADE BACKGROUND */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay to ensure text is readable over images */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 h-full flex flex-col justify-between py-16">
          {/* Top: Smaller Heading on the top */}
          <div className="w-full text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest drop-shadow-md">
              Why Choose Us
            </h2>
          </div>

          {/* Bottom: Interactive Grid. 
              `items-end` forces all columns to align at the bottom. 
              When one expands, it grows upwards! */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-auto items-end">
            {features.map((feature, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)}
                  // flex-col and justify-end ensure content sits at the bottom
                  className={`pl-6 cursor-pointer flex flex-col justify-end h-[220px] transition-all duration-500 ease-in-out border-l-2 ${
                    isActive ? "border-[#00a8ff]" : "border-white/20"
                  }`}
                >
                  {/* Number: Blue when active, faded white when inactive */}
                  <span
                    className={`font-mono text-4xl font-black mb-3 block transition-colors duration-500 ${
                      isActive ? "text-[#00a8ff]" : "text-white/40"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  {/* Title: Always visible, White */}
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description: Smooth reveal that pushes the text up */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/80 text-sm leading-relaxed pt-1">
                      {feature.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            Have Concerns About Your Heart?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Dr. Sidiqi and his expert team at Ariana Medical Complex are ready
            to help. Don't wait—take the first step towards a healthier heart
            today.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
          >
            <Phone size={20} />
            Contact Us / Book Appointment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
