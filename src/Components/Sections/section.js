import React from "react";
import EnrollWhite from "../Enroll/enrollWhite";
import "./section.css";

const section = () => {
  return (
    <div className="structure-flex">
      <div className="structure-flex-left">
        <div className="structure-left-img">
          <img src="https://training.zuri.team/section5wire.svg" alt="" />
        </div>
        <div className="structure-left-para">
          <p className="structure-left-p1">We will help you get started</p>
          <p className="structure-left-p2">
            High quality training with hands-on practice
          </p>
          <p className="structure-left-p3">
            We give you weekly tasks, ranging from easy to complex, as you
            progress from stage to stage; making it to the final stage means you
            are now ready to continue learning and growing independently.
          </p>
          <div className="structure-div-enroll">
            <EnrollWhite />
          </div>

          <div className="structure-mini-flex">
            <div className="struc-mini">
              <img
                src="https://training.zuri.team/hand.svg"
                style={{ width: "25%", paddingRight: "9px" }}
                alt=""
              />

              <p className="struc-mini-font">Teamwork</p>
            </div>

            <div className="struc-mini">
              <img
                src="https://training.zuri.team/mentor.svg"
                style={{ width: "25%", paddingRight: "9px" }}
                alt=""
              />

              <p className="struc-mini-font">Mentorship</p>
            </div>

            <div className="struc-mini">
              <img
                src="https://training.zuri.team/practice.svg"
                alt=""
                style={{ width: "25%", paddingRight: "9px" }}
              />

              <p className="struc-mini-font">Practice</p>
            </div>

            <div className="struc-mini">
              <img
                src="https://training.zuri.team/games.svg"
                alt=""
                style={{ width: "25%", paddingRight: "9px" }}
              />
              <p className="struc-mini-font">Fun & Games</p>
            </div>
          </div>
        </div>

        <div className="structure-dot-img">
          <img
            src="https://training.zuri.team/dotsection5.svg"
            alt=""
            style={{ width: "25%" }}
          />
        </div>
      </div>

      <div className="structure-flex-right">
        <img src="https://training.zuri.team/section5-image.png" alt="" />
      </div>
    </div>
  );
};

export default section;
