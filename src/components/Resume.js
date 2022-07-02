import React from "react";
import Education from "./display/Education";
import Project from "./display/Project";
import HardSkill from "./display/HardSkill";
import SoftSkill from "./display/SoftSkill";
import Language from "./display/Language";
import Personal from "./display/Personal";

export default function Resume(props) {
  const educationElement = props.data.allEducations.map((education, index) => {
    return <Education education={education} />;
  });

  const projectElement = props.data.allProjects.map((project, index) => {
    return <Project project={project} />;
  });

  const hardSkillsElement = props.data.allHardSkills.map((hardSkill, index) => {
    return <HardSkill hardSkill={hardSkill} />;
  });

  const softSkillsElement = props.data.allSoftSkills.map((softSkill, index) => {
    return <SoftSkill softSkill={softSkill} />;
  });

  const languageElement = props.data.allLanguages.map((language, index) => {
    return <Language language={language} />;
  });

  return (
    <div className="resume">
      <section className="header">
        <div className="personal__info">
          <Personal personalData={props.data.personalData} />
        </div>
      </section>
      <section className="main">
        <div>{props.data.aboutMe}</div>
        <div className="col">
          <div className="education__info">{educationElement}</div>
          <div className="project__info">{projectElement}</div>
        </div>
        <div className="col">
          <div className="skills__hard">
            <ul>{hardSkillsElement}</ul>
          </div>
          <div className="skills__soft">
            <ul>{softSkillsElement}</ul>
          </div>
          <div className="skills__language">
            <ul>{languageElement}</ul>
          </div>
        </div>
      </section>
    </div>
  );
}
