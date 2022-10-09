import React from "react";
import { NavLink } from "react-router-dom";
import Mailto from "./utilities/Mailto";
import '../styles/circle.scss'
export default function Navbar() {
  return (
    <div>
     
      <nav className="nav">

        <NavLink to="/home" className="nav--item"> ■ Home </NavLink>
        <NavLink to="/education" className="nav--item"> ■ Education & Skills </NavLink>
        <NavLink to="/projects" className="nav--item">■ Projects </NavLink>

      </nav>
      <Mailto email="elenazafe@gmail.com" >
        <div className="circulito-rodante">
          <svg xmlns="http://www.w3.org/2000/svg" xmlLang="en" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500">
            <defs>
              <path id="textcircle" d="M250,400
                 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z" transform="rotate(12,250,250)" />
            </defs>
            <g className="textcircle">
              <text textLength={"942"}>
                <textPath
                  xlinkHref="#textcircle"
                  aria-label="CSS & SVG are awesome"
                  textLength="942">
                  CONTACT ME | CONTACT ME |&#160;
                </textPath>
              </text>
            </g>
          </svg>
        </div>{/*circulito rodante */}
      </Mailto>
    </div>
  );
}
