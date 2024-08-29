import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import Selfie from "../assets/selfie.png";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#0a192f] flex flex-col lg:flex-row items-center pt-[75px]"
    >
      {/* Container */}
      <div className="lg:w-3/5 lg:mx-11 mx-auto px-4 flex flex-col justify-center h-screen order-2 lg:order-1 text-left">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Sam</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am currently a fourth-year Computer Science major at UBC with a
          passion for software development. In my previous roles in the
          electrical and management fields, I led projects and managed teams.
          Now, I've transitioned into the tech industry with a focus on growth
          and innovation.
        </p>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am always looking for new challenges and opportunities to learn and
          grow as a developer. Let's connect or collaborate, as I am eager to
          explore opportunities to make a meaningful impact in the tech
          industry.
        </p>
        {/* Button */}
        <div>
          <Link to="contact" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              Let's Connect!
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="lg:w-2/5 order-1 lg:order-2 px-4 py-4">
        <img src={Selfie} alt="Sam" className="lg:w-auto lg:h-auto w-72 h-72 mx-auto rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
