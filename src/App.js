import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import VideoBG from "../src/assets/video.mp4";
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <div className="overlay"></div>
      <video autoPlay loop muted src={VideoBG}></video>
      <div className="content">
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          className="flip-clock"
        />
        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
