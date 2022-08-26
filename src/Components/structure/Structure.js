import React from 'react'
import './structure.css'

const Structure = () => {
  return (
    <div className="structure-program">
      <div className="structure-flex">
        <div className="structure-wire-img">
          <img src="https://training.zuri.team/section7wire.svg" alt="" />
        </div>

        <div className='structure-flex-top'>
          <div className="structure-article">
            <p className="structure-para1">Structure</p>
            <p className="structure-para2">Program Structure</p>
            <p className="structure-para3">
              There are 2 broad paths in this program based on your
              availability.
            </p>
          </div>

          <div className="structure-img-star">
            <img src="https://training.zuri.team/Star1.svg" alt="" />
          </div>
        </div>

        <div className="structure-path-flex">
          <div className="structure-flex-left">
            <p className="structure-left-para1">Full-time</p>
            <p className="structure-left-para2">
              Requires at least 25 hours weekly on program content.
            </p>
            <p className="structure-left-para3">Available Tracks:</p>

            <ul className="structure-left-list1">
              <li>
                Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS,
                JavaScript) & DevOps
              </li>
              <li>Design: Figma, Adobe XD</li>
            </ul>

            <p>Phases:</p>

            <ul className="structure-left-list1">
              <li>Training Phase</li>
              <li>Project Phase</li>
            </ul>

            <p>Post Program:</p>

            <ul className="structure-left-list1">
              <li>Certification of Attendance</li>
              <li>Zuri Internship </li>
              <li>Laptop Reward (upgrade or new one)</li>
              <li>Job Placement </li>
              <li>Zuri Talent Pool</li>
              <li>More Training:</li>
            </ul>

            <div className="structure-mini-flex">
              <div className="structure-mini-left">
                {" "}
                <p>Interview Prep</p>
                <p>Algorithms & Data Structure</p>
                <p>Freelance Setup & Training</p>
                <p>LinkedIn Optimization</p>
                <p>CV Review</p>
              </div>

              <div className="structure-mini-right">
                <img src="https://training.zuri.team/hour.png" alt="" />
              </div>
              
            </div>
          </div>

          <div className="structure-flex-right">
            <p className="structure-right-para1">Part-time</p>
            <p className="structure-right-para2">
              Requires at least 11 hours weekly on program content.
            </p>
            <p className="structure-right-para3">Available Tracks:</p>

            <ul className="structure-right-list1">
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>
                Backend: Can only select one backend language Python, PHP,
                JavaScript
              </li>
              <li>Design: Figma</li>
            </ul>

            <div className="structure-mini-flex">
              <div className="structure-mini-left">
                {" "}
                <p>Phases:</p>
                <ul className="structure-right-list2">
                  <li>Training Phase</li>
                </ul>
                <p>Post Program:</p>
                <ul className="structure-right-list3">
                  <li>Certification of Attendance</li>
                  <li>Zuri Internship </li>
                </ul>
              </div>

              <div className="structure-mini-right">
                <img src="https://training.zuri.team/time.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Structure