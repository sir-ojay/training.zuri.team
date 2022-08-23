import React from "react";
import './footer.css'

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-left">
        <div className="footer-logo">
          <img src="https://training.zuri.team/logo.svg" alt="logo" />{" "}
        </div>
        <div className="footer-copy">
          <p>&copy; 2022 Zuri Training</p>
        </div>
      </div>

      <div className="footer-right">
        <ul className="footer-links">
          <li>
            <a href="https://www.facebook.com/thezuriteam/" target="blank">
              <img
                src="https://training.zuri.team/facebook.svg"
                alt="facebook"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/zuri-team" target="blank">
              <img src="https://training.zuri.team/linkd.svg" alt="LinkedIn" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/thezuriteam" target="blank">
              {" "}
              <img src="https://training.zuri.team/twitter.svg" alt="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/thezuriteam" target="blank">
              <img src="https://training.zuri.team/youtube.svg" alt="YouTube" />
            </a>
          </li>
        </ul>

        <div className="footer-policy">
          <p>Privacy Policy </p> <p>Ingressive For Good</p>
        </div>
      </div>
    </div>
  );
};

export default footer;
