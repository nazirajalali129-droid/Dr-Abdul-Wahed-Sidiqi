import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CalendarDays, Send } from "lucide-react";

export default function Contact() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="text-slate-900">Get in </span>
            <span className="text-[#00a8ff]">Touch</span>
          </h1>
          <p className="text-slate-600 text-lg">
            Reach out to us directly or visit the Ariana Medical Complex. We are
            here to help you with world-class cardiovascular care.
          </p>
        </motion.div>

        {/* MAP & CONTACT INFO GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* LEFT SIDE: Contact Info Cards (Moved to first) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              {/* Exact Address Card */}
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group hover:shadow-md hover:border-red-400/50 cursor-default">
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Exact Address
                  </p>
                  <p className="text-sm font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300 leading-relaxed">
                    Afshar Area, Phase 5<br />
                    Kabul, Afghanistan
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <a
                href="tel:+93781111191"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Call Us Directly
                  </p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    +93 781 111 191
                  </p>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:a.sidiqi@aca.af"
                className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-red-400/50 transition-all duration-300 group"
              >
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Email Address
                  </p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    a.sidiqi@aca.af
                  </p>
                </div>
              </a>

              {/* Hours Card */}
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm transition-all duration-300 group hover:shadow-md hover:border-red-400/50 cursor-default">
                <div className="bg-blue-50 text-[#00a8ff] p-3 rounded-xl transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500 group-hover:scale-110 shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    Working Hours
                  </p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-red-500 transition-colors duration-300">
                    Mon - Fri: 9:00 AM - 5:00 PM
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
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 h-[500px]"
          >
            <iframe
              title="Ariana Medical Complex Location"
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
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/50 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-start gap-4">
              <div className="bg-[#00a8ff] p-2.5 rounded-xl text-white shadow-sm shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  Ariana Medical Complex
                </h4>
                <p className="text-sm text-slate-600 mt-1 font-medium">
                  Afshar Area, Phase 5, Kabul, Afghanistan
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
          className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
        >
          {/* Subtle form glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-2 flex items-center justify-center gap-3">
              <CalendarDays className="text-[#00a8ff]" /> Book an Appointment
            </h2>
            <p className="text-slate-500">
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          <form className="grid md:grid-cols-2 gap-6 relative z-10">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+93 (700) 000-000"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Choose Specialty *
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700">
                <option>General Consultation</option>
                <option>Cardiology</option>
                <option>Echocardiography</option>
                <option>ECG / Stress Test</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Preferred Date *
              </label>
              <input
                type="date"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Preferred Time *
              </label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all text-slate-700">
                <option>Morning (9 AM - 12 PM)</option>
                <option>Afternoon (1 PM - 5 PM)</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Additional Message
              </label>
              <textarea
                rows="3"
                placeholder="Please describe your symptoms or reason for visit..."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
              ></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end mt-2">
              {/* Submit Button (Blue to Red Hover) */}
              <button
                type="submit"
                className="bg-[#00a8ff] hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:shadow-[0_10px_20px_rgba(239,68,68,0.3)] flex items-center gap-2 hover:-translate-y-1"
              >
                Request Appointment <Send size={18} />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
