"use client";
import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities and internships, my inbox is always
          open. Unfortunately, the direct email functionality is not available right now. Please reach out to me on my social platforms.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link target="_blank" href="https://github.com/MahmoodAbuGneam">
            <Image src={GithubIcon} alt="Github Icon" width={40} height={40} />
          </Link>
          <Link target="_blank" href="https://www.linkedin.com/in/mahmoodgneam/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-white">
          Email functionality is currently not active. Please connect with me on LinkedIn or GitHub!
        </p>
      </div>
    </section>
  );
};

export default EmailSection;
