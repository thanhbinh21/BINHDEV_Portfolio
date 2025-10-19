import { Link } from "react-scroll";
import { motion } from "framer-motion";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-base sm:text-xl sm:bg-black/90 backdrop-blur-xl lg:bg-transparent sm:w-full py-4 sm:rounded-2xl sm:border-2 sm:border-cyan/30 lg:border-0 sm:shadow-2xl lg:shadow-none z-50 px-4">
      {links.map((link, index) => {
        return (
          <motion.li 
            key={index} 
            className="group relative"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-300 font-semibold relative z-10"
            >
              {link.link}
            </Link>
            
            {/* Animated underline */}
            <motion.div 
              className="mx-auto bg-gradient-to-r from-cyan to-orange h-[2px] w-0 group-hover:w-full transition-all duration-500 rounded-full"
            />
            
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300 -z-10"></div>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
