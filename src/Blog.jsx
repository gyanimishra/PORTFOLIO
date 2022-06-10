import React from "react";
import "./Blog.css";
import Blog1 from './logo/blog1.webp';
import Blog2 from './logo/blog2.jpg';
import Blog3 from './logo/blog3.jpg';
import './Project.css'

function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">My Blogs</h1>
        <p className="heading p__color">
        Don’t try to plan everything out to the very last detail. I’m a big believer in just getting it out 
        </p>
        <p className="heading p__color">
        there: create a minimal viable product or website, launch it, and get feedback. 
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Pottery-Barn</h5>
                         <h4 className="project__text">My Thoughts While working On PotteryBarn.</h4>
                         <a href="https://medium.com/@gyan12081997/spareshub-com-clone-project-c4b4be3720ad" target='_blank'className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">SparesHub</h5>
                         <h4 className="project__text">My Thoughts While working On SparesHub.</h4>
                         <a href="https://medium.com/@gyan12081997/spareshub-com-clone-project-c4b4be3720ad" target='_blank'className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Blog3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Hindustan Times</h5>
                         <h4 className="project__text">My Thoughts While working On Hindustan Times.</h4>
                         <a href="https://medium.com/@gyan12081997/spareshub-com-clone-project-c4b4be3720ad" target='_blank' className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;