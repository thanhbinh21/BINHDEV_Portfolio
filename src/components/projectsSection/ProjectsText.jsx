import { motion } from "framer-motion";

const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[80px] mb-8">
      {/* Main Title with Gradient */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <h2 className="text-7xl font-bold bg-gradient-to-r from-cyan via-orange to-cyan bg-clip-text text-transparent mb-4">
          Featured Projects
        </h2>
        {/* Underline Effect */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      {/* Subtitle */}
      <motion.p 
        className="text-lg text-gray-300 text-center max-w-3xl mt-6 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Explore my recent projects showcasing fullstack development with <span className="text-cyan font-semibold">Spring Boot</span>, 
        <span className="text-orange font-semibold"> ReactJS</span>, and modern web technologies. 
        Each project demonstrates my commitment to <span className="text-cyan font-semibold">clean code</span> and 
        <span className="text-orange font-semibold"> scalable solutions</span>.
      </motion.p>

      {/* Decorative Elements */}
      <div className="flex gap-4 mt-6">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 rounded-full bg-cyan"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            animate={{
              y: [0, -10, 0],
            }}
            // transition={{
            //   duration: 2,
            //   repeat: Infinity,
            //   delay: i * 0.3,
            // }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsText;
