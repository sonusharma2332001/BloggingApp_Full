import React from "react";
import { Card } from "flowbite-react";
import shoes from "../assets/shoes.png";
import Chatting from "../assets/ChattinggAPP.jpeg";
import Expense from "../assets/Expense.png";
import todo from "../assets/ToDo.jpeg";
import crud from "../assets/Mern Crud.jpeg";
import Blogging from "../assets/Blogging.png";

const Projects = () => {
  return (
    <div className="min-h-72 flex items-center justify-center flex-col my-12">
      <div className="mx-auto">
        <h1 className="text-4xl font-bold font-serif typing-animation">
          My Projects
        </h1>
      </div>

      <div className="flex gap-10 flex-wrap my-10 justify-center mx-2">
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={Blogging} alt="" className="max-h-40" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Bloging App
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
            [Mern Stack,Redux, firbase,tailwind]
            <p className="text-xs">1. Authentication, secure Routing, image storage,Admin Dashboard</p>
            <p className="text-xs">2. Dynamic search and filter</p>
            <p className="text-xs">3. Admin control all the user logged in , only admin can write post</p>
            <a
              href="/"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit to
            </a>
          </p>
        </Card>
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={Chatting} alt="" className="max-h-40" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chatting App
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm ">
          [react JS, firbase,scss]
            <p className="text-xs">1. Authentication, image storage</p>
            <p className="text-xs">2. searching existing users and can have chat</p>
            <p className="text-xs">3. Store the history of chat (only text and image allowed) </p>
            <a
              href="https://chat-app-tawny-five.vercel.app/"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit to
            </a>
          </p>
        </Card>
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={shoes} alt="" className="max-h-45 min-w-100" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Online Shoes Store
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
          [HTML,CSS,JavaScript]
            <p className="text-xs">1. Single Page Application</p>
            <p className="text-xs">2. Basic toggle and rendering feature</p>
            <p className="text-xs">3. Responsice to all Screens</p>
            <a
              href="https://sonusharma2332001.github.io/https---github.com-Jackmahi-Online_shoes_Store/"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit
            </a>
          </p>
        </Card>
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={crud} alt="" className="max-h-40 max-w-screen-sm" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Mern CRUD
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
          [Mern stack]
            <p className="text-xs">1. Performed crud using client side rendering</p>
            <p className="text-xs">2. Basic toggle and rendering feature</p>
            <p className="text-xs">3. Responsice to all Screens</p>
            <a
              href="https://mern-frontend-livid.vercel.app/all"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit
            </a>
          </p>
        </Card>
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={todo} alt="" className="max-h-40" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            To Do App
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 ">
          [React JS]
            <p className="text-xs">2. Basic toggle and rendering feature</p>
            <p className="text-xs">3. Responsice to all Screens</p>
            <a
              href="https://todo-app-uy6t.vercel.app/"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit to
            </a>
          </p>
        </Card>
        <Card className="max-w-sm hover:scale-110 ProjectCard">
          <img src={Expense} alt="" className="max-h-40" />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Expense Tracker
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 text-sm">
          [HTML,CSS,JavaScript]
            <p className="text-xs">1. Single Page Application</p>
            <p className="text-xs">2. Basic toggle and rendering feature</p>
            <p className="text-xs">3. Responsice to all Screens</p>
            <a
              href="https://sonusharma2332001.github.io/expense-tracker/"
              className="text-blue-700 italic"
              target="_blank"
            >
              visit to
            </a>
          </p>
        </Card>
      </div>
      <div className="text-center">
        <h1 className="text-4xl mb-10 font-semiboldbold font-serif">
          Practice Projects
        </h1>
        <div className="flex  justify-around gap-5 flex-wrap">
          <span>1. Image_Gallery using API</span>
          <span>2. Routing in Mearn</span>
          <span>3. Add to Card using Redux</span>
          <span>4. JWT using Redux</span>
          <span>5. tic tac toe </span>
          <span>6. Expense Tracker</span>
          <span>7. MultiPage Course_Website</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
