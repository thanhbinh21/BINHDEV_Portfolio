import { motion } from "framer-motion";

const SkillsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      {/* Title with animation */}
      <motion.div
        className="relative mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.h2 
          className="text-7xl font-bold bg-gradient-to-r from-orange via-cyan to-orange bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          My Skills
        </motion.h2>
        
        {/* Animated underline */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-orange to-transparent mx-auto mt-2"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: false }}
        />
      </motion.div>

      {/* Description with stagger effect */}
      <motion.p 
        className="text-lg text-center max-w-3xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        I not only work with these technologies but <span className="text-cyan font-bold">excel in using them</span> with
        best practices to deliver <span className="text-orange font-bold">high-quality results</span>. I have been working with
        all these skills to build my <span className="text-cyan font-semibold">portfolio projects</span>.
      </motion.p>

      {/* Decorative tech icons floating */}
      <div className="flex gap-3 mt-8">
        {["", "", ""].map((emoji, i) => (
          <motion.div
            key={i}
            className="text-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 10, -10, 0],
            }}
            // transition={{
            //   duration: 3,
            //   repeat: Infinity,
            //   delay: i * 0.5,
            // }}
            viewport={{ once: false }}
          >
            {emoji}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsText;
