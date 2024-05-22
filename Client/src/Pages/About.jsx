import React from "react";
import { Card } from "flowbite-react";
import { FaStar } from "react-icons/fa6";
import myimage from "../assets/blueBackground.jpeg";

const About = () => {
  return (
    <>
      <div className="flex flex-col justify-center mt-10">
        <div className="mx-auto">
          <h1 className="m-auto text-5xl typing-animation">Sonu Sharma</h1>
        </div>

        <div className="flex  md:flex-row flex-col gap-10 m-20">
          <div className=" flex-1 mx-auto">
            <img className="rounded-md max-w-90 " src={myimage} alt="logo" />
          </div>
          <div className="flex-1 max-w-96 my-auto">
            <h1>Hellow,</h1>
            <p>
              I completed My graduation in June 2023 in Mechanical Engineering.
              Currently I am working as a{" "}
              <span className="text-red-600">Web Developer</span> in a startup
              (Agnize Infotech).
            </p>
            <p>
              Developed Website and mobile application from Scratch, testing,
              bebugging and deploying.{" "}
            </p>
            <p>
              Understanding Bussiness need is my passion and working to complete
              the project in given time frame is fuel for me and my hardwork
              always keep me motivated.
            </p>
            <a
              href="https://drive.google.com/file/d/1meIIiP5MVPmzk3uNcxmB3pyZU7Vrqbfh/view?usp=sharing"
              className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-700 border-2 border-red-400"
              download
            >
              View My Resume
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center m-10">
        <h1 className="m-auto text-5xl mb-4">My Skills</h1>

        <ul className="flex justify-between flex-wrap gap-5">
          <Card
            className="max-w-32"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://www.boardinfinity.com/blog/content/images/2023/01/Mern.png"
          >
            <p className=" font-semibold  text-gray-900 dark:text-white p-1">
              Mern_Stack & redux
            </p>
          </Card>
          <Card
            className="max-w-32"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603718736/Why_Your_Company_Needs_Python_for_Business_Analytics_xzzles.png"
          >
            <p className=" font-semibold  text-gray-900 dark:text-white">
              Python (flask)
            </p>
          </Card>
          <Card
            className="max-w-32"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://static.tildacdn.one/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg"
          >
            <p className=" font-semibold  text-gray-900 dark:text-white">SQL</p>
          </Card>
          <Card
            className="max-w-32"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://img.freepik.com/free-photo/business-data-analysis_53876-95296.jpg"
          >
            <p className=" font-semibold  text-gray-900 dark:text-white">
              Data Analytics
            </p>
          </Card>
        </ul>
        <div className="mt-5 flex gap-5 items-center flex-col">
          <h1>Other Development Skills & useful Tools</h1>
          <span className="text-xs text-red-500">Get and GitHub</span>
          <span className="text-xs text-red-500">PostMan</span>
          <span className="text-xs text-red-500">API intigration</span>
          <span className="text-xs text-red-500">VS code</span>
        </div>
        <div className="mt-5 flex gap-5 items-center flex-col">
          <h1>Achievements</h1>
          <span className="text-xs text-red-500">
            Data Structures(string, array, hashmap, stack, queqe) and Basic
            Algorithms(serching,sorting) (200+){" "}
          </span>
          <span className="text-xs text-red-500 flex items-center">
            5 <FaStar className="ml-1" /> in SQL on Hackerrank
          </span>
        </div>
      </div>
    </>
  );
};

export default About;
