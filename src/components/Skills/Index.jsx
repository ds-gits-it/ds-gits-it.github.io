import styles from "./styles.module.css"
import Head1 from "../Head1/Head1"
import Separator from "../Separator/Separator"
import FirebaseSVG from "../SVGs/FirebaseSVG"
import ReactSVG from "../SVGs/ReactSVG"
import JavascriptSVG from "../SVGs/JavascriptSVG"
import NodeJSSVG from "../SVGs/NodeJSSVG"
import Html5SVG from "../SVGs/HTML5SVG"
import Css3SVG from "../SVGs/Css3SVG"
import MongoDBSVG from "../SVGs/MongoDBSVG"
import ExpressJSSVG from "../SVGs/ExpressJSSVG"
import JavaSVG from "../SVGs/JavaSVG"
import PythonSVG from "../SVGs/PythonSVG";
import GitSVG from "../SVGs/GitSVG";
import GithubSVG from "../SVGs/GithubSVG";
const Skills = () => {
  const skillsArr = [
    {
      icon: <ReactSVG styleClass={styles.react} />,
      name: "React",
    },
    {
      icon: <NodeJSSVG styleClass={styles.node} />,
      name: "NodeJS",
    },
    {
      icon: <MongoDBSVG styleClass={styles.mongo} />,
      name: "MongoDB",
    },
    {
      icon: <ExpressJSSVG styleClass={styles.express} />,
      name: "ExpressJS",
    },
    {
      icon: <JavascriptSVG styleClass={styles.js} />,
      name: "JavaScript",
    },
    {
      icon: <Html5SVG styleClass={styles.html} />,
      name: "HTML5",
    },
    {
      icon: <Css3SVG styleClass={styles.css3} />,
      name: "CSS3",
    },
    {
      icon: <FirebaseSVG styleClass={styles.firebase} />,
      name: "Firebase",
    },
    {
      icon: <JavaSVG styleClass={styles.java} />,
      name: "Java",
    },
    {
      icon: <PythonSVG styleClass={styles.python} />,
      name: "Python",
    },
    {
      icon: <GitSVG styleClass={styles.git} />,
      name: "Git",
    },
    {
      icon: <GithubSVG styleClass={styles.github} />,
      name: "Github",
    },
  ];
  return (
    <div id="skills" className={styles.container}>
      <Head1 text="Skills" />
      <div id={styles.skillsContainer}>
        {skillsArr.map((el) => (
          <div className={`${styles.skillContainer} skills-card`} key={el.name}>
            {el.icon}
            <p className="skills-card-name">{el.name}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Skills