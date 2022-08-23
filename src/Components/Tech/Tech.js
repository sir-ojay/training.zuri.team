import React from 'react'
import EnrolNow from '../Enroll/EnrolNow';

const Tech = () => {
  return (
    <div className="Tech-flex">
      <div className="Tech-flex-left">
        <img src="https://training.zuri.team/round.svg" alt="" />
      </div>
      <div className="Tech-flex-middle">
        <p>Get Started</p>
        <h2>Break into the tech industry like a Pro</h2>

        <div className="EndPart-enroll">
          <EnrolNow />
        </div>
      </div>

      <div className="Tech-flex-right">
        <img src="https://training.zuri.team/mains.png" alt="" />
      </div>
    </div>
  );
}

export default Tech