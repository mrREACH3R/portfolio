import React from "react";
import './navBar.css'
const navBar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shubham</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
            <li>
                Home
            </li>
            <li>
             Experience
            </li>
            <li>
              
                Protfolio
            </li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      
      </div>
    </div>
  );
};

export default navBar;