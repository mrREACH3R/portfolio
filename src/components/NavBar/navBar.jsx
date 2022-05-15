import React from "react";
import './navBar.css'
import Toogle from '../Toogle/toogle';
import { Link } from "react-scroll";
import experience from "../Experience/experience";
import Portfolio from "../Portfolio/portfolio";

const navBar = () => {
  return (
    <div className="n-wrapper" id="navBar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Shubham</div>
        <Toogle/>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{listStyleType:'none'}}>
          <Link to="navBar" spy={true} smooth={true}>
          <li>
                Home
            </li>

          </Link>
          <Link to="works" spy={true} smooth={true}>
            <li>
             Experience
            </li>
            </Link>
            <Link to="Portfolio" spy={true} smooth={true}>
            <li>
              
                Protfolio
            </li>
            </Link>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      
      </div>
    </div>
  );
};

export default navBar;