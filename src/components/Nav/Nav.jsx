import React from "react";
import logo from "../../assets/logo.png";
import { SiLeetcode } from "react-icons/si";
import {FaLinkedin,FaGithub,FaHackerrank} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
        </a>
      </div>
      <div className="m-9 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/mdirfanul/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/MdIrfan-ul/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <FaGithub/>
        </a>
        <a
          href="https://leetcode.com/u/MdIrfanullah/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://www.hackerrank.com/profile/mohamedirfan1720"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hackerrank"
        >
          <FaHackerrank/>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
