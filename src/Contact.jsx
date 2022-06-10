import React from 'react';
import './Contact.css';

import emailjs from 'emailjs-com'
import { FaEnvelope,FaPhoneAlt,FaGithubSquare ,FaLinkedinIn,FaFacebookF} from "react-icons/fa";

function Contact() {
    function sendEmail(e)
    {
        e.preventDefault();
        emailjs.sendForm('service_lsdascp','template_v5cyvbb',e.target,'jp_skVRL5Jk2lQtx6').then((res)=>{
            console.log(res);
             alert("Thank u to Connecting with Gyan,")

        }).catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="contact component__space" id="Contact" >
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for freelance work. Connect with me :</p>
                         
                        </div>
                        <div className="input__box">
                           <form onSubmit={sendEmail}>
                           <input type="text" className="contact name" placeholder="Your name *" id='name' name='name'/>
                           <input type="text" className="contact email" placeholder="Your Email *"name='user_email' />
                           <input type="text" className="contact subject" placeholder="Write a Subject" id='subject'/>
                           <textarea name="message" id="message" placeholder="Write Your message" ></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div  id='idea'>
                   <div id='inIdea'>
                   <h1>Have an idea?</h1>
                    <h3>Let's connect!</h3>

                    <div id='headergiticon1'>
                   <h3> < FaEnvelope style={{marginRight:"20px"}} />gyan12081997@.gmailcom </h3>
                   <h3> <FaPhoneAlt style={{marginRight:"20px"}} />9696876187 </h3>
                    </div>

                <div id='headergiticon'>  
                     <a href="https://github.com/gyanimishra" target="_blank" rel="noopener noreferrer"> <h3 id='git'><FaGithubSquare  /></h3></a>
                    <a href="https://www.facebook.com/home.php" target="_blank" rel="noopener noreferrer">  <h3 id='git'><FaFacebookF /></h3></a>
                       <a href= "https://www.linkedin.com/in/prakash-gyanu/"target="_blank" rel="noopener noreferrer"><h3 id='git'><FaLinkedinIn/></h3></a>
                </div>
                    
                   </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact