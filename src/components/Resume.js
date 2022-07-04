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
    return <Language languageData={language} />;
  });

  return (
    <div className="resume">
      <section className="header">
        <div className="col">
          <Personal displayPersonalData={props.data.displayPersonalData} />
        </div>
      </section>
      <section className="main">
        <div className="col">
          <h2 className="main__title">
            <span className="material-symbols-rounded">person</span> About Me
          </h2>
          <hr className="divider"></hr>
          <p className="info justify">{props.data.displayAboutMe}</p>
        </div>
        <div className="col">
          <div className="col">
            <h2 className="main__title">
              <span className="material-symbols-rounded">school</span>Education
            </h2>
            <hr className="divider"></hr>
            {educationElement}
          </div>
          <div className="col">
            <h2 className="main__title">
              <span className="material-symbols-rounded">palette</span>Projects
            </h2>
            <hr className="divider"></hr>
            {projectElement}
          </div>
        </div>
        <div className="col">
          <div className="col">
            <h2 className="main__title">
              <span className="material-symbols-rounded">settings</span>Hard
              Skills
            </h2>
            <hr className="divider"></hr>
            <ul className="main__list">{hardSkillsElement}</ul>
          </div>
          <div className="col">
            <h2 className="main__title">
              <span className="material-symbols-rounded">settings_suggest</span>
              Soft Skills
            </h2>
            <hr className="divider"></hr>
            <ul className="main__list">{softSkillsElement}</ul>
          </div>
          <div className="col">
            <h2 className="main__title">
              <span className="material-symbols-rounded">translate</span>
              Languages
            </h2>
            <hr className="divider"></hr>
            <ul className="main__list">{languageElement}</ul>
          </div>
        </div>
      </section>
    </div>
  );
}
