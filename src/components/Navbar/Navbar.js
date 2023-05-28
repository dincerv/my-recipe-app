import React from 'react';
import './Navbar.css';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList
    },
    {
      name: "Categories",
      path: "/categories",
      icon: faList
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: faList
    },
    {
      name: "Profile",
      path: "/profile",
      icon: faCog
    }
  ];

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
  }

  return (
    <>
      <nav className="navbar">
        <div className="logo">My Recipe App</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/favorites">Favorites</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
        <div onClick={toggleSidebar} className={`sidebar-btn ${showSidebar ? "active" : ""}`}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      {showSidebar && <Sidebar links={links} />}
    </>
  );
};

export default Navbar;
