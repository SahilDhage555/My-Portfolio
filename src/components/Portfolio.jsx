import React from "react";
import { FaCode } from "react-icons/fa6";

function Portfolio() {
  return (
    <div id="portfolio" className="bg-black">
      <div className="container-fluid">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="Mini-Projects.jpg" alt="" />
            <div className="data">
              <h3>Mini Projects</h3>
              <p>
                Built mini projects using JavaScript, React, APIs, and Bootstrap
                to enhance my skills, focusing on dynamic data fetching and
                responsive design with HTML/CSS.
              </p>
              <div className="d-flex">
                <a href="https://sahilpokemon.netlify.app" className="m-2">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a href="https://github.com/SahilDhage555/Mini-Projects" className="m-2 bg-primary text-light">
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img src="PolyLingo Img.png" alt="" />
            <div className="data">
              <h3>Text Translator</h3>
              <p>
                PolyLingo is a simple text translation app built with React,
                allowing users to translate text between languages with features
                like text-to-speech and easy copying.
              </p>
              <div className="d-flex">
                <a href="https://sahildhage555.github.io/PolyLingo/" className="m-2">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a
                  href="https://github.com/SahilDhage555/PolyLingo"
                  className="m-2 bg-primary text-light"
                >
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
          <div className="work">
            <img
              src="https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1687908860/catalog/1673836551244148736/pehp6lthvahqimy7jy5l.jpg"
              alt=""
            />
            <div className="data">
              <h3>Online Shopping</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque sint inventore.
              </p>
              <div className="d-flex">
                <a href="#home" className="m-2">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a href="#home" className="m-2 bg-primary text-light">
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#home"
          className="btn"
          onClick={() => {
            alert("More Projects Coming Soon...");
          }}
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default Portfolio;
