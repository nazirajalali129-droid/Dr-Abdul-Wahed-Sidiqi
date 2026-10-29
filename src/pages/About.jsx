import { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Activity,
  Globe,
  Building2,
  Users,
  Stethoscope,
  BookOpen,
  Award,
  GraduationCap,
} from "lucide-react";

export default function About() {
  const [activeIndex, setActiveIndex] = useState(null);

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
      year: "2022/2023",
      title: "European Recognition",
      desc: "Awarded Fellowship of the European Society of Cardiology (FESC).",
    },
  ];

  const institutions = [
    {
      year: "2009",
      name: "Ariana Hospital",
      desc: "Founded to expand cardiology services.",
      icon: <Building2 size={18} />,
    },
    {
      year: "2011",
      name: "Echo Society of Afghanistan",
      desc: "Advancing echocardiography education.",
      icon: <Activity size={18} />,
    },
    {
      year: "2014",
      name: "Afghanistan Cardiovascular Assoc.",
      desc: "Promoting cardiovascular research.",
      icon: <Globe size={18} />,
    },
    {
      year: "2018",
      name: "Ariana Medical Complex",
      desc: "A world-class center for cardiac care.",
      icon: <Heart size={18} />,
    },
  ];

  return (
    <div className="relative bg-white min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full mix-blend-multiply filter blur-[150px] opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-slate-900">Dr. Abdul Wahed </span>
            <span className="text-[#00a8ff]">Sidiqi</span>
          </h1>
          <p className="text-xl text-red-500 font-bold mb-6">
            Cardiologist · Medical Educator · Researcher
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT SIDE: ABOUT & AFFILIATIONS */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full"
          >
            {/* Biography Section */}
            <div className="mb-10">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-4 flex items-center gap-3">
                <Users className="text-[#00a8ff]" /> About Dr. Sidiqi
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dr. Abdul Wahed Sidiqi is a distinguished Afghan cardiologist,
                  university lecturer, and healthcare institution founder. With
                  over two decades of clinical experience, he is renowned for
                  his pioneering work in cardiology education, particularly in
                  developing structured{" "}
                  <strong className="text-slate-800">
                    echocardiography and ECG curricula
                  </strong>{" "}
                  that have trained over 100 physicians across Afghanistan.
                </p>
                <p>
                  His expertise spans{" "}
                  <strong className="text-slate-800">
                    invasive cardiology, preventive care, and emergency cardiac
                    life support (ACLS)
                  </strong>
                  . He has contributed significantly to cardiovascular research,
                  publishing in globally recognized journals like the American
                  Heart Association's <em>Circulation</em>, addressing topics
                  from cardiomyopathies to rheumatic valvular heart disease.
                </p>
                <p>
                  Dr. Sidiqi is deeply committed to a patient-first approach,
                  combining world-class diagnostics with compassionate care to
                  improve heart health outcomes in Afghanistan and globally.
                </p>
              </div>
            </div>

            {/* Global Affiliations (Moved to bottom of left side) */}
            <div className="mt-auto">
              <div className="bg-gradient-to-br from-[#00a8ff] to-blue-700 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 border-b border-white/20 pb-3">
                  <Award size={22} /> Global Affiliations
                </h3>
                <ul className="space-y-4 relative z-10">
                  <li className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="font-medium">FESC (Europe)</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-md">
                      2022/2023
                    </span>
                  </li>
                  <li className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="font-medium">World Heart Association</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-md">
                      Member
                    </span>
                  </li>
                  <li className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="font-medium">FAPSC (Asia Pacific)</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-md">
                      Fellow
                    </span>
                  </li>
                  <li className="flex justify-between items-center bg-white/10 p-3 rounded-xl">
                    <span className="font-medium">FJCS (Japan)</span>
                    <span className="text-xs bg-white/20 px-2 py-1 rounded-md">
                      Fellow
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: INSTITUTIONS & EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Institutions Founded */}
            <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="text-red-500" /> Institutions Founded
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {institutions.map((inst, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-[#00a8ff]/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-slate-50 text-slate-400 p-2 rounded-lg group-hover:bg-blue-50 group-hover:text-[#00a8ff] transition-colors">
                        {inst.icon}
                      </div>
                      <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-md">
                        {inst.year}
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm mb-1">
                      {inst.name}
                    </h4>
                    <p className="text-xs text-slate-500">{inst.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Timeline (Hover to reveal) */}
            <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-[2rem] border border-slate-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <GraduationCap className="text-[#00a8ff]" /> Education & Career
              </h3>

              <div className="relative pl-6 border-l-2 border-slate-200 space-y-1">
                {timeline.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(null)}
                      className="relative cursor-pointer py-3"
                    >
                      {/* Red Dot */}
                      <span
                        className={`absolute -left-[31px] top-5 w-4 h-4 rounded-full border-2 border-white shadow-sm transition-all duration-300 ${
                          isActive ? "bg-red-500 scale-125" : "bg-slate-300"
                        }`}
                      ></span>

                      {/* Year & Title */}
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-mono text-xs font-bold px-2 py-1 rounded-md transition-colors ${
                            isActive
                              ? "bg-red-50 text-red-500"
                              : "bg-white text-slate-500 border border-slate-200"
                          }`}
                        >
                          {item.year}
                        </span>
                        <h4
                          className={`font-bold text-sm transition-colors ${
                            isActive ? "text-[#00a8ff]" : "text-slate-700"
                          }`}
                        >
                          {item.title}
                        </h4>
                      </div>

                      {/* Description (Hover to reveal) */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isActive ? "auto" : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-600 text-sm leading-relaxed mt-2 pl-1">
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
