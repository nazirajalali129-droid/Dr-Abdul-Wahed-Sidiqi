import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { CalendarDays, HeartPulse } from "lucide-react"; // Changed User to HeartPulse

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      // CRYSTAL EFFECT: Semi-transparent background, heavy blur, light borders, and soft shadow
      className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-lg border-b border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Cardiology Icon */}
            <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-100 shadow-sm transition-transform group-hover:scale-105">
              <HeartPulse size={24} className="animate-pulse" />
            </div>
            <div className="flex flex-col">
              {/* Added Last Name & Increased Size */}
              <span className="text-[1.15rem] font-extrabold text-slate-800 leading-tight tracking-tight">
                DR. ABDUL WAHED SIDIQI
              </span>
              <span className="text-[10px] font-bold text-[#00a8ff] tracking-[0.2em] uppercase mt-0.5">
                Consultant Cardiologist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                // Increased text size from text-sm to text-base
                className={`text-base font-bold transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-[#00a8ff]"
                    : "text-slate-600 hover:text-[#00a8ff]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-[#00a8ff] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_10px_20px_rgba(0,168,255,0.3)] hover:bg-[#0096e0] transition-colors"
            >
              Book Appointment
              <CalendarDays size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
