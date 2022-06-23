import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Project = () => {
  return (
    <div id="projects">
      <div className="font-bold text-lg lg:mt-18 mt-40 md:ml- lg:ml-64 underline underline-offset-8 decoration-4 decoration-yellow-400">
        <h4 className="font-bold ml-8 lg:ml-8 text-lg ">PROJECTS</h4>
      </div>
      <div className="mt-14 mx-4 lg:mt-14 text-center grid grid-cols-1 lg:grid-cols-2 sm:grid:cols-2 hd gap-14  md:ml-70 sm:grid-cols-2 lg:ml-96">
        <div className="w-90 ml-19 border-500  hover:border-t-4 drop-shadow-lg rounded-lg lg:h-56 lg:ml-64">
          <h2 className="">Surprise Planner WebApp</h2>
          <p>
            A Web Application which helps users to plan something special for
            their loved ones by selecting from varierty of packages with custom
            modification
          </p>
          <a
            className="lg:mt-5"
            href="https://github.com/osaidkamal/Suprise-Planner-Website"
          >
            Source Code
          </a>
        </div>
        <div className=" hover:border-t-4 drop-shadow-lg hover:drop-shadow-lg rounded-lg lg:8:56 ">
          <h2 className="">Android App</h2>
          <p>A blood group searching and donour app in your city</p>
          <p>This app was made with Java as Backend and XMl fronend</p>
          <a
            className="lg:mt-5"
            href="https://github.com/osaid-kamal/Todo-Angular"
          >
            Source Code
          </a>
        </div>
        <div className="hover:border-t-4 drop-shadow-lg hover:drop-shadow-lg rounded-lg lg:h-56 lg:ml-64 mb-16">
          <h2>Price Tracker</h2>
          <p>
            A python script which monitor price regular and when it comes below
            given amount it alert the user via email
          </p>
          <a
            className="lg:mt-5"
            href="https://github.com/osaidkamal/PriceTracker"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};
export default Project;
