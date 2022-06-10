
import "./Home.css";
import logo from "./logo/gyanlogo.png";
import image1 from './logo/gyanuwhite.jpg'
import Typical from 'react-typical'

function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
   
  return (
    <div className="home" id="Home">
      <div className="home__bg" >
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#about">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#project1id">
                <li className="nav__items mx__15">Projects</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
        
        </div>
      
 

     
        {/* HOME CONTENT */}
        <div className="container" style={{display:"flex"}}>
     
          
          <div className="home__content">
          
            <div className="home__meta">
             
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m GYAN PRAKASH MISHRA</h2>
              <h3 className="home__text sweet pz__10">FULL STACK MERN Developer.</h3>
            
            </div>
            <div id="typically">
       <h1 id="typicallyh1">
                         
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enthusiastic Dev 💻",
                                1000,
                                "Full Stack Mern Web Developer 🖥",
                                1000,
                                "Mern Stack Developer ",
                                1000,
                                "React/Redux Native Developer",
                                1000,
                            ]}
                            />
                        </h1>
       </div>

          </div>
          
          <div id="gyan-image1">
              <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;