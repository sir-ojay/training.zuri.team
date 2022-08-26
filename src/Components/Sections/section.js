import React from "react";
import EnrollWhite from "../Enroll/enrollWhite";
import "./section.css";

const section = () => {
  return (
    <div className="section-flex">
      <div className="section-flex-left">
        <div className="section-left-img">
          <img src="https://training.zuri.team/section5wire.svg" alt="" />
        </div>
        <div className="section-left-para">
          <p className="section-left-p1">We will help you get started</p>
          <p className="section-left-p2">
            High quality training with hands-on practice
          </p>
          <p className="section-left-p3">
            We give you weekly tasks, ranging from easy to complex, as you
            progress from stage to stage; making it to the final stage means you
            are now ready to continue learning and growing independently.
          </p>
          <div className="section-div-enroll">
            <EnrollWhite />
          </div>

          <div className="section-mini-flex">
            <div className="sec-mini">
              <img
                src="https://training.zuri.team/hand.svg"
                style={{ width: "25%", paddingRight: "2px" }}
                alt=""
              />

              <p className="sec-mini-font">Teamwork</p>
            </div>

            <div className="sec-mini">
              <img
                src="https://training.zuri.team/mentor.svg"
                style={{ width: "25%", paddingRight: "9px" }}
                alt=""
              />

              <p className="sec-mini-font">Mentorship</p>
            </div>

            <div className="sec-mini">
              <img
                src="https://training.zuri.team/practice.svg"
                alt=""
                style={{ width: "25%", paddingRight: "9px" }}
              />

              <p className="sec-mini-font">Practice</p>
            </div>

            <div className="sec-mini">
              <img
                src="https://training.zuri.team/games.svg"
                alt=""
                style={{ width: "25%", paddingRight: "9px" }}
              />
              <p className="sec-mini-font">Fun & Games</p>
            </div>
          </div>
        </div>

        <div className="section-dot-img">
          <img
            src="https://training.zuri.team/dotsection5.svg"
            alt=""
            style={{ width: "25%", paddingTop: "5vh" }}
          />
        </div>
      </div>

      <div className="section-flex-right">
        <img src="https://training.zuri.team/section5-image.png" alt="" />
      </div>
    </div>
  );
};

export default section;
