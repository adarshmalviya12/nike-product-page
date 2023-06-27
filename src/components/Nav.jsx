import React from "react";

const Nav = () => {
 return (
  <div>
   <nav className="nav">
    <div className="logo">
     <img src="images/brand_logo.png" alt="logo" />
    </div>
    <ul className="navItems">
     <li className="navItem"> Menu</li>
     <li className="navItem">Lacation</li>
     <li className="navItem">Above</li>
     <li className="navItem">Contact</li>
    </ul>
    <button className="loginButton">Login</button>
   </nav>
  </div>
 );
};

export default Nav;
