import React, {useContext} from "react";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  skillsSection,
  educationInfo,
  blogSection,
  bigProjects,
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewProject = bigProjects.display;
  const viewBlog = blogSection.display;

  return (
    <header className={isDark ? "dark-menu header" : "header"}>
      <a href="https://dongyu-kim.github.io/portfolio" className="logo">
        <img
          alt="떵유"
          src={require("../../assets/images/토끼떵유머리.png")}
        />
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label
        className="menu-icon"
        htmlFor="menu-btn"
        style={{color: "white"}}
      >
        <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
      </label>
      <ul className={isDark ? "dark-menu menu" : "menu"}>
        {viewSkills && (
          <li>
            <a href="#skills">소개</a>
          </li>
        )}
        {viewEducation && (
          <li>
            <a href="#education">교육</a>
          </li>
        )}
        {viewProject && (
          <li>
            <a href="#projects">프로젝트</a>
          </li>
        )}
        {viewBlog && (
          <li>
            <a href="#blogs">블로그</a>
          </li>
        )}
        <li>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <ToggleSwitch />
          </a>
        </li>
      </ul>
    </header>
  );
}
export default Header;
