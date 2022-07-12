import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="skills-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="main" id="skills">
        <SkillSection theme={theme} />
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}
