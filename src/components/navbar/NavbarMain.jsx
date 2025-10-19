import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  
  return (
    <motion.nav 
      className="w-full px-4 fixed top-0 left-0 right-0 z-[100] mt-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1200px] mx-auto flex gap-4 items-center justify-center">
      {/* Main Navbar Container with Glass Effect */}
      <motion.div 
        className="flex justify-between flex-1 bg-black/80 backdrop-blur-xl items-center md:px-6 sm:px-4 md:py-4 sm:py-3 rounded-full border-2 border-cyan/30 shadow-2xl shadow-cyan/10 relative overflow-hidden group"
        whileHover={{ 
          borderColor: "rgba(6, 182, 212, 0.6)",
          boxShadow: "0 25px 50px -12px rgba(6, 182, 212, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-orange/5 to-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        
        {/* Content */}
        <div className="relative z-10 flex justify-between w-full items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <NavbarLogo />
          </motion.div>
          
          <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
            <NavbarLinks />
          </div>

          <NavbarBtn />
        </div>
      </motion.div>

      {/* Mobile Menu Toggle with Animation */}
      <motion.div 
        className="lg:hidden p-5 bg-black/80 backdrop-blur-xl items-center justify-center rounded-full border-2 border-orange/30 shadow-2xl shadow-orange/10 relative overflow-hidden group flex"
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(251, 146, 60, 0.6)",
          boxShadow: "0 25px 50px -12px rgba(251, 146, 60, 0.3)"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        {/* Glowing effect for mobile toggle */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-orange/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        
        <div className="relative z-10">
          <NavbarToggler />
        </div>
      </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavbarMain;
