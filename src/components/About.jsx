import React from "react";
import { FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-[#0a192f] text-gray-300 pt-[100px]">
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        <div className="max-w-[1400px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1200px] w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Sam. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="text-[#8892b0]">
              I'm a passionate software developer with a unique background in electrical work and project management. My journey into tech has been driven by a desire to innovate and solve complex problems. I bring a blend of technical skills and practical experience to every project I undertake.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-[1100px] w-full mt-8">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-2xl text-pink-600 my-2" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>
          <p className="text-[#8892b0]">
            Currently pursuing a Bachelor's degree in Computer Science with a minor in Economics at the University of British Columbia. My academic journey has equipped me with a strong foundation in software development principles and economic theory.
          </p>
        </div>

        {/* Skills Section */}
        <div className="max-w-[1100px] w-full mt-8">
          <div className="flex items-center mb-4">
            <FaLaptopCode className="text-2xl text-pink-600 my-2" />
            <h3 className="text-2xl font-bold">Key Skills</h3>
          </div>
          <ul className="list-disc list-inside text-[#8892b0]">
            <li>Proficient in Python, Java, and JavaScript</li>
            <li>Experience with database management and SQL</li>
            <li>Familiar with machine learning concepts and applications</li>
            <li>Strong problem-solving and analytical skills</li>
          </ul>
        </div>

        {/* Experience Section */}
        <div className="max-w-[1100px] w-full mt-8">
          <div className="flex items-center mb-4">
            <FaTools className="text-2xl text-pink-600 my-2" />
            <h3 className="text-2xl font-bold">Professional Experience</h3>
          </div>
          <p className="text-[#8892b0]">
            My background as a Red Seal Electrician and Operations Manager has honed my leadership skills and ability to manage complex projects. This unique perspective allows me to approach software development with a practical, solution-oriented mindset.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

// const About = () => {
//   return (
//     <div
//       name="about"
//       className="w-full h-screen bg-[#0a192f] text-gray-300 pt-[75px] lg:pt-0"
//     >
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
//           <div className="sm:text-right pb-8 pl-4">
//             <p className="text-4xl font-bold inline border-b-4 border-pink-600">
//               About
//             </p>
//           </div>
//           <div></div>
//         </div>
//         <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
//           <div className="sm:text-right text-4xl font-bold ">
//             <p>Hi, I am Sam, nice to meet you</p>
//           </div>
//           <div>
//             <p> I am passionate about building...</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
