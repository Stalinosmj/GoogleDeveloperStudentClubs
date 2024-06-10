import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Mainhead from "./components/Main-head/Main-head";
import About from "./components/About/About";
import { Parallax } from "react-parallax";
import Features from "./components/Features/Features";
import Follow from "./components/Features/Follow";
import GDSC from "./components/Gdsc/gdsc";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Parallax
        strength={100}
      >
        <div >
          <Mainhead />
        </div>
      </Parallax>
      <About />
      <Features/>
      <GDSC/>
      <Follow/>
    </div>
  );
};

export default App;
