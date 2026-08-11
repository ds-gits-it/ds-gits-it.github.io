import Project from "./Project/Project"
import styles from "./styles.module.css";
import Head1 from "../Head1/Head1"
import ReactSVG from "../SVGs/ReactSVG"
import HTML5SVG from "../SVGs/HTML5SVG";
import Css3SVG from "../SVGs/Css3SVG";
import JavascriptSVG from "../SVGs/JavascriptSVG"
import Separator from "../Separator/Separator"
const Projects = () => {
  const arr = [
    {
      mockup: "./Projects/green_paradise.webp",
      title: "Green Paradise",
      skills: [
        <JavascriptSVG SVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      contri: "Products Page",
      description:
        "A fully functional e-commerce website, offers a wide variety of plants and gardening supplies.",
      github: "https://github.com/ds-gits-it/Green-Paradise/",
      demo: "https://green-paradise-dip.vercel.app/",
    },
    // {
    //   mockup: "./Projects/nykaa.webp",
    //   title: "Nykaa Clone",
    //   skills: [
    //     <JavascriptSVG />,
    //     <HTML5SVG styleClass={styles.html} />,
    //     <Css3SVG />,
    //   ],
    //   contri: "Homepage",
    //   description:
    //     "Online beauty and wellness destination, Offering a comprehensive selection of beauty and wellness products.",
    //   github: "https://github.com/ds-gits-it/Nyka",
    //   demo: "https://nykaa-clone-dip.vercel.app/",
    // },
    {
      mockup: "./Projects/SAWS.webp",
      title: "SAWS",
      contri: "Homepage",
      skills: [
        <ReactSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      description:
        "Built with cutting-edge technologies like HTML, CSS, and JavaScript, This website offers a seamless shopping experience.",
      github: "https://github.com/ds-gits-it/SAWS-Frontend",
      demo: "https://saws.netlify.app/",
    },
    {
      mockup: "./Projects/goggol.webp",
      title: "Google Clone",
      skills: [
        <ReactSVG />,
        <HTML5SVG styleClass={styles.html} />,
        <Css3SVG />,
      ],
      contri: "Everything",
      description:
        "A google clone with extensive functionality with an full fledged shopping section, a videos section wtih video player and more.",
      github: "https://github.com/ds-gits-it/google_clone",
      demo: "https://google-clone-dip.vercel.app/",
    },
  ];
  return (
    <div id="projects" className={styles.container}>
      <Head1 text="Projects" />
      {arr.map((el) => (
        <Project
          key={el.mockup}
          mockup={el.mockup}
          title={el.title}
          skills={el.skills}
          description={el.description}
          github={el.github}
          demo={el.demo}
          contri={el.contri}
        />
      ))}
    </div>
  );
}

export default Projects