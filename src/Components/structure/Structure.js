import React from 'react'

const Structure = () => {
  return (
    <div className='structure-program'>
      <div className="structure-flex">
        <div>
          <img src="https://training.zuri.team/section7wire.svg" alt="" />
        </div>

        <div>
          <p>Structure</p>
          <h3>Program Structure</h3>
          <p>
            There are 2 broad paths in this program based on your availability.
          </p>
        </div>

        <div>
          <img src="https://training.zuri.team/Star1.svg" alt="" />
        </div>

        <div className="structure-path-flex">
          <div className="structure-flex-left">
            <h2>Full-time</h2>
            <p>Requires at least 25 hours weekly on program content.</p>
            <h3>Available Tracks:</h3>
            <ul>
              <li>
                Full Stack: Backend (Python, JavaScript), Frontend (HTML, CSS,
                JavaScript) & DevOps
              </li>
              <li>Design: Figma, Adobe XD</li>
            </ul>
            <h3>Phases:</h3>
            <ul>
              <li>Training Phase</li>
              <li>Project Phase</li>
            </ul>
            <h3>Post Program:</h3>
            <ul>
              <li>Certification of Attendance</li>
              <li>Zuri Internship </li>
              <li>Laptop Reward (upgrade or new one)</li>
              <li>Job Placement </li>
              <li>Zuri Talent Pool</li>
              <li>More Training:</li>
            </ul>
            <div>
              <div>
                {" "}
                <p>Interview Prep</p>
                <p>Algorithms & Data Structure</p>
                <p>Freelance Setup & Training</p>
                <p>LinkedIn Optimization</p>
                <p>CV Review</p>
              </div>
              <div>
                <img src="https://training.zuri.team/hour.png" alt="" />
              </div>
            </div>
          </div>

          <div className="structure-flex-right">
            <h2>Part-time</h2>
            <p>Requires at least 11 hours weekly on program content.</p>
            <h3>Available Tracks:</h3>
            <ul>
              <li>Frontend: HTML, CSS, JavaScript</li>
              <li>
                Backend: Can only select one backend language Python, PHP,
                JavaScript
              </li>
              <li>Design: Figma</li>
            </ul>
            <div>
              <div>
                {" "}
                <h3>Phases:</h3>
                <ul>
                  <li>Training Phase</li>
                </ul>
                <h3>Post Program:</h3>
                <ul>
                  <li>Certification of Attendance</li>
                  <li>Zuri Internship </li>
                </ul>
              </div>
              <div>
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