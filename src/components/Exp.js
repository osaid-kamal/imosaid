import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
const Exp = () => {
  return (
    <div id="exp" className="lg:mt-10">
      <div className="underline underline-offset-8 decoration-4 lg:ml-64 decoration-yellow-400 hd ">
        <h4 className="font-bold ml-8 lg:mt-10 lg:ml-8 text-lg">EXPERIENCE</h4>
      </div>
      <div className="grid gap-5 sm:gap-4 lg:gap-5 grid-cols-1 md:grid-cols-2 ml-8 mt-8 sm:grid-cols-1 lg:grid-cols-2">
        <div className="lg:ml-64 lg:mt-10 md:mt-10 sm:mt-10 sm:ml-0">
          <h2>Android Developer</h2>
          <p>Micrpro Solutions</p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Kolkata, West Bengal
          </p>
        </div>
        <div className="lg:ml-32 lg:mt-10 md:mt-10 sm:mt-0 sm:ml-0">
          <h2>Associate Sofware Engineer</h2>
          <p>Accenture Solutions</p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Bangalore, Karnataka
          </p>
        </div>
        <div className="lg:ml-64 lg:mt-24 md:mt-10 sm:mt-0 sm:ml-0">
          <h2>Software Developer Intern</h2>
          <p>Bid Ocean Inc</p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Gangtok, Sikkim
          </p>
        </div>
      </div>
    </div>
  );
};
export default Exp;
