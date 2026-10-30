import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Activity,
  Globe2,
  Building2,
  Award,
  GraduationCap,
  ArrowUpRight,
  Stethoscope,
  BookOpen,
  ChevronDown,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

// Import your local images
import Drpic from "../assets/Drpic.png";
import why4 from "../assets/why4.jpeg";

const timeline = [
  {
    year: "2001",
    title: "Medical Degree (MD)",
    desc: "Graduated from Kabul University of Medical Sciences.",
  },
  {
    year: "2004",
    title: "Academic Career",
    desc: "Became an assistant professor of cardiology at Kabul University.",
  },
  {
    year: "2006",
    title: "Internal Medicine",
    desc: "Completed specialized training at Aliabad Teaching Hospital.",
  },
  {
    year: "2008",
    title: "Cardiology Fellowship",
    desc: "Undertook advanced cardiology training in the Netherlands.",
  },
  {
    year: "2011",
    title: "International Training",
    desc: "Studied advanced cardiovascular applications at Seoul University, South Korea.",
  },
  {
    year: "2017",
    title: "Master's Degree",
    desc: "Earned a master's degree in invasive cardiology from Avicenna Tajik Medical University.",
  },
  {
    year: "2022/23",
    title: "European Recognition",
    desc: "Awarded Fellowship of the European Society of Cardiology (FESC).",
  },
];

const institutions = [
  {
    year: "2009",
    name: "Ariana Hospital",
    desc: "Founded to expand cardiology services and provide specialized training.",
    icon: Building2,
  },
  {
    year: "2011",
    name: "Echo Society of Afghanistan",
    desc: "Advancing echocardiography education and professional standards.",
    icon: Activity,
  },
  {
    year: "2014",
    name: "Afghanistan Cardiovascular Association",
    desc: "Promoting cardiovascular research and public awareness.",
    icon: Globe2,
  },
  {
    year: "2018",
    name: "Ariana Medical Complex",
    desc: "A state-of-the-art center for specialized cardiac care and diagnostics.",
    icon: HeartPulse,
  },
];

const affiliations = [
  ["FESC", "European Society of Cardiology", "2022/2023"],
  ["WHF", "World Heart Federation", "Member"],
  ["FAPSC", "Asia Pacific", "Fellow"],
  ["FJCS", "Japan", "Fellow"],
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <main className="bg-[#f7f9fc] min-h-screen overflow-hidden">
      {/* ========================================= */}
      {/* HERO SECTION                              */}
      {/* ========================================= */}
      <section className="relative bg-white min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 relative z-10 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-10 h-[2px] bg-red-500" />
              <span className="text-red-500 text-xs font-bold tracking-[0.3em] uppercase">
                Professional Profile
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-slate-900">
              Dr. Abdul Wahed
              <span className="block text-[#00a8ff] mt-2">Sidiqi</span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">
              Cardiologist, medical educator, and researcher dedicated to
              advancing cardiovascular healthcare and medical education.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              {["Cardiology", "Medical Education", "Research"].map((item) => (
                <span
                  key={item}
                  className="border border-red-200 bg-red-50 rounded-full px-5 py-2 text-sm text-red-500 font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* INTRODUCTION (40% Image / 60% Text)       */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative flex justify-center"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] md:w-[350px] md:h-[350px] bg-blue-400 rounded-full mix-blend-multiply filter blur-[80px] opacity-30"></div>

            {/* UPDATED: Using the Drpic image from assets here */}
            <img
              src={Drpic}
              alt="Dr. Abdul Wahed Sidiqi"
              className="relative z-10 w-full h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <span className="text-[#00a8ff] text-xs font-bold tracking-[0.25em] uppercase">
              About the Doctor
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mt-4 mb-6">
              A career built around
              <span className="text-[#00a8ff]"> advancing heart health.</span>
            </h2>

            <div className="w-16 h-1 bg-red-500 mt-2 mb-8 rounded-full" />

            <div className="space-y-6 text-slate-600 leading-8 text-[15px] md:text-base">
              <p>
                Dr. Abdul Wahed Sidiqi is a distinguished Afghan cardiologist,
                university lecturer, and healthcare institution founder. With
                over two decades of clinical experience, he is recognized for
                his contributions to cardiology education and the development of
                structured echocardiography and ECG curricula, which have
                trained over 100 physicians across Afghanistan.
              </p>

              <p>
                His expertise spans{" "}
                <strong className="text-slate-900">
                  invasive cardiology, preventive care, and emergency cardiac
                  life support (ACLS).
                </strong>{" "}
                He has also contributed to cardiovascular research, publishing
                in internationally recognized journals, including the American
                Heart Association's Circulation.
              </p>

              <p>
                Through clinical practice, research, and medical education, Dr.
                Sidiqi is committed to a patient-first approach and improving
                cardiovascular healthcare outcomes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* EDUCATION TIMELINE (Clean bg, Blue number) */}
      {/* ========================================= */}
      <section
        id="timeline"
        className="bg-slate-50 py-24 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="mb-16">
            <span className="text-red-500 text-xs font-bold tracking-[0.25em] uppercase">
              Professional Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-5 text-red-500">
              Education & Career
            </h2>
            <p className="text-slate-600 mt-5 max-w-xl leading-7">
              A journey of academic achievement, international training, and
              continued contributions to cardiovascular medicine.
            </p>
          </div>

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
            <div className="space-y-3">
              {timeline.map((item, index) => (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(index)}
                  className={`group w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-5 ${
                    activeIndex === index
                      ? "bg-white border-red-500 shadow-sm"
                      : "bg-transparent border-slate-200 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`text-sm font-bold min-w-[75px] transition-colors ${
                      activeIndex === index
                        ? "text-red-500"
                        : "text-slate-500 group-hover:text-red-500"
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`font-semibold text-sm flex-1 transition-colors ${
                      activeIndex === index
                        ? "text-slate-900"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {item.title}
                  </span>
                  {/* Chevron icon turns red on hover */}
                  <ChevronDown
                    size={17}
                    className={`transition-all duration-300 ${
                      activeIndex === index
                        ? "-rotate-90 text-red-500"
                        : "text-slate-400 group-hover:text-red-500"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="group w-full border border-slate-200 bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-10">
                    {/* Icon turns full red (bg and text) on hover */}
                    <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                      <GraduationCap size={25} />
                    </div>
                    <span className="text-red-500 text-xs tracking-[0.2em] font-bold uppercase">
                      Career Milestone
                    </span>
                  </div>

                  {/* Number is now Blue */}
                  <span className="text-5xl md:text-6xl font-bold text-[#00a8ff]">
                    {timeline[activeIndex].year}
                  </span>

                  <h3 className="text-2xl md:text-3xl font-bold mt-6 text-slate-900">
                    {timeline[activeIndex].title}
                  </h3>
                  <p className="text-slate-600 text-base leading-8 mt-5 max-w-lg">
                    {timeline[activeIndex].desc}
                  </p>
                  <div className="w-16 h-1 bg-[#00a8ff] rounded-full mt-10" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* EXPERTISE */}
      {/* ========================================= */}
      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="mb-12">
            <span className="text-[#00a8ff] text-xs font-bold tracking-[0.25em] uppercase">
              Areas of Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              Medical expertise & contributions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: HeartPulse,
                title: "Clinical Cardiology",
                desc: "Cardiovascular diagnosis and patient-centered care.",
              },
              {
                icon: Activity,
                title: "Echocardiography & ECG",
                desc: "Cardiac imaging and medical training.",
              },
              {
                icon: Stethoscope,
                title: "Invasive Cardiology",
                desc: "Specialized cardiovascular procedures.",
              },
              {
                icon: BookOpen,
                title: "Medical Education",
                desc: "Training and developing future physicians.",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -7 }}
                  className="p-7 rounded-2xl bg-[#f7f9fc] border border-slate-100 hover:border-[#00a8ff]/30 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00a8ff] flex items-center justify-center mb-6 group-hover:bg-[#00a8ff] group-hover:text-white transition-colors">
                    <Icon size={23} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-6">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* INSTITUTIONS & INITIATIVES                */}
      {/* ========================================= */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00a8ff] text-xs font-bold tracking-[0.25em] uppercase">
              Leadership & Vision
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
              Institutions & Initiatives
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Focused, specialist care and the development of world-class
              healthcare infrastructure for cardiovascular conditions across
              Afghanistan.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[400px] md:min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white group"
            >
              <img
                src={why4}
                alt="Dr. Sidiqi in surgery"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041229]/40 to-transparent"></div>
            </motion.div>

            <div className="flex flex-col gap-4">
              {institutions.map((inst, index) => {
                const Icon = inst.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white/80 backdrop-blur-md border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] rounded-2xl p-6 flex items-start gap-5 hover:bg-white hover:border-[#00a8ff]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl shrink-0 group-hover:bg-[#00a8ff] group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-lg">
                        {inst.name}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                        {inst.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}

              <div className="mt-4 flex justify-start md:justify-end">
                <a
                  href="#timeline"
                  className="bg-[#00a8ff] hover:bg-[#0096e0] text-white px-8 py-3.5 rounded-full font-bold flex items-center gap-2 transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
                >
                  Read the full profile
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* AFFILIATIONS */}
      {/* ========================================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
          <div>
            <span className="text-[#00a8ff] text-xs font-bold tracking-[0.25em] uppercase">
              International Recognition
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-5 leading-tight">
              Global affiliations & professional recognition.
            </h2>
            <p className="text-slate-500 leading-7 mt-6">
              Professional fellowships and memberships reflecting international
              engagement in cardiovascular medicine.
            </p>
            <div className="flex items-center gap-3 mt-8 text-red-500">
              <Award size={23} />
              <span className="font-semibold text-sm">
                Professional Affiliations
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {affiliations.map(([short, name, status], index) => (
              <motion.div
                key={short}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg transition-shadow group"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="text-2xl font-bold text-[#00a8ff] group-hover:text-red-500 transition-colors">
                    {short}
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="text-slate-300 group-hover:text-red-500 transition-colors"
                  />
                </div>
                <h3 className="font-bold text-slate-900">{name}</h3>
                <span className="inline-block mt-4 text-xs font-semibold text-[#00a8ff] bg-blue-50 group-hover:bg-red-50 group-hover:text-red-500 transition-colors px-3 py-2 rounded-full">
                  {status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* CONTACT SECTION                           */}
      {/* ========================================= */}
      <section className="relative py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-50 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="text-[#00a8ff] text-xs font-bold tracking-[0.25em] uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4 mb-6">
            Have Concerns About Your Heart?
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Dr. Sidiqi and his expert team at Ariana Medical Complex are ready
            to help. Take the first step towards a healthier heart today.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 px-6 py-4 rounded-2xl">
              <Phone className="text-[#00a8ff]" size={20} />
              <span className="font-bold">+93 781 111 191</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 px-6 py-4 rounded-2xl">
              <Mail className="text-[#00a8ff]" size={20} />
              <span className="font-bold">a.sidiqi@aca.af</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 bg-slate-50 px-6 py-4 rounded-2xl">
              <MapPin className="text-[#00a8ff]" size={20} />
              <span className="font-bold">Kabul, Afghanistan</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-[#00a8ff] hover:bg-[#0096e0] text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:-translate-y-1"
          >
            Contact Us / Book Appointment
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
