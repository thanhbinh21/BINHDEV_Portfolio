import { motion } from "framer-motion";

const NavbarLogo = () => {
  return (
    <div className="cursor-pointer">
      {/* Desktop Logo */}
      <motion.h1 
        className="text-2xl font-bold sm:hidden md:block"
        whileHover={{ scale: 1.05 }}
      >
        <motion.span
          className="bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent font-black"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          BINHDEV
        </motion.span>
        <span className="text-white/80 text-sm ml-2">Portfolio</span>
      </motion.h1>

      {/* Mobile Logo */}
      <motion.h1 
        className="font-black text-5xl md:hidden sm:block"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          className="bg-gradient-to-br from-cyan via-orange to-cyan bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          NTB
        </motion.span>
      </motion.h1>
    </div>
  );
};

export default NavbarLogo;
