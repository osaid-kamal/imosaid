import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocation, faCalendar } from "@fortawesome/free-solid-svg-icons";
const Education = () => {
  return (
    <div id="education" className="lg:mt-10">
      <div className="underline underline-offset-8 decoration-4 lg:ml-64 decoration-yellow-400 hd lg:mb-4 md:mb-4">
        <h4 className="font-bold ml-8 lg:mt-10 lg:ml-8 text-lg">Education</h4>
      </div>
      <div className="grid gap-5 sm:gap-4 lg:gap-5 grid-cols-1 md:grid-cols-2 ml-8 mt-16 sm:grid-cols-1 lg:grid-cols-2 lg:mt-8 md:mt-8 ">
        <div className="lg:ml-64 lg:mt-10 md:mt-10 sm:mt-10 sm:ml-0">
          <h2>BTech</h2>
          <p>Sikkim Manipal Institute of Technology</p>
          <p>
            <FontAwesomeIcon className="text-center mr-2" icon={faCalendar} />
            July 2017 - August 2021
          </p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Sikkim, India
          </p>
        </div>
        <div className="lg:ml-32 lg:mt-11 md:mt-11 sm:mt-0 sm:ml-0">
          <h2>Higher Seconday School</h2>
          <p>Samta Public School</p>
          <p>
            <FontAwesomeIcon className="text-center mr-2" icon={faCalendar} />
            April 2016 - May 2017
          </p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Azamgarh, Uttar Pradesh
          </p>
        </div>
        <div className="lg:ml-64 lg:mt-24 md:mt-10 sm:mt-0 sm:ml-0">
          <h2>High School</h2>
          <p>Internation Indian School Taif</p>
          <p>
            <FontAwesomeIcon className="text-center mr-2" icon={faCalendar} />
            April 2013 - May 2014
          </p>
          <p>
            <FontAwesomeIcon
              className="text-center mr-2"
              icon={faMapLocation}
            />
            Taif, Saudi Arabia
          </p>
        </div>
      </div>
    </div>
  );
};
export default Education;
