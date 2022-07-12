import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";

function Header(props) {
  const theme = props.theme;
  props.setTheme("dark");
  localStorage.setItem("theme", "dark");

  const link = "/home";

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <span style={{ color: theme.text }}></span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span style={{ color: theme.text }}></span>
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="xp"
                to="/skills"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeStyle={{ fontWeight: "bold" }}
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experiences
              </NavLink>
            </li>
            {/* <button {...styles} onClick={changeTheme}>
              {icon}
            </button> */}
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
