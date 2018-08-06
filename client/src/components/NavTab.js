import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/about"
        className={
          window.location.pathname === "/about" ? "nav-link active" : "nav-link"
        }
      >
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/blog"
        className={
          window.location.pathname === "/blog" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Contact
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/menu"
        className={
          window.location.pathname === "/menu" ? "nav-link active" : "nav-link"
        }
      >
        Menu
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/events"
        className={
          window.location.pathname === "/events"
            ? "nav-link active"
            : "nav-link"
        }
      >
        Events
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/form"
        className={
          window.location.pathname === "/form" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </Link>
    </li>
  </ul>
);

export default NavTabs;
