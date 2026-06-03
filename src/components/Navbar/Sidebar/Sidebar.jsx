import styles from "./styles.module.css";

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      id={styles.container}
      className={sidebarOpen ? styles.open : styles.closed}
    >
      {/* Links visible on larger viewports */}
      <a className="nav-link about" href="#app">
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
  );
};

export default Sidebar;
