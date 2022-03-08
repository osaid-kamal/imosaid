import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div id="projects">
      <div className="font-bold text-lg lg:mt-10 mt-40 md:ml- lg:ml-64 underline underline-offset-8 decoration-4 decoration-yellow-400">
       <h4 className="font-bold ml-8 lg:ml-8 text-lg ">PROJECTS</h4> 
      </div>
      <div className="mt-14 mx-4 lg:mt-14 text-center grid grid-cols-1 lg:grid-cols-2 sm:grid:cols-2 hd gap-14  md:ml-70 sm:grid-cols-2 lg:ml-96">
        <div className="w-90 ml-19 border-500  hover:border-t-4 drop-shadow-md rounded-lg lg:h-56 lg:ml-64">
          <h2 className="">Todo App</h2>
          <p>A simple todo list for adding tasks daily in your list</p>
          <a
            className="lg:mt-5"
            href="https://github.com/osaid-kamal/Todo-Angular"
          >
            Source Code
          </a>
        </div>
        <div className=" hover:border-t-4 drop-shadow-lg hover:drop-shadow-md rounded-lg lg:8:56 ">
          <h2 className="">Surprise Planner</h2>
          <p>A blood group searching and donour app in your city</p>
          <p>This app was made with Java as Backend and XMl fronend</p>
        </div>
        <div className="hover:border-t-4 drop-shadow-lg hover:drop-shadow-md rounded-lg lg:h-56 lg:ml-64">
          <h2>Price Tracker</h2>
          <p>
            A python script which monitor price regular and when it comes below
            given amount it alert the user via email
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project;
