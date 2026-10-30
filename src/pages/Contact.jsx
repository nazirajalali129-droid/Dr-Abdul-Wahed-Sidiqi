import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CalendarDays, Send } from "lucide-react";
import { useLanguage } from "../i18n/context";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contactPage;

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
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-slate-900">{c.title1}</span>
            <span className="text-[#00a8ff]">{c.title2}</span>
          </h1>
          <p className="text-slate-600 text-lg">
            {c.desc}
          </p>
        </motion.div>

        {/* MAP & CONTACT INFO GRID */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          {/* LEFT SIDE: Contact Info Cards (Moved to first) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6">
              {c.infoTitle}
            </h2>

            <div className="space-y-4">
              {/* Exact Address Card */}
              <div className="flex items-start gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group hover:shadow-md hover:border-red-400/50 cursor-default">
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {c.addressLabel}
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300 leading-relaxed">
                    {c.addressLine1}
                    <br />
                    {c.addressLine2}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <a
                href="tel:+93781111191"
                className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {c.phoneLabel}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    <span dir="ltr" className="inline-block">
                      +93 781 111 191
                    </span>
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:a.sidiqi@aca.af"
                className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {c.emailLabel}
                  </p>
                  <p className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    <span dir="ltr" className="inline-block">
                      a.sidiqi@aca.af
                    </span>
                  </p>
                </div>
              </a>

              {/* Hours Card */}
              <div className="flex items-center gap-3 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group hover:shadow-md hover:border-red-400/50 cursor-default">
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {c.hoursLabel}
                  </p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    {c.hours}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Working Google Map (Moved to second) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-[380px] sm:h-[500px]"
          >
            <iframe
              title={c.mapTitle}
              src="https://maps.google.com/maps?q=Ariana%20Medical%20Complex%2C%20Kabul%2C%20Afghanistan&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full object-cover grayscale-[10%] contrast-125"
            ></iframe>

            {/* Floating Address Badge on Map */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 bg-white/90 backdrop-blur-md p-3 sm:p-5 rounded-2xl border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-start gap-4">
              <div className="bg-[#00a8ff] p-2.5 rounded-xl text-white shadow-sm shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {c.mapName}
                </h4>
                <p className="text-sm text-slate-600 mt-1 font-medium">
                  {c.mapAddress}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOOKING FORM SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-[2rem] sm:rounded-[3rem] p-5 sm:p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle form glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <CalendarDays className="text-[#00a8ff]" /> {c.formTitle}
            </h2>
            <p className="text-slate-500">
              {c.formDesc}
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.fullName}
              </label>
              <input
                type="text"
                placeholder={c.fullNamePh}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.email}
              </label>
              <input
                type="email"
                dir="ltr"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.phone}
              </label>
              <input
                type="tel"
                dir="ltr"
                placeholder="+93 (700) 000-000"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.specialty}
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700">
                {c.specialties.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.date}
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.time}
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700">
                {c.times.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                {c.message}
              </label>
              <textarea
                rows="3"
                placeholder={c.messagePh}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end mt-2">
              {/* Submit Button (Blue to Red Hover) */}
              <button
                type="submit"
                className="w-full sm:w-auto justify-center bg-[#00a8ff] hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:shadow-[0_10px_20px_rgba(239,68,68,0.3)] flex items-center gap-2 hover:-translate-y-1"
              >
                {c.submit} <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
