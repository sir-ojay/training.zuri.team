import React from 'react';
import EnrolNow from '../../Components/Enroll/EnrolNow';
import './stacks.css'

const stacks = () => {
  return (
    <div>
      {/* fifth article */}
      <article className="stacks-art5">
        <div className="stacks-article">
          <p className="stacks-small">Scope Of Program</p>
          <p className="stacks-big">
            Here is the list of areas that will be explored in the training.
          </p>
        </div>

        <div className="stacks-img-centre">
          <img src="https://training.zuri.team/section6.svg" alt="" />
        </div>

        <div className="stacks-grid-card">
          <div className="stacks-flex-card1">
            <h3>Frontend Development</h3>
            <span>
              <img src="https://training.zuri.team/html.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/css-3%20logo.svg" alt="" />
            </span>
            <span>
              <img
                src="https://training.zuri.team/javascript%20logo.svg"
                alt=""
              />
            </span>
            <p>
              This track deals with the aspect of your application that the
              users interact with. A front-end developer will be able to
              correctly interpret a given design to the user interface.
            </p>
          </div>

          <div className="why-grid-card2">
            <h3>Backend Development</h3>
            <span>
              <img src="https://training.zuri.team/php2%20logo.svg" alt="" />
            </span>
            <span>
              <img
                src="https://training.zuri.team/python-4%20logo.svg"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://training.zuri.team/javascript%20logo.svg"
                alt=""
              />
            </span>
            <p>
              This track deals with the aspect of the application the user does
              not directly interact with. It allows the frontend function either
              by running some back-end code or connecting to the database.
            </p>
          </div>

          <div className="why-flex-card3">
            <h3>Product Design</h3>
            <span>
              <img
                src="https://training.zuri.team/adobe-xd%20logo.svg"
                alt=""
              />
            </span>
            <span>
              <img src="https://training.zuri.team/Figma%20logo.svg" alt="" />
            </span>

            <p>
              This track deals with creating a graphic plan for an application.
              You will learn to convert project documentation into viewable and
              understandable graphic design for the developers to work with.
            </p>
          </div>

          <div className="why-flex-card4">
            <h3>DevOPS</h3>
            <span>
              <img src="https://training.zuri.team/Ubuntu%20logo.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/Bash%20logo.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/aws%20logo.svg" alt="" />
            </span>
            <p>
              The DevOps track is an extension of the backend track. It involves
              tools that’ll allow the participant to deploy solutions for public
              use.
            </p>
          </div>

          <div className="why-flex-card5">
            <h3>Fullstack Development</h3>
            <span>
              <img src="https://training.zuri.team/html.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/css-3%20logo.svg" alt="" />
            </span>
            <span>
              <img
                src="https://training.zuri.team/javascript%20logo.svg"
                alt=""
              />
            </span>
            <span>
              <img
                src="https://training.zuri.team/python-4%20logo.svg"
                alt=""
              />
            </span>
            <p>
              A combination of frontend, backend, and DevOps. This track will
              only be available to participants who have the time to dedicate to
              the training.
            </p>
          </div>
          <div className="why-flex-card6">
            <h3>Frameworks</h3>
            <span>
              <img src="https://training.zuri.team/Laravel%20logo.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/React%20logo.svg" alt="" />
            </span>
            <span>
              <img src="https://training.zuri.team/Django%20logo.svg" alt="" />
            </span>
            <p>
              During the program we will be exploring several useful frameworks
              to give you an edge in the industry and help you develop complex
              applications much faster.
            </p>
          </div>
        </div>

        <div className="why-enroll">
          <EnrolNow />
        </div>
      </article>
    </div>
  );
}

export default stacks