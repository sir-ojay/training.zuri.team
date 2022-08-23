import React from 'react'
import "./about.css"
const about = () => {
  return (
    <div>
      {/* second article */}
      <hr />
      <article className={["home-art-two"]}>
        <div className={["art2-left"]} style={{ width: "35%" }}>
          <p className="about-p">
            INGRESSIVE FOR GOOD WAS LAUNCHED IN JULY 2020 WITH NO DOLLAR IN
            DONATION...
          </p>
        </div>

        <div className={["art2-middle"]} style={{ width: "15%" }}>
          <img
            src="https://training.zuri.team/ingresive.jpg"
          
            alt=""
            style={{  width: "100%"  }}
          />
        </div>
        <div className={["art2-right"]} style={{ width: "35%" }}>
          <p className="about-p2">
            to help increase the earning power of African youths by providing
            them with tech skills, community, tools, resources, and jobs...
            <a
              href="https://ingressive.org/i4g-in-2021/"
              style={{ color: "green" }}
            >
              {" "}
              Read More
            </a>
          </p>
        </div>
      </article>
      <hr />
    </div>
  );
}

export default about
