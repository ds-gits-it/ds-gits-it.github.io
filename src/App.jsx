// App.jsx
import  { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import BlurryBlob from "./components/BlurryBlob";
import About from "./components/About/Index";
const Skills = lazy(() => import("./components/Skills/Index"));
const Projects = lazy(() => import("./components/Projects/Index"));
const Contact = lazy(() => import("./components/Contact/Index"));
const GithubStats = lazy(() => import("./components/GithubStats/Index"));
import Separator from "./components/Separator/Separator";
import { initializeSmoothScrolling } from "./utils/smoothScroll";
function App() {
  initializeSmoothScrolling()
  return (
    <>
      <BlurryBlob />
      <Navbar />
      <div id="app">
        <About />
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Skills />
        </Suspense>
       {/*
         <Separator />
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <GithubStats />
        </Suspense>
        <Separator />
        */}
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Projects />
        </Suspense>
        {/* <Separator /> */}
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}

export default App;
