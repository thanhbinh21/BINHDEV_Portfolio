import { motion } from "framer-motion";

const ContactText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h2 
        className="text-5xl font-bold bg-gradient-to-r from-orange via-cyan to-orange bg-clip-text text-transparent mb-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
      >
         Get In Touch
      </motion.h2>
      
      <motion.p
        className="text-lg text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false }}
      >
        Feel free to reach out if you'd like to <span className="text-cyan font-semibold">collaborate</span>
        <br />
        you are just <motion.span 
          className="text-orange font-bold"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          a few clicks away
        </motion.span>! 
      </motion.p>

      {/* Decorative line */}
      <motion.div
        className="h-1 bg-gradient-to-r from-orange via-cyan to-transparent mt-6"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false }}
      />
    </motion.div>
  );
};

export default ContactText;
