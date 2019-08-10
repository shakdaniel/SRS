import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const [isToggle, setToggle] = useState(false);
  useEffect(() => {}, []);

  console.log(isToggle);
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact" onClick={() => setToggle(!isToggle)}>
        Contact
      </NavLink>
    </nav>
  );
};

export default MainNav;
