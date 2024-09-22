import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <About />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
