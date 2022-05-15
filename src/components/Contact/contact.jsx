import React from 'react';
import './contact.css'
const contact=()=>{

    return (
        <div className="contact-form">
        {/* left side copy and paste from work section */}
        <div className="w-left">
          <div className="awesome">
            <span>Get in Touch</span>
           <br/>
            <span> Contact me</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>


        <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button" style={{width:'7rem'}}/>
          <div
            className="blur c-blur1"
            style={{ background: "#C1F5FF" }}
          ></div>
        </form>
      </div>
    </div>
        
    )
}
export default contact;