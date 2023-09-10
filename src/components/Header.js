import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Projects";

export default function Header() {
  const __menu__ = () => {
    var check = document.getElementById("mobile_menu").getAttribute("check");
    if (check === "0") {
      document.getElementById("mobile_menu").style.display = "block";
      document.getElementById("mobile_menu").setAttribute("check", "1");
    } else {
      document.getElementById("mobile_menu").style.display = "none";
      document.getElementById("mobile_menu").setAttribute("check", "0");
    }
  };
  return (
    <BrowserRouter>
      <div className="nav-bar">
        <h2 className="logo">
          <span>Portfolio</span>
        </h2>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <span id="menu" onClick={__menu__}>
          =
        </span>
      </div>
      <div
        id="mobile_menu"
        style={{ display: "none" }}
        className="menu"
        check="0"
      >
        <h3>Menu</h3>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
      </div>
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/home" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/projects" element=<Project /> />
      </Routes>
    </BrowserRouter>
  );
}
