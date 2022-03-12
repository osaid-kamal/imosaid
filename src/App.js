import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Exp from "./components/Exp";
import Project from "./components/Project";
import { ToastContainer, toast } from "react-toastify";
import { scrollToTop, scroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Row>
          <div className="md:col-span-3 lg:col-span-3">
            <Menu />
          </div>

          <div class="lg:col-span-9">
            <Home />
            <Project />

            <Skills />

            <Exp />

            <Contact />
          </div>
        </Row>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
