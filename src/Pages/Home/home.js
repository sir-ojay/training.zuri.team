import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import Footer from '../../Components/Footer/footer'
import Why from '../Why/why';
import About from '../About/about';
import EnrolNow from '../../Components/Enroll/EnrolNow';
import Section from '../../Components/Sections/section';
import Stacks from '../../Pages/Stacks/stacks'
import Structure from "../../Components/structure/Structure";
import Faqs from '../../Pages/Faqs/faqs';
import './homeModule.css';

import { HashLink} from "react-router-hash-link";
import Tech from '../../Components/Tech/Tech';


const home = () => {
  return (
    <div className="home">
      <div className="home-navbar">
        <Navbar />
      </div>

      <section className="home-sect ">
        {/* First article */}
        <article className="home-art-one">
          <div className="art1-left" style={{ width: "30%" }}>
            <img
              src="https://training.zuri.team/lady1.jpg"
              alt=""
              style={{
                width: "90%",
                marginTop: "20vh",
                marginRight: "2vw",
                marginLeft: "3vw",
              }}
            />
          </div>

          <div
            className="art1-middle"
            style={{ marginTop: "25vh", width: "45%" }}
          >
            <p className="para">And now your search has ended...</p>
            <p className="p">
              Gain knowledge to help you scale through the tech industry for
              free.
              <div
                className="imgUnderFree"
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "right",
                  marginLeft: "-20px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src="https://training.zuri.team/line.svg"
                  alt="img-free"
                  style={{
                    width: "33%",
                  }}
                />
              </div>
            </p>

            <p className="home-paragraph">
              A basic introduction to software development and product design
              aimed at complete beginners, which anyone can join
            </p>

            <div
              className="art1-mini-flex"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "75%",
              }}
            >
              <div className="art1-flex-left">
                <img
                  src="https://training.zuri.team/maleface.svg"
                  style={{ width: "70%" }}
                  alt=""
                />
              </div>

              <div className="art1-flex-middle">
                <div className="home-enroll-button">
                  <EnrolNow />
                </div>

                <div className="art1-flex-right">
                  <img
                    src="https://training.zuri.team/section1wire.svg"
                    alt="img"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="art1-right"
            style={{ width: "30%", marginTop: "30vh" }}
          >
            <img
              src="https://training.zuri.team/male1.jpg"
              alt=""
              style={{ width: "80%" }}
            />
          </div>
        </article>

        <article className="home-art2">
          <HashLink smooth to="/#about" id="about">
            <About />
          </HashLink>
        </article>

        <article className="home-art3">
          <HashLink smooth to="/#why" id="why">
            <Why />
          </HashLink>
        </article>

        <article className="home-art4">
          <Section />
        </article>

        <article className="home-art5">
          <HashLink smooth to="/#stacks" id="stacks">
            <Stacks />
          </HashLink>
        </article>

        <article className="home-art6">
          <HashLink smooth to="/#faqs" id="faqs">
            <Faqs />
          </HashLink>
        </article>

        <article className="home-art7">
          <Structure />
        </article>

        <article className="home-art7">
          <Tech />
        </article>
      </section>

      <div className="home-footer">
        <Footer />
      </div>
    </div>
  );
}

export default home