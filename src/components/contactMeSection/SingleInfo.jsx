import { motion } from "framer-motion";

const SingleInfo = ({ text, Image, link, type }) => {
  const content = (
    <>
      <motion.div
        className="text-orange group-hover:text-cyan transition-colors duration-300"
        whileHover={{ rotate: 360, scale: 1.2 }}
        transition={{ duration: 0.6 }}
      >
        <Image className="text-3xl" />
      </motion.div>
      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{text}</p>
    </>
  );

  return link ? (
    <motion.a
      href={link}
      target={type === "location" ? "_blank" : "_self"}
      rel={type === "location" ? "noopener noreferrer" : undefined}
      className="flex gap-4 items-center justify-start p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-cyan transition-all duration-300 group cursor-pointer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05, x: 10 }}
    >
      {content}
    </motion.a>
  ) : (
    <motion.div 
      className="flex gap-4 items-center justify-start p-4 rounded-xl bg-gray-800/30 backdrop-blur-sm border border-gray-700 hover:border-cyan transition-all duration-300 group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05, x: 10 }}
    >
      {content}
    </motion.div>
  );
};

export default SingleInfo;
