"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Full Stack Skills",
    id: "fullStackSkills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript/TypeScript</li>
        <li>React & Redux</li>
        <li>Node.js</li>
        <li>Angular</li>
        <li>Django</li>
        <li>Bootstrap & Webpack</li>
        <li>RESTful APIs & GraphQL</li>
      </ul>
    ),
  },
  {
    title: "Software Development Skills",
    id: "softwareDevSkills",
    content: (
      <ul className="list-disc pl-2">
        <li>C/C++ & Python</li>
        <li>Java</li>
        <li>Data Structures & Algorithms</li>
        <li>Problem Solving</li>
        <li>Unit Testing (Jest/Mocha)</li>
        <li>Agile Methodologies & UML</li>
        <li>Embedded Systems (ESP32)</li>
        <li>Advanced Git Techniques</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>B.S. Software Engineering, Sami Shamoon College of Engineering, Est: June 2026</li>
      </ul>
    ),
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("fullStackSkills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="about-image">
  <Image src="/images/about-image.png" layout="fill" objectFit="cover" />
</div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am Mahmood Gneam, a committed software engineer with a strong foundation in both front-end and back-end technologies. Specializing in creating efficient and scalable web applications, I am passionate about applying my skills to develop solutions that make a positive impact. Beyond technical prowess, I am an avid problem-solver and enjoy collaborating with teams to bring innovative ideas to life.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("fullStackSkills")} active={tab === "fullStackSkills"}>Full Stack Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("softwareDevSkills")} active={tab === "softwareDevSkills"}>Software Dev Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
