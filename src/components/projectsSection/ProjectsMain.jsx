import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Fullstack Multi-Vendor eCommerce Platform",
    year: "2024 - Present",
    align: "right",
    image: "/images/website-img-1.jpg",
    link: "https://github.com/thanhbinh21/Multi-Vendor-eCommerce-Platform",
    description: "Building a comprehensive eCommerce platform supporting multiple vendor roles using Spring Boot, React, TypeScript, and Redux Toolkit. Features include JWT Authentication, Customer/Seller/Admin dashboards with analytics, and planned Stripe/Razorpay payment integration.",
    status: "In Progress",
    statusColor: "yellow",
    technologies: ["Spring Boot", "React", "TypeScript", "Redux", "MySQL"]
  },
  {
    name: "Tech E-commerce",
    year: "2024",
    align: "left",
    image: "/images/website-img-2.webp",
    link: "https://github.com/thanhbinh21/Tech-E-commerce",
    description: "Developed a responsive e-commerce website specialized in computer accessories using ReactJS and TailwindCSS. Built reusable React components, managed global state via Context API, and implemented React Router for dynamic single-page navigation.",
    status: "Completed",
    statusColor: "green",
    technologies: ["ReactJS", "TailwindCSS", "Context API", "React Router"]
  },
  {
    name: "Pharmacy Management System",
    year: "2023",
    align: "right",
    image: "/images/website-img-3.jpg",
    link: "https://github.com/thanhbinh21/Java_JPA_RMI",
    description: "Created a desktop-based pharmacy management system to manage products, invoices, and customers. Designed database structure using MariaDB and implemented CRUD modules with Hibernate, JPA, and RMI for ORM and remote data synchronization.",
    status: "Completed",
    statusColor: "green",
    technologies: ["Java", "Hibernate", "JPA", "MariaDB", "Java Swing"]
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 py-20">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-16 max-w-[1100px] mx-auto mt-16">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              description={project.description}
              status={project.status}
              statusColor={project.statusColor}
              technologies={project.technologies}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
