import React from 'react';
import './experience.css';

const experience = ()=> {
return(
        <div className="experience" id='experience'>
          <div className="achievement">
            {/* darkMode */}
            <div className="circle">3+</div>
            <span>years </span>
            <span>Experience</span>
          </div>
          <div className="achievement">
            <div className="circle">10+</div>
            <span>completed </span>
            <span>Projects</span>
          </div>
          <div className="achievement">
            <div className="circle">1+</div>
            <span>companies </span>
            <span>Work</span>
          </div>
        </div>
      )


}
export default experience;