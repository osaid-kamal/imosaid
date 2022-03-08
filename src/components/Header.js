import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div id="header">
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark sty bcg">
        <div className="navbar-brand ms-5 navbar-dark">
          <h1>
            <FontAwesomeIcon icon="fa-solid fa-bat" />
          </h1>
        </div>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto me-5 sty hover">
            <li className="nav-item active">
              <Link
                className="nav-link"
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={10}
                duration={50}
                // onSetActive={this.handleSetActive}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={10}
                duration={50}
                // onSetActive={this.handleSetActive}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={10}
                duration={50}
                // onSetActive={this.handleSetActive}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="exp"
                spy={true}
                smooth={true}
                offset={10}
                duration={50}
                // onSetActive={this.handleSetActive}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={10}
                duration={50}
                // onSetActive={this.handleSetActive}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
