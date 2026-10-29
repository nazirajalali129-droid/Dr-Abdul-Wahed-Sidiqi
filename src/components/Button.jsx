import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Button({
  children,
  variant = "primary", // 'primary' | 'outline' | 'dark' | 'ghost'
  size = "md", // 'sm' | 'md' | 'lg'
  to, // For React Router <Link>
  href, // For external <a> links
  showIcon = false, // Adds a right arrow icon
  className = "",
  ...props
}) {
  // 1. Base Styles
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  // 2. Size Variations
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // 3. Color Variations
  const variants = {
    primary:
      "bg-red-600 hover:bg-red-700 text-white shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] focus:ring-red-500",
    dark: "bg-[#041229] hover:bg-slate-800 text-white focus:ring-slate-900",
    outline:
      "border-2 border-slate-600 text-slate-800 hover:border-slate-900 hover:bg-slate-50 focus:ring-slate-500",
    outlineLight:
      "border-2 border-white/50 text-white hover:border-white hover:bg-white/10 focus:ring-white",
    ghost:
      "text-slate-600 hover:text-red-600 hover:bg-red-50 focus:ring-red-500",
  };

  // Combine classes
  const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${className}`;

  // Framer motion animation properties
  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    className: combinedClasses,
    ...props,
  };

  // Content (Text + Optional Icon)
  const content = (
    <>
      {children}
      {showIcon && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <ArrowRight size={18} />
        </motion.div>
      )}
    </>
  );

  // Render Logic: Link vs Anchor vs Button
  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className="flex items-center gap-2 w-full h-full justify-center"
        >
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return <motion.button {...motionProps}>{content}</motion.button>;
}
