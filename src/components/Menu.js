import { Button, ListGroup } from "reactstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCoffee,
  faHome,
  faContactCard,
  faChalkboard,
  faWindowMaximize,
  faList,
} from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <div>
      <div className="sidenav text-xs ">
        <li className="active text-sm">
          <Link
            className="cursor-pointer nav-link text-blue-50"
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-60}
            duration={50}
            isDynamic={true}
          >
            <FontAwesomeIcon className="me-3" icon={faHome} />
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="cursor-pointer nav-link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-14}
            duration={50}
            // onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon className="me-3" icon={faChalkboard} />
            Projects
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="cursor-pointer nav-link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-40}
            duration={50}
            // onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon className="me-3" icon={faWindowMaximize} />
            Skills
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="cursor-pointer nav-link"
            activeClass="active"
            to="exp"
            spy={true}
            smooth={true}
            offset={-40}
            duration={50}
            // onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon className="me-3" icon={faList} />
            Experience
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="cursor-pointer nav-link"
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-40}
            duration={50}
            // onSetActive={this.handleSetActive}
          >
            <FontAwesomeIcon className="me-3" icon={faContactCard} />
            Contact
          </Link>
        </li>
      </div>
      <div className="flex fixed-bottom mb-2 ml-12">
        <span>
          <a target="_blank" href="https://github.com/osaid-kamal?tab=repositories">
            <FontAwesomeIcon
              className=""
              icon={faGithub}
              color="white"
              size="lg"
            />
          </a>
        </span>

        <span>
          <a target="_blank" href="https://www.facebook.com/mohdosaid4/">
            <FontAwesomeIcon
              className="ml-8"
              icon={faFacebookF}
              color="white"
              size="lg"
            />
          </a>
        </span>

        <span>
          <a target="_blank" href="https://www.linkedin.com/in/osaid-kamal/">
            <FontAwesomeIcon
              className="ml-8 "
              icon={faLinkedin}
              color="white"
              size="lg"
              
            />
          </a>
        </span>
      </div>
    </div>
  );
};
export default Menu;
