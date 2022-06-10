import React from 'react'
import './RealProject.css'

import project1 from './logo/Pottery.gif'
import Project2 from './logo/Spareshub.gif';
import Project3 from './logo/Hindustan.gif';
import { FaGithubSquare } from "react-icons/fa";

function Project() {
  return (
    <div id='project1id' >
        <div id='project2id'>   <h1>Projects</h1>  </div>

        <div id='project3id'>

            <div id='project4id'>
                <img src={project1} alt="" />
                <p> I worked onSign Up & Log In (Using local storage)
Products Sort & Filter feature
Add to cart functionality
Home Page (with dynamic CSS)</p>
               <div id='techstack'> <p >Tech Stack : HTML | CSS | JAVASCRIPT | </p></div>


               <div id='divbtn'>
                 <a href="https://github.com/HarshVardhan-dev/Pottery-barn" target="_blank" rel="noopener noreferrer"> <span> <button id='btn11'><FaGithubSquare id='codeid'/>Code</button></span></a>
                 <a href="https://ephemeral-liger-c209b7.netlify.app/" target="_blank" rel="noopener noreferrer">  <button id='btn112'>Live</button></a>
               </div>


            </div>






            <div id='project4id'>
            <img src={Project2} alt="" />
            <p> I WORKED ON Sign Up & Log In (Using local storage)
User Authentication
Add to cart functionality (Using DOM)
Home Page (with dynamic CSS)
User Payment & Checkout feature</p>
<div id='techstack'> <p >Tech Stack : HTML | CSS | JAVASCRIPT | </p></div>


            
            <div id='divbtn'>
            <span> <button id='btn11'><FaGithubSquare id='codeid'/>Code</button></span>
            <a href="https://spareshub-clone.netlify.app/" target="_blank" rel="noopener noreferrer"> <button id='btn112'>Live</button></a>
                  
               </div>

            </div>


            <div id='project4id'>
            <img src={Project3} alt="" />
            <p>I worked on Use React-Redux
User Authentication
Siderbar (Using V-DOM)
Navbar (with dynamic CSS)
User Payment & Checkout feature</p>
            <div id='techstack'> <p>Tech Stack : React | Redux | Styled components | Material UI</p></div>


            
            <div id='divbtn'>
            <span> <button id='btn11'><FaGithubSquare id='codeid'/>Code</button></span>
                   <button id='btn112'>Live</button>
               </div>

            </div>





        </div>
      


           

    </div>
  );
}

export default Project;