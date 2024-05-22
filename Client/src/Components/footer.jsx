import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook,FaSquareGithub,FaSquareInstagram,FaLinkedin,FaDiscord} from "react-icons/fa6";


const footer = () => {
  return (
    <Footer container className="rounded-none">
      <div className="w-full max-w-7xl mx-auto ">
        <div className="mt-6">
          <Link
            to="/"
            className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
          >
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-l text-white">
              Jack
            </span>
            Sparrow
          </Link>
          <div>These resources will help to sort your learning path (Focus on creating project by own )</div>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-4 sm:gap-6 mt-9">
          <div>
            <Footer.Title title="Learn DataBases"/>
            <Footer.Link
              href="https://datalemur.com/questions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm "
            >
              SQL Prepetaion Quetions
            </Footer.Link>
            <Footer.Link
              href="https://www.w3schools.com/mongodb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Learn MongoDB
            </Footer.Link>
            <Footer.Link
              href="https://www.coursera.org/learn/intro-sql?utm_medium=institutions&utm_source=umich&utm_content=sem&utm_campaign=adwords-web-applications-for-everybody-introduction-to-structured-query-language&utm_term=sql%20free%20certification&gad_source=1"
              target="_blank"
              rel="SQL free Certification"
              className="text-gray-400 text-sm"
            >
              SQL free Certification
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Programming Language" />
            <Footer.Link
              href="https://www.w3schools.com/java/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Java
            </Footer.Link>
            <Footer.Link
              href="https://www.w3schools.com/python/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Python
            </Footer.Link>
            <Footer.Link
              href="https://www.w3schools.com/js/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              JavaScript
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Fronnted" />
            <Footer.Link
              href="https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Frontend Guide
            </Footer.Link>
            <Footer.Link
              href="https://www.youtube.com/watch?v=M2u6AS0Mx8A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Learn React
            </Footer.Link>
            <Footer.Link
              href="https://www.youtube.com/watch?v=8UTRqlYRQic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              Learn Angular
            </Footer.Link>
          </div>

          <div>
            <Footer.Title title="Contact Me" />
            <p className="overflow-hidden text-gray-400 text-sm">sonu.sharma2332001@gmail.com</p>
            <p className="overflow-hidden text-gray-400 text-sm">8957956131</p>
            <Footer.Link
              href="https://github.com/sonusharma2332001"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              GitHub
            </Footer.Link>
            <Footer.Link
              href="https://www.linkedin.com/in/sonu-sharma-06b2731b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm"
            >
              LinkedIn
            </Footer.Link>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:justify-between">
        <Footer.Copyright
          href="#"
          by="JackSapparow's blog"
          year={new Date().getFullYear()}
        />
        <div className="flex gap-5">
          <Footer.Icon href="#" icon={FaSquareFacebook } />
          <Footer.Icon href="#" icon={FaSquareInstagram } />
          <Footer.Icon href="#" icon={FaLinkedin } />
          <Footer.Icon href="#" icon={FaSquareGithub} />
          <Footer.Icon href="#" icon={FaDiscord} />
        </div>
        </div>
        
      </div>
    </Footer>
  );
};
export default footer;
