import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart, FaRocket } from "react-icons/fa";

const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Projects",
      section: "projects",
    },
    {
      name: "Contact",
      section: "contact",
    },
  ];

  const socialLinks = [
    { icon: FaGithub, link: "https://github.com/thanhbinh21", label: "GitHub" },
    { icon: FaLinkedinIn, link: "#", label: "LinkedIn" },
    { icon: FaEnvelope, link: "mailto:iambinhage17@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative px-4 mt-32 overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan/5 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Top decorative line with gradient */}
      <motion.div 
        className="w-full h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent mb-12"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false }}
      />

      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Top Section - Logo and Description */}
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            <motion.h2 
              className="text-4xl font-black mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent">
                BINHDEV
              </span>
            </motion.h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Fullstack Developer passionate about creating innovative web solutions with modern technologies.
            </p>
            <motion.div
              className="flex items-center gap-2 text-cyan text-sm"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaRocket />
              <span>Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="md:text-center"
          >
            <h3 className="text-orange text-xl font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: "#06b6d4" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-120}
                    to={item.section}
                    className="text-gray-400 hover:text-cyan transition-all duration-300 cursor-pointer flex items-center gap-2 md:justify-center"
                  >
                    <span className="text-cyan"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false }}
            className="md:text-right"
          >
            <h3 className="text-cyan text-xl font-bold mb-4">Connect With Me</h3>
            <div className="flex gap-4 md:justify-end sm:justify-start mb-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-cyan/30 flex items-center justify-center text-cyan hover:bg-cyan hover:text-black transition-all duration-300 relative group"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  <div className="absolute inset-0 rounded-full bg-cyan/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="text-xl relative z-10" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-500 text-sm">
              Ho Chi Minh City, Vietnam<br />
              <a href="mailto:iambinhage17@gmail.com" className="text-cyan hover:text-orange transition-colors">
                iambinhage17@gmail.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div 
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange/30 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
        />

        {/* Bottom Section - Copyright */}
        <motion.div 
          className="flex md:flex-row sm:flex-col justify-between items-center gap-4 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Made with <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FaHeart className="text-red-500" />
            </motion.span> by Nguyen Thanh Binh
          </p>
          
          <p className="text-gray-500 text-sm">
             2025 BINHDEV Portfolio | All Rights Reserved.
          </p>

          <motion.button
            className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan/20 to-orange/20 border border-cyan/30 text-cyan text-sm hover:bg-gradient-to-r hover:from-cyan hover:to-orange hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top 
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan via-orange to-cyan"></div>
    </footer>
  );
};

export default FooterMain;
