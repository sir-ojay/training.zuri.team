import React from "react";
import "./why.css";

const why = () => {
  return (
    <div>
      <div className="why-img-top">
        <img src="https://training.zuri.team/section3wire.svg" alt="" />
      </div>
      <div className="why-us">
        <div className="why-flex">
          <div className="why-flex-left">
            <p className="why-para">Why Zuri Training?</p>
            <p className="why-para2">
              Here at Zuri, you gain access to enough knowledge to introduce and
              aid your success in the tech industry.
            </p>
          </div>
          <div className="why-flex-right">
            <img src="https://training.zuri.team/Star.jpg" alt="" />
          </div>
        </div>

        <div className="why-flex-card">
          <div className="why-card1">
            <img src="https://training.zuri.team/curve1.png" alt="" />
            <p>01</p>
            <p>
              Fully
              <br /> Remote
            </p>
            <p>100% online classes available to anyone in the world.</p>
          </div>

          <div className="why-card2">
            <img src="https://training.zuri.team/curve.svg" alt="" />
            <p>02</p>
            <p>
              Hands-on
              <br /> Experience
            </p>
            <p>
              We don't just teach you theory, we show you how to build things.
            </p>
          </div>

          <div className="why-card3">
            <img src="https://training.zuri.team/curve3.svg" alt="" />
            <p>03</p>
            <p>
              Collaborative
              <br /> Learning
            </p>
            <p>We connect you with like minds to grow together.</p>
          </div>

          <div className="why-card4">
            <img src="https://training.zuri.team/curve4.svg" alt="" />
            <p>04</p>
            <p>
              Real-life
              <br /> Projects
            </p>
            <p>
              We give CV worthy projects to help you hit the ground running.
            </p>
          </div>

          <div className="why-card5">
            <img src="https://training.zuri.team/curve5.svg" alt="" />
            <p>05</p>
            <p>
              Beginner
              <br /> Friendly
            </p>
            <p>We provide step-by-step procedures on how to get things done.</p>
          </div>

          <div className="why-card6">
            <img src="https://training.zuri.team/curve6.svg" alt="" />
            <p>06</p>
            <p>
              In-program
              <br /> Mentorship
            </p>
            <p>
              During and after the program you have access to experience
              seniors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default why;
