import { motion } from "framer-motion";

const SingleContactSocial = ({ Icon, link, label }) => {
  const isMailto = link?.startsWith('mailto:');
  
  return (
    <motion.div 
      className="relative group"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.2, rotate: 360 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Tooltip */}
      {label && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
          {label}
        </div>
      )}
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-orange/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <a 
        href={link} 
        target={isMailto ? "_self" : "_blank"} 
        rel={isMailto ? undefined : "noopener noreferrer"} 
        className="relative text-2xl h-12 w-12 border-2 border-orange text-orange hover:bg-orange hover:text-white rounded-full p-3 flex items-center justify-center transition-all duration-300 bg-transparent hover:shadow-lg hover:shadow-orange/50 cursor-pointer"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <Icon />
        </motion.div>
      </a>
    </motion.div>
  );
};

export default SingleContactSocial;
