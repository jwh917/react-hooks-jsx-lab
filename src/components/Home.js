import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <p style={{ color: "firebrick" }}>Home</p>
    <h1 style={{ color: "firebrick" }}>{name} <br></br> is a Web Developer from {city}</h1>
  </div>);
}

export default Home;
