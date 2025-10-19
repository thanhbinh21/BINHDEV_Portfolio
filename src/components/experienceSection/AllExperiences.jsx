import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Software Engineering Student",
    company: "Industrial University of Ho Chi Minh City (IUH)",
    date: "2021 - Present",
    responsibilities: [
      "GPA: 3.28 / 4.0",
      "Relevant Coursework: Web Development, Java OOP, Database Systems, Software Testing",
      "Building fullstack web applications using modern technologies",
      "Strong foundation in ReactJS, Spring Boot, and MySQL",
    ],
  },
  {
    job: "Project Lead - Multi-Vendor eCommerce",
    company: "Personal Project",
    date: "2024 - Present",
    responsibilities: [
      "Designing scalable architecture with Spring Boot and React + TypeScript",
      "Implementing JWT Authentication and Spring Security",
      "Developing Customer, Seller, and Admin dashboards with analytics",
      "Planning Stripe and Razorpay payment gateway integration",
    ],
  },
  {
    job: "Project Lead - Tech E-commerce",
    company: "Team Project (Team of 4)",
    date: "2024",
    responsibilities: [
      "Led development of responsive e-commerce website using ReactJS and TailwindCSS",
      "Built reusable React components and optimized performance",
      "Managed global state via Context API",
      "Collaborated in Agile sprints and performed code reviews",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
