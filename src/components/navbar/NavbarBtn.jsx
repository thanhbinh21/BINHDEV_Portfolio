import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
import { motion } from "framer-motion";

const NavbarBtn = () => {
  return (
    <motion.button 
      className="relative px-6 py-3 rounded-full text-lg font-bold text-white border-2 border-cyan flex items-center gap-2 bg-gradient-to-r from-cyan/20 to-orange/20 backdrop-blur-sm overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ x: "-100%" }}
        whileHover={{ x: 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <Link 
        spy={true} 
        smooth={true} 
        duration={500} 
        offset={-120} 
        to="contact"
        className="relative z-10 cursor-pointer"
      >
        Hire Me
      </Link>
      
      <motion.div 
        className="sm:hidden md:block relative z-10"
        animate={{ 
          x: [0, 5, 0],
          y: [0, 5, 0]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <LuArrowDownRight />
      </motion.div>
    </motion.button>
  );
};

export default NavbarBtn;
