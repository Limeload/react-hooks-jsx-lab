import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
<h2> About Me </h2>
<p> Hello there, I am pleased to welcome you to my portfolio website where I showcase my projects!</p>
<img src={image} alt="I made this"></img>
  </div>;
}

export default About;
