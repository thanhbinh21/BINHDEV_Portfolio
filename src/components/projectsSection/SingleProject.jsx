import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleProject = ({ name, year, align, image, link, description, status, statusColor, technologies }) => {
  const statusColors = {
    green: "bg-green-500/90 text-white",
    yellow: "bg-yellow-500/90 text-black",
    blue: "bg-blue-500/90 text-white"
  };

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`flex w-full sm:flex-col items-stretch gap-8 ${
        align === "left" ? "md:flex-row" : "md:flex-row-reverse"
      } group relative`}
    >
      {/* Decorative Line */}
      <div className={`absolute top-1/2 ${align === "left" ? "left-0" : "right-0"} w-20 h-[2px] bg-gradient-to-r ${align === "left" ? "from-cyan to-transparent" : "from-transparent to-cyan"} opacity-0 group-hover:opacity-100 transition-all duration-700 sm:hidden`}></div>

      {/* Project Info Section */}
      <motion.div 
        className={`flex-1 flex flex-col justify-between p-8 rounded-2xl bg-gradient-to-br from-gray-800/40 to-gray-900/60 backdrop-blur-md border-2 border-gray-700 hover:border-cyan transition-all duration-500 shadow-xl hover:shadow-cyan/20 ${
          align === "left" ? "md:text-right" : "md:text-left"
        } sm:text-center`}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          {/* Project Name with Gradient */}
          <motion.h2 
            className="md:text-4xl sm:text-3xl font-bold bg-gradient-to-r from-orange via-cyan to-orange bg-clip-text text-transparent mb-3 group-hover:from-cyan group-hover:to-orange transition-all duration-500"
            initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {name}
          </motion.h2>
          
          {/* Year Badge */}
          <motion.div 
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange/20 border-2 border-orange/50 mb-4 backdrop-blur-sm`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-orange font-bold text-sm"> {year}</span>
          </motion.div>
          
          {/* Description */}
          {description && (
            <motion.p 
              className="text-gray-300 text-base leading-relaxed mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          {/* Technologies Tags */}
          {technologies && technologies.length > 0 && (
            <motion.div 
              className={`flex flex-wrap gap-2 mb-6 ${
                align === "left" ? "md:justify-end" : "md:justify-start"
              } sm:justify-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {technologies.map((tech, index) => (
                <motion.span
                  key={index}
                  className="px-3 py-1 text-xs font-semibold bg-cyan/20 text-cyan border border-cyan/30 rounded-full hover:bg-cyan hover:text-black transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          )}
        </div>
        
        {/* Action Button */}
        <motion.div 
          className={`flex gap-4 items-center ${
            align === "left" ? "md:justify-end" : "md:justify-start"
          } sm:justify-center mt-4`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan to-blue-600 hover:from-orange hover:to-red-600 text-white rounded-full font-bold text-lg transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-orange/50 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
            <FaGithub className="text-2xl relative z-10" />
            <span className="relative z-10">View on GitHub</span>
            <BsFillArrowUpRightCircleFill className="text-xl relative z-10 group-hover/btn:rotate-45 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Project Image Section */}
      <motion.div 
        className="md:w-[500px] sm:w-full h-[320px] rounded-2xl overflow-hidden relative border-2 border-gray-700 hover:border-orange transition-all duration-500 shadow-2xl hover:shadow-orange/30"
        whileHover={{ scale: 1.03, rotate: align === "left" ? 1 : -1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan via-orange to-cyan opacity-0 group-hover:opacity-30 transition-all duration-500 blur-2xl animate-pulse"></div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 group-hover:from-black/60 transition-all duration-500"></div>
        
        {/* Image */}
        <motion.img 
          src={image} 
          alt={`${name} preview`} 
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>
        
        {/* Status Badge */}
        {status && (
          <motion.div 
            className={`absolute top-5 right-5 z-30 px-4 py-2 rounded-full backdrop-blur-md font-bold text-sm shadow-lg ${statusColors[statusColor] || statusColors.green}`}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            whileHover={{ scale: 1.1 }}
          >
            {status === "Completed" ? " " : " "}
            {status}
          </motion.div>
        )}

        {/* Floating Particles Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-5">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SingleProject;
