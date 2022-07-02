import React, { Component } from "react";
import Education from "./components/display/Education";
import Personal from "./components/display/Personal";
import EducationForm from "./components/forms/EducationForm";
import HardSkillForm from "./components/forms/HardSkillForm";
import SoftSkillForm from "./components/forms/SoftSkillForm";
import LanguageForm from "./components/forms/LanguageForm";
import ProjectForm from "./components/forms/ProjectForm";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      formData: {
        name: "",
        email: "",
        linkedin: "",
        github: "",
        contactNumber: "",
      },
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
      formData: {
        ...prevState.formData,
        [name]: value,
      },
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

  render() {
    console.log(this.state.projectData);
    return (
      <div>
        <div className="form-container">
          <form className="form">
            <input
              type="text"
              placeholder="Name"
              className="form--input"
              name="name"
              onChange={this.handlePersonalChange}
              value={this.state.formData.name}
              required
            />
            <input
              type="email"
              placeholder="Email address"
              className="form--input"
              name="email"
              onChange={this.handlePersonalChange}
              value={this.state.formData.email}
              required
            />
            <input
              type="url"
              placeholder="LinkedIn"
              className="form--input"
              name="linkedin"
              onChange={this.handlePersonalChange}
              value={this.state.formData.linkedin}
              required
            />
            <input
              type="url"
              placeholder="GitHub"
              className="form--input"
              name="github"
              onChange={this.handlePersonalChange}
              value={this.state.formData.github}
              required
            />
            <input
              type="tel"
              placeholder="Contact Number"
              className="form--input"
              name="contactNumber"
              onChange={this.handlePersonalChange}
              value={this.state.formData.contactNumber}
              required
            />
          </form>
        </div>
        <EducationForm
          educationData={this.state.educationData}
          handleEducationChange={this.handleEducationChange}
        />
        <HardSkillForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
        />
        <SoftSkillForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
        />
        <LanguageForm
          skills={this.state.skills}
          handleSkillsChange={this.handleSkillsChange}
        />
        <ProjectForm
          projectData={this.state.projectData}
          handleProjectChange={this.handleProjectChange}
        />
        <Personal formData={this.state.formData} />
        <Education educationData={this.state.educationData} />
      </div>
    );
  }
}
