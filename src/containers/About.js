import React from "react";
import "../App.css";
var { SocialIcon } = require("react-social-icons");

const About = () => {
  return (
    <div class="container" style={{ margin: "1vh", maxWidth: "96.5rem" }}>
      <div class="meet text-align-center">
        <h1
          style={{
            margin: "1.2em 0em",
            fontWeight: "bolder",
            fontSize: "2.3em",
          }}
        >
          Meet Our Team
        </h1>
      </div>
      <div class="row vh-77 subContainer" style={{ flexWrap: "nowrap" }}>
        <div class="col-sm-6 col-lg-3 my-auto" style={{ width: "19em" }}>
          <div class="box shadow-sm p-4">
            <div class="image-wrapper mb-3">
              <img
                class="img-fluid"
                src={require("../images/Sourav.jpg")}
                alt="..."
              />
            </div>
            <div class="box-desc">
              <h5>Sourav Pahwa</h5>
              <p>Full Stack Developer</p>
            </div>
            <ul class="social">
              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/sourav-pahwa-93b4041b6/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.instagram.com/souravpahwa2861/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="mailto:sourav61pahwa@gmail.com"
                  bgColor="#dd4b39"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 my-auto" style={{ width: "19em" }}>
          <div class="box shadow-sm p-4">
            <div class="image-wrapper mb-3">
              <img
                class="img-fluid"
                src={require("../images/vidhi.jpeg")}
                alt="..."
              />
            </div>
            <div class="box-desc">
              <h5>Vidhi Rajvanshi</h5>
              <p>FrontEnd Developer</p>
            </div>
            <ul class="social">
              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/vidhi-rajvanshi-a2494b22a/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.instagram.com/vidhirajvanshi/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="mailto:vidhirajvanshi@gmail.com"
                  bgColor="#dd4b39"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 my-auto" style={{ width: "19em" }}>
          <div class="box shadow-sm p-4">
            <div class="image-wrapper mb-3">
              <img
                class="img-fluid"
                src={require("../images/samily.jpg")}
                alt="..."
                style={{ height: "13em", width: "13em" }}
              />
            </div>
            <div class="box-desc">
              <h5>Samily Saini</h5>
              <p>Designer</p>
            </div>
            <ul class="social">
              {/* <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/sourav-pahwa-93b4041b6/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li> */}
              <li>
                <SocialIcon
                  url="https://www.instagram.com/samilysaini/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="mailto:samilysaini07@gmail.com"
                  bgColor="#dd4b39"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 my-auto" style={{ width: "19em" }}>
          <div class="box shadow-sm p-4">
            <div class="image-wrapper mb-3">
              <img
                class="img-fluid"
                src={require("../images/tanvi.jpg")}
                alt="..."
              />
            </div>
            <div class="box-desc">
              <h5>Tanvi</h5>
              <p>Content Writer</p>
            </div>
            <ul class="social">
              <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/tanvi-janday-1b3b26207/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="https://www.instagram.com/tanvi.6286/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="mailto:sourav61pahwa@gmail.com"
                  bgColor="#dd4b39"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 my-auto" style={{ width: "19em" }}>
          <div class="box shadow-sm p-4">
            <div class="image-wrapper mb-3">
              <img
                class="img-fluid"
                src={require("../images/sunny.jpeg")}
                alt="..."
              />
            </div>
            <div class="box-desc">
              <h5>Sunny Bansal</h5>
              <p>Content Writer</p>
            </div>
            <ul class="social">
              {/* <li>
                <SocialIcon
                  url="https://www.linkedin.com/in/sourav-pahwa-93b4041b6/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li> */}
              <li>
                <SocialIcon
                  url="https://www.instagram.com/_sunny_bansal_/"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
              <li>
                <SocialIcon
                  url="mailto:sb765157@gmail.com"
                  bgColor="#dd4b39"
                  fgColor="white"
                  style={{ margin: 5 }}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
