import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import CV from "../../assets/MOHAMMED NIHAL V K - MERN STACK DEVELOPER.pdf";
import "./HomeSection.css";
const HomeSection = () => {
  return (
    <div className={`grid lg:grid-cols-2 items-center md:grid-cols-2 sm:grid-cols-1 gap-14 lg:px-10 `}>
      <div className=" ">
        <img
          className="m-auto a  rounded-full w-96 h-96 max-md:w-64  max-md:h-64"
          src="./IMG_6732 (1).jpg"
          alt=""
        />
      </div>
      <div className="  ">
        <div className="flex flex-col items-center  gap-2">
          <h1 className="text-lg font-semibold">Hello, I'm</h1>
          <TypeAnimation
            sequence={[
              "Mohammed Nihal VK", // Types 'One'
              2000, // Waits 1s
              "Full Stack Developer", // Deletes 'One' and types 'Two'
              2000,
              "Freelancer", // Deletes 'One' and types 'Two'
              2000,
            ]}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2rem", display: "block", fontWeight: "bold" }}
          />

          <div className="space-x-2 pt-4 text-sm">
            <a
              download
              href={CV}
              className="p-2.5 px-5 dark:border-white border-black border rounded-3xl font-semibold"
            >
              Download CV
            </a>
            <Link
              to="contact_me"
              span={true}
              smooth={true}
              className="p-2.5 px-5  bg-gray-800 border-gray-800 text-white border cursor-pointer rounded-3xl font-semibold"
            >
              Contact Info
            </Link>
          </div>
          {/* <div className="flex flex-row gap-4 mt-3">
            <VscGithubInverted size={35} />
            <IoLogoLinkedin className="" size={35} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
