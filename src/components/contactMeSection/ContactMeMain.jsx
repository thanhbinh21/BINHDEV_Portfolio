import ContactText from "./ContactText";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import { motion } from "framer-motion";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 mb-20"
    >
      <motion.h2 
        className="text-6xl text-cyan mb-10 text-center font-bold"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Contact Me
      </motion.h2>
      
      <motion.div 
        className="max-w-[800px] mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-10 rounded-3xl border-2 border-cyan/30 shadow-2xl shadow-cyan/10 relative overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 via-orange/5 to-cyan/5 animate-gradient"></div>
        
        <div className="relative z-10 flex flex-col gap-8">
          <ContactText />
          
          <div className="space-y-6">
            <motion.h3 
              className="text-2xl text-white font-semibold mb-4 bg-gradient-to-r from-cyan to-orange bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false }}
            >
              Get In Touch
            </motion.h3>
            <ContactInfo />
          </div>
          
          <div className="space-y-4 pt-6 border-t border-gray-700">
            <motion.h3 
              className="text-2xl text-white font-semibold bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false }}
            >
              Follow Me
            </motion.h3>
            <ContactSocial />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMeMain;
