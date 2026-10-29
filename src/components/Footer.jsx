import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#041229] pt-20 pb-10 border-t border-slate-800 overflow-hidden">
      {/* Subtle dark-mode background glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-600 rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand Section (Icon Removed) */}
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-6 text-white">
            <span className="text-2xl font-extrabold tracking-tight">
              DR. ABDUL WAHED SIDIQI
            </span>
          </Link>

          <p className="text-slate-400 max-w-sm mb-8 leading-relaxed text-sm">
            Dedicated to providing exceptional cardiovascular care, advancing
            medical education, and improving heart health in Afghanistan.
          </p>
          <p className="text-xs text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Ariana Medical Complex. All rights
            reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About Biography", path: "/about" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="text-slate-400 hover:text-[#00a8ff] hover:translate-x-1 inline-block transition-all duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">
            Contact
          </h4>
          <ul className="space-y-4 text-sm font-medium">
            <li className="flex items-start gap-3 group">
              <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-[#00a8ff]/20 transition-colors">
                <MapPin size={18} className="text-[#00a8ff] shrink-0" />
              </div>
              <span className="mt-1 text-slate-400">
                Ariana Medical Complex,
                <br />
                Kabul, Afghanistan
              </span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-[#00a8ff]/20 transition-colors">
                <Phone size={18} className="text-[#00a8ff] shrink-0" />
              </div>
              <a
                href="tel:+93781111191"
                className="text-slate-400 hover:text-[#00a8ff] transition-colors mt-1"
              >
                +93 781 111 191
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="bg-slate-800/50 p-2 rounded-lg group-hover:bg-[#00a8ff]/20 transition-colors">
                <Mail size={18} className="text-[#00a8ff] shrink-0" />
              </div>
              <a
                href="mailto:a.sidiqi@aca.af"
                className="text-slate-400 hover:text-[#00a8ff] transition-colors mt-1"
              >
                a.sidiqi@aca.af
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
