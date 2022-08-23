import React from "react";
import { Link } from "react-router-dom";
import { NavHashLink  } from "react-router-hash-link";
import EnrolNow from "../Enroll/EnrolNow";
import './navbar.css'
const navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">
          <Link to="/">
            <img src="https://training.zuri.team/logo.svg" alt="zuri logo" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            {" "}
            <NavHashLink
              to="/#about"
              activeClassName="selected"
              activeStyle={{ color: "red" }}
            >
              About
            </NavHashLink>
          </li>
          <li>
            {" "}
            <NavHashLink to="/#why" activeClassName="selected">
              Why Us?
            </NavHashLink>
          </li>
          <li>
            <NavHashLink to="/#stacks" activeClassName="selected">
              Stacks Covered
            </NavHashLink>{" "}
          </li>
          <li>
            <NavHashLink to="/#faqs" activeClassName="selected">
              FAQs
            </NavHashLink>{" "}
          </li>
          <li> </li>
        </ul>
        <Link to="/enroll">
          <div className="nav-thumbs-enroll">
            <div className="thumbs-circle">
              {" "}
              <img
                className="thumbs"
                src="https://training.zuri.team/thumbs.png"
                alt="enroll img"
              />
            </div>
            <div className="thumbs-enroll">
              {" "}
              <EnrolNow />
            </div>
          </div>
        </Link>
      </nav>
   
    </div>
  );
};

export default navbar;
