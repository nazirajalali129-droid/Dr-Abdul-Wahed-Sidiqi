import { motion } from "framer-motion";
import { BookOpen, FileText, Award } from "lucide-react";

export default function ResearchSection() {
  const publications = [
    {
      year: "2025",
      title:
        "Global Rounds Afghanistan: A Critical Overview of Cardiovascular Medicine",
      journal: "Circulation (American Heart Association)",
      desc: "Co-authored by Abdul Wahed Sidiqi, Diana Dad Zada, and Nader Ahmad Exeer. Indexed in PubMed.",
      link: "#",
    },
    {
      year: "2026",
      title: "Lutembacher's Syndrome During Pregnancy",
      journal: "Case Report",
      desc: "Involving collaboration among cardiology, obstetrics, and cardiovascular surgery professionals.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h4 className="text-blue-600 font-bold tracking-widest uppercase mb-2">
              Research & Publications
            </h4>
            <h2 className="text-4xl font-extrabold text-slate-900">
              Advancing Cardiovascular Science
            </h2>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-50 text-blue-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2">
              <Award size={20} /> FESC Recognized
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl hover:shadow-lg transition-shadow relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                {pub.year}
              </div>
              <BookOpen className="text-blue-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-2 leading-tight">
                {pub.title}
              </h3>
              <p className="text-red-600 font-medium text-sm mb-4">
                {pub.journal}
              </p>
              <p className="text-slate-600 text-sm mb-6">{pub.desc}</p>
              <a
                href={pub.link}
                className="text-blue-600 font-semibold text-sm flex items-center gap-1 group-hover:underline"
              >
                Read Publication <FileText size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
