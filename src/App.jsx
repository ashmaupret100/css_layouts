import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const names = ["Black", "Brown", "Calico", "White"];
  let listing_array = [];
  for (let i = 0; i < names.length; i++) {
    listing_array[i] = <li>{names[i]}</li>;
  }

  return (
    <>
      <header>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="Home">Cat Blog</a>
          </li>
          <li>
            <a href="Home">Our Cats</a>
          </li>
          <li>
            <a href="Home">Contact Us</a>
          </li>
        </ul>
        <button className="button">Get Started</button>
      </header>
      <div className="main">
        <div></div>
        <div className="list">
          <li>{listing_array}</li>
        </div>

        <div className="picture"></div>
      </div>
      <footer>Copywrite@2023</footer>
    </>
  );
}

export default App;
