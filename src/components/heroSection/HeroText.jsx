import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-6 h-full justify-center md:text-left sm:text-center">
      {/* Subtitle with typing effect */}
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-cyan font-semibold tracking-wider"
      >
        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          
        </motion.span>
        {" "}Software Engineering Student
      </motion.h2>

      {/* Main name with gradient and glow */}
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[3.5rem] lg:text-7xl sm:text-5xl font-black uppercase relative"
      >
        <motion.span
          className="bg-gradient-to-r from-orange via-cyan to-orange bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Nguyen Thanh
        </motion.span>
        <br className="sm:hidden md:block" />
        <motion.span
          className="bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          style={{ backgroundSize: "200% 200%" }}
        >
          Binh
        </motion.span>
        
        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-orange/20 to-cyan/20 blur-3xl -z-10"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.h1>

      {/* Description with enhanced styling */}
      <motion.div
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl mt-2"
      >
        <motion.p className="text-gray-300 leading-relaxed">
          <motion.span 
            className="text-cyan font-bold text-2xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Fullstack Developer
          </motion.span>
          {" "}|{" "}
          <span className="text-orange font-semibold">ReactJS</span> &{" "}
          <span className="text-cyan font-semibold">Spring Boot</span>
          <br />
          Passionate about building{" "}
          <motion.span
            className="text-orange font-bold"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            scalable web applications
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Animated tech tags */}
      <motion.div
        className="flex gap-3 flex-wrap md:justify-start sm:justify-center mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {["React", "Spring Boot","NodeJS", "MySQL", "MongoDB","Git Hub","Docker"].map((tech, index) => (
          <motion.span
            key={tech}
            className="px-4 py-2 bg-gray-800/50 border border-cyan/30 rounded-full text-cyan text-sm font-semibold backdrop-blur-sm hover:bg-cyan hover:text-black transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroText;
