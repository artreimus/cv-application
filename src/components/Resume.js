import React from "react";
import Education from "./display/Education";
import Project from "./display/Project";
import HardSkill from "./display/HardSkill";
import SoftSkill from "./display/SoftSkill";
import Language from "./display/Language";
import Personal from "./display/Personal";

export default function Resume(props) {
  const educationElement = props.data.allEducations.map((education, index) => {
    return (
      <Education
        education={education}
        key={education.id}
        handleEducationDelete={props.handleEducationDelete}
      />
    );
  });

  const projectElement = props.data.allProjects.map((project, index) => {
    return (
      <Project
        project={project}
        key={project.id}
        handleProjectDelete={props.handleProjectDelete}
      />
    );
  });

  const hardSkillsElement = props.data.allHardSkills.map((hardSkill, index) => {
    return (
      <HardSkill
        hardSkill={hardSkill}
        key={hardSkill.id}
        handleHardSkillDelete={props.handleHardSkillDelete}
      />
    );
  });

  const softSkillsElement = props.data.allSoftSkills.map((softSkill, index) => {
    return (
      <SoftSkill
        softSkill={softSkill}
        key={softSkill.id}
        handleSoftSkillDelete={props.handleSoftSkillDelete}
      />
    );
  });

  const languageElement = props.data.allLanguages.map((language, index) => {
    return (
      <Language
        languageData={language}
        key={language.id}
        handleLanguageDelete={props.handleLanguageDelete}
      />
    );
  });

  let isColOneEmpty = () => {
    if (
      projectElement.length !== 0 ||
      educationElement.length !== 0 ||
      props.data.displayAboutMe !== ""
    ) {
      return false;
    } else return true;
  };

  let isColTwoEmpty = () => {
    if (
      hardSkillsElement.length !== 0 ||
      softSkillsElement.length !== 0 ||
      languageElement.length !== 0
    ) {
      return false;
    } else return true;
  };

  return (
    <div className="resume">
      <section className="header">
        <div className="col">
          <Personal displayPersonalData={props.data.displayPersonalData} />
        </div>
      </section>
      <section className="main row">
        {!isColOneEmpty() && (
          <div className="main__col--one col">
            {props.data.displayAboutMe !== "" && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">person</span> About
                  Me
                </h2>
                <hr className="divider"></hr>
                <p className="info justify">{props.data.displayAboutMe}</p>
              </div>
            )}
            {educationElement.length !== 0 && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">school</span>
                  Education
                </h2>
                <hr className="divider"></hr>
                {educationElement}
              </div>
            )}
            {projectElement.length !== 0 && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">palette</span>
                  Projects
                </h2>
                <hr className="divider"></hr>
                {projectElement}
              </div>
            )}
          </div>
        )}
        {!isColTwoEmpty() && (
          <div className="main__col--two col">
            {hardSkillsElement.length !== 0 && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">settings</span>Hard
                  Skills
                </h2>
                <hr className="divider"></hr>
                <ul className="main__list">{hardSkillsElement}</ul>
              </div>
            )}
            {softSkillsElement.length !== 0 && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">
                    settings_suggest
                  </span>
                  Soft Skills
                </h2>
                <hr className="divider"></hr>
                <ul className="main__list">{softSkillsElement}</ul>
              </div>
            )}
            {languageElement.length !== 0 && (
              <div className="col">
                <h2 className="main__title">
                  <span className="material-symbols-rounded">translate</span>
                  Languages
                </h2>
                <hr className="divider"></hr>
                <ul className="main__list">{languageElement}</ul>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}
