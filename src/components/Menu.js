import { Button, ListGroup } from "reactstrap";
import { Link } from "react-scroll";
import "bootstrap/dist/css/bootstrap.min.css";
const Menu = () => {
  return (
    <div>
      <div class="sidenav text-xs ">
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
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};
export default Menu;
