"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "EduLink",
    description: "EduLink is a pioneering educational platform designed to bridge the gap between students, instructors, and industry professionals. Developed to enhance educational engagement and facilitate job placements, EduLink offers robust features including interactive learning modules, real-time student-instructor interaction, and a comprehensive job board tailored for newly graduated engineers. Utilizing a full-stack development approach, the platform integrates Node.js and Express for the backend, with a responsive front-end built using Angular. MongoDB is employed for efficient data management, ensuring seamless user experiences and high scalability. EduLink not only supports academic learning but also prepares students for real-world challenges by providing direct access to industry opportunities.",
    image: "/images/projects/1.png",
    tag: ["All", "Web","Education","Work"],
    gitUrl: "https://github.com/MahmoodAbuGneam/EduLink",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CRM-Customer-Invoices",
    description: "CRM-Customer-Invoices is an advanced full-stack application designed to revolutionize customer relations and invoice management for businesses. This platform significantly reduces administrative overhead by automating the invoicing process and enhancing customer interaction capabilities. Developed using Angular for a dynamic front-end and ASP.NET for robust back-end functionality, the system integrates a high-performance in-memory database to ensure rapid data processing and real-time access. Key features include automated invoice generation, real-time data updates, advanced search functionalities, and comprehensive reporting tools. These features collectively aim to boost operational efficiency by up to 30%, enhancing both customer satisfaction and business scalability.",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Business"],
    gitUrl: "https://github.com/MahmoodAbuGneam/CRM-Customer-Invoices",
    previewUrl: "/",
},
{
  id: 3,
  title: "Image Processing Pipeline",
  description: "The Image Processing Pipeline is a sophisticated software solution designed to automate and enhance the processing of digital images. Utilizing Python and the powerful NumPy library, this project implements a series of algorithms that streamline image manipulation tasks such as color correction, filtering, and transformations. This tool is particularly useful for developers and researchers looking to efficiently process large volumes of imagery with consistent results. The pipeline integrates seamlessly with existing workflows, offering a customizable framework that can be adapted to a variety of image processing needs, making it a versatile asset in both academic and commercial applications.",
  image: "/images/projects/3.png",
  tag: ["All", "Software", "MachineLearning"],
  gitUrl: "https://github.com/MahmoodAbuGneam/Image-Processing-Pipeline",
  previewUrl: "/",
},
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Top Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MachineLearning"
          isSelected={tag === "MachineLearning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
