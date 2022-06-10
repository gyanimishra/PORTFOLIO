import React from "react";
import "./About.css";
import aboutimg from "./logo/aboutreal.jpg";
import {FaLinkedinIn} from "react-icons/fa";
import {VscGithub  } from "react-icons/vsc";

const About = () => {
  return (
    <div className="about component__space" id="about">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img className="about__img"  src={aboutimg} alt="" />
          </div>
          <div className="col__2">
            <h1 className="about__heading"id="aboutme">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              When I started my coding journey it was amidst a lot of skepticism, as I was moving from compition-preparation-world to computer- science. I feel that it is never too late to start something you actually like. During my final year, I started learning coding from YouTube and documentations. After 6 months of coding, I was confident that I wanted to pursue coding as my career.
              </p>
              <p className="about__text p__color">
              To enhance my knowledge and get proper guidance, I joined Masai School. Currently, I am pursuing a Full Stack Web Development course and with the help of Masai School my journey has come a long way. I have a good command over programming language–JavaScript and I am also learning backend frameworks which include MERN stack.

              </p>
              <p className="about__text p__color">
              Apart from coding, I focus on physical and mental fitness for which I go to the gym, play cricket, and chess.

              </p>
              <div className="about__button d__flex align__items__center">
                  <a href="https://drive.google.com/file/d/1kZW03Ux4bQd4q_6LEqAe3r7YXjw6Y7lJ/view?usp=sharing" target="_blank"><button className="about btn pointer">Download Cv</button></a>
                  <a href="https://www.linkedin.com/in/prakash-gyanu/" target="_blank"><button className="about btn pointer"  >Hire Me</button></a>
              </div><div id='abouticon'>  
        
        <a href="https://github.com/gyanimishra" target="_blank" rel="noopener noreferrer"> <h3 id='git'><VscGithub style={{Color:"black",background:"black"}} /></h3></a>
      
          <a href= "https://www.linkedin.com/in/prakash-gyanu/"target="_blank" rel="noopener noreferrer"><h3 id='git'><FaLinkedinIn style={{Color:"black",background:"black"}} /></h3></a>
   </div>


            </div>
          </div>
        </div>
        
      </div>
     
                    
    </div>
  );
};

export default About;
