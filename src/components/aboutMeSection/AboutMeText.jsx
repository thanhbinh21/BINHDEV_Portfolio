import { Link } from "react-scroll";
import { motion } from "framer-motion";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      {/* Title with gradient and animation */}
      <motion.h2 
        className="text-7xl font-bold bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        About Me
      </motion.h2>

      {/* First paragraph */}
      <motion.p 
        className="mb-4 text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        I'm <span className="text-cyan font-bold">Nguyen Thanh Binh</span>, a driven and curious Software Engineering student at the <span className="text-orange font-semibold">Industrial University of Ho Chi Minh City (IUH)</span> with a solid foundation in Fullstack Web Development using <span className="text-cyan">ReactJS</span>, <span className="text-orange">Spring Boot</span>, and <span className="text-cyan">MySQL</span>.
      </motion.p>

      {/* Second paragraph */}
      <motion.p 
        className="mb-4 text-gray-300 text-lg leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        I am highly motivated to learn, adapt, and take on real-world challenges. Passionate about writing <span className="text-cyan font-semibold">clean, efficient code</span> and continuously improving through hands-on experience. Currently seeking an <span className="text-orange font-bold">Intern Fullstack Developer</span> position to contribute to dynamic projects while expanding my technical and professional skills.
      </motion.p>

      {/* Education info with card style */}
      <motion.div 
        className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-sm border-2 border-gray-700 hover:border-cyan transition-all duration-500 w-full mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.02, borderColor: "#06b6d4" }}
      >
        <p className="text-gray-200 text-base leading-relaxed">
          <strong className="text-orange text-lg"> Education:</strong> 
          <span className="text-white ml-2">Bachelor of Software Engineering</span>
          <br />
          <strong className="text-cyan"> GPA:</strong> 
          <span className="text-white ml-2 font-bold">3.28/4.0</span>
          <br />
          <strong className="text-orange"> Relevant Coursework:</strong> 
          <span className="text-gray-300 ml-2">Web Development, Java OOP, Database Systems, Software Testing</span>
        </p>
      </motion.div>

      {/* Button with enhanced animation */}
      <motion.button 
        className="group relative overflow-hidden border-2 border-orange rounded-full py-4 px-8 text-lg flex gap-3 items-center mt-4 bg-transparent hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center shadow-lg hover:shadow-orange/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        whileHover={{ scale: 1.05, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white font-bold relative z-10 flex items-center gap-2"
        >
          <span>View My Projects</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            
          </motion.span>
        </Link>
      </motion.button>
    </div>
  );
};

export default AboutMeText;
