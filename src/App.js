import React, { Component } from "react";
import EducationForm from "./components/forms/EducationForm";
import HardSkillForm from "./components/forms/HardSkillForm";
import SoftSkillForm from "./components/forms/SoftSkillForm";
import LanguageForm from "./components/forms/LanguageForm";
import ProjectForm from "./components/forms/ProjectForm";
import Resume from "./components/Resume";
import PersonalForm from "./components/forms/PersonalForm";
import AboutForm from "./components/forms/AboutForm";

//Canvas
//Delete button
//Scrolling
//Local Storage

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: "",
        title: "",
        email: "",
        contactNumber: "",
        address: "",
        linkedin: "",
        github: "",
      },
      aboutMe: "",
      educationData: {
        school: "Mapua University",
        degree: "Computer",
        startDate: "",
        endDate: "",
      },
      projectData: {
        projectName: "YES SER",
        projectDescription: "MAMA",
      },
      skills: {
        hardSkill: "Soccer",
        softSkill: "Cooking",
        language: "Chinese",
      },
      allEducations: [],
      allProjects: [],
      allHardSkills: [],
      allSoftSkills: [],
      allLanguages: [],
    };
  }

  handlePersonalChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      personalData: {
        ...prevState.personalData,
        [name]: value,
      },
    }));
  };

  handleAboutChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      aboutMe: value,
    }));
  };

  handleEducationChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      educationData: {
        ...prevState.educationData,
        [name]: value,
      },
    }));
  };

  handleProjectChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      projectData: {
        ...prevState.projectData,
        [name]: value,
      },
    }));
  };

  handleSkillsChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      skills: {
        ...prevState.skills,
        [name]: value,
      },
    }));
  };

  handleEducationSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allEducations: this.state.allEducations.concat(this.state.educationData),
      educationData: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    }));
  };

  handleProjectSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allProjects: this.state.allProjects.concat(this.state.projectData),
      projectData: {
        projectName: "",
        projectDescription: "",
      },
    }));
  };

  handleHardSkillSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allHardSkills: this.state.allHardSkills.concat(
        this.state.skills.hardSkill
      ),
      skills: {
        ...prevState.skills,
        hardSkill: "",
      },
    }));
  };

  handleSoftSkillSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allSoftSkills: this.state.allSoftSkills.concat(
        this.state.skills.softSkill
      ),
      skills: {
        ...prevState.skills,
        softSkill: "",
      },
    }));
  };

  handleLanguageSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allLanguages: this.state.allLanguages.concat(this.state.skills.language),
      skills: {
        ...prevState.skills,
        language: "",
      },
    }));
  };

  render() {
    console.log(this.state.personalData);
    console.log(this.state.skills);

    return (
      <div>
        <PersonalForm
          personalData={this.state.personalData}
          handlePersonalChange={this.handlePersonalChange}
        />
        <AboutForm
          aboutMe={this.state.aboutMe}
          handleAboutChange={this.handleAboutChange}
        />
        <EducationForm
          educationData={this.state.educationData}
          handleEducationChange={this.handleEducationChange}
          handleEducationSubmit={this.handleEducationSubmit}
        />
        <HardSkillForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
          handleHardSkillSubmit={this.handleHardSkillSubmit}
        />
        <SoftSkillForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
          handleSoftSkillSubmit={this.handleSoftSkillSubmit}
        />
        <LanguageForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
          handleLanguageSubmit={this.handleLanguageSubmit}
        />
        <ProjectForm
          projectData={this.state.projectData}
          handleProjectChange={this.handleProjectChange}
          handleProjectSubmit={this.handleProjectSubmit}
        />

        <Resume data={this.state} />
      </div>
    );
  }
}
