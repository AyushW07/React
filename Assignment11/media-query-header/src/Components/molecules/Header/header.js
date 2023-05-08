import React, { useState } from "react";
import {FaBars, FaTimes } from "react-icons/fa";
import art from "./art.png"
import image from "./image.jpg";
import styles from "./header.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className={styles.nav}>
        <div className={styles.logo}>
          <img src={art} alt="logo" />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Videos</li>
            <li>Contacts</li>
            <li className={styles.active}>Login</li>
          </ul>
          <div className={styles.hamburger} onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.hero_image}>
          <img src={image} alt="image" />
        </div>
        <div className={styles.hero_content}>
          <div className={styles.hero_text}>
            <h1>Ichigo Kurosaki</h1>
            <p>He receives Soul Reaper powers after meeting Rukia Kuchiki, these powers come at the cost of her own, and as a result, he concedes to work as her stand-in, fighting to protect people from evil spirits called Hollows and sending good spirits, wholes, to a dimension known as the Soul Society.</p>
          </div>
        </div>
      </div>

      <div className={`${styles.sidebar} ${menuOpen ? styles.show : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Videos</li>
          <li>Contact</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
