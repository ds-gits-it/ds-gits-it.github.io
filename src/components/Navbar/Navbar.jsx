import styles from "./styles.module.css"
import WhiteButton from "../Button/white"
import BlackButton from "../Button/black"
import Sidebar from "./Sidebar/Sidebar";
import CrossSVG from "../SVGs/CrossSVG/CrossSVG";
import Hamburger from "../SVGs/HamburgerSVG/Hamburger";
import { useState } from "react";
const Navbar = () => {
  const handleClick = () => setSidebaropen((prev) => !prev);
  const [sidebarOpen,setSidebaropen] = useState(false)
  const downloadHandle = () => {
    const link = document.createElement("a");
    link.download = "Dipanshu_Singh_Resume.pdf";
    link.href = "/Dipanshu_Singh_Resume.pdf";
    link.click();
    window.open(
      "https://rxresu.me/work.dipanshu.singh/stuck-healthy-owl",
      "_blank"
    );
  };
  return (
    <nav id="nav-menu" className={styles.navbar}>
      {sidebarOpen ? (
        <CrossSVG handleClick={handleClick} />
      ) : (
        <Hamburger handleClick={handleClick} />
      )}
      {sidebarOpen && <Sidebar sidebarOpen />}
      <div id={styles.options}>
        <a className="nav-link home" href="#app">
          Home
        </a>
        <a className="nav-link about" href="#about">
          About
        </a>
        <a className="nav-link skills" href="#skills">
          Skills
        </a>
        <a className="nav-link projects" href="#projects">
          Projects
        </a>
        <a className="nav-link contact" href="#contact">
          Contact
        </a>
      </div>
      <div className={styles.buttonsContainer}>
        <BlackButton
          event={() => {
            window.open("https://github.com/Dipanshu-Singh-Dev", "_blank");
          }}
          external
          text="Github"
          childClass="nav-link github"
          childId="github-button-1"
        />
        <WhiteButton
          external
          event={downloadHandle}
          childId="resume-button-1"
          childClass="nav-link resume"
          text="Resume"
        />
      </div>
    </nav>
  );
};

export default Navbar;
