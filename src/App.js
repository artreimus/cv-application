import React, { Component } from "react";
import { nanoid } from "nanoid";
import EducationForm from "./components/forms/EducationForm";
import HardSkillForm from "./components/forms/HardSkillForm";
import SoftSkillForm from "./components/forms/SoftSkillForm";
import LanguageForm from "./components/forms/LanguageForm";
import ProjectForm from "./components/forms/ProjectForm";
import Resume from "./components/Resume";
import PersonalForm from "./components/forms/PersonalForm";
import AboutForm from "./components/forms/AboutForm";

//Media Queries
//Unique Key
//Delete button
//Conditional Rendering
//Local Storage

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      personalData: {
        name: "Arthur Reimus D. Lechoncito",
        title: "Computer Engineer",
        email: "arthurlechoncito@gmail.com",
        contactNumber: "(+639)287295730",
        address:
          "#383, Phase 4, Northern Hills, San Rafael, Tarlac City, Philippines",
        linkedin: "linked.com/in/arthur-lechoncito",
        github: "github.com/artreimus",
      },
      aboutMe:
        "I am a highly motivated Computer Engineering student who has proficient knowledge in the technological fields of embedded systems, web development, artificial intelligence, and Web 3.0. I am looking for a technology company where I could add value and join a strong team of developers where I could use my skills to help develop highly scalable enterprise-level applications.",
      educationData: {
        school: "Mapua University",
        degree: "Computer Engineer",
        startDate: "2018",
        endDate: "2022",
      },
      projectData: {
        projectName: "Tongue Print Biometric System",
        projectDescription:
          "The senior thesis at Mapua University requires students to publish a study on anovel research topic. My thesis partner and I created a biometric system that can recognize the users by scanning their tongues where the accuracy rate of the prototype was 90.33%, and our study won the second runner-up for best thesis in the CPE Department.",
      },
      skills: {
        hardSkill: "Soccer",
        softSkill: "Cooking",
      },
      languageData: {
        language: "English",
        proficiency: "",
      },

      displayPersonalData: {
        name: "",
        title: "",
        email: "",
        contactNumber: "",
        address: "",
        linkedin: "",
        github: "",
      },
      displayAboutMe: "",
      allEducations: [
        {
          school: "Mapua University",
          degree: "Computer Engineer",
          startDate: "2018",
          endDate: "2022",
        },
      ],
      allProjects: [
        {
          projectName: "Tongue Print Biometric System",
          projectDescription:
            "The senior thesis at Mapua University requires students to publish a study on anovel research topic. My thesis partner and I created a biometric system that can recognize the users by scanning their tongues where the accuracy rate of the prototype was 90.33%, and our study won the second runner-up for best thesis in the CPE Department.",
        },
        {
          projectName: "Automated Greenhouse with a compost bin",
          projectDescription:
            "The Senior engineering design at Mapua University requires students to create a unique design circuit on an 8-bit microcontroller. I created a design circuit for an automated greenhouse with a compost bin that can monitor and automatically adjust the environment of the greenhouse and the compost bin. The system also collects data and saves it on its local storage and on the Internet of Things cloud. ",
        },
        {
          projectName: "The Odin Project",
          projectDescription:
            "The Odin Project is an open-source coding curriculum that focuses on web development. The curriculum contained several exercises and projects, such as coding challenges and the creation of interactive websites. I have completed the front-end lessons and am currently taking the backend Javascript curriculum.",
        },
      ],
      allHardSkills: [
        "Embedded Systems",
        "Front End Web Development",
        "User Experience Design",
        "Machine Learning",
        "Computer Vision",
        "Networking",
        "Web 3 Research",
      ],
      allSoftSkills: [
        "Entrepreneurship",
        "Leadership and Management",
        "Problem Solving",
        "Time Management",
        "Creativity",
      ],
      allLanguages: [
        {
          language: "English",
          proficiency: "Full Professional Proficiency",
        },
        {
          language: "Filipino",
          proficiency: "Native or Bilingual Proficiency",
        },
        {
          language: "Chinese",
          proficiency: "Limited Proficiency",
        },
      ],
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
    const { value } = event.target;
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

  handleLanguageChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      languageData: {
        ...prevState.languageData,
        [name]: value,
      },
    }));
  };

  handlePersonalSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      displayPersonalData: {
        ...prevState.personalData,
      },
    }));
  };

  handleAboutSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      displayAboutMe: prevState.aboutMe,
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

  handleLanguageSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allLanguages: this.state.allLanguages.concat(this.state.languageData),
      languageData: {
        language: "",
        proficiency: "",
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

  render() {
    // console.log(this.state.personalData);
    console.log(this.state.displayPersonalData);

    return (
      <div className="row">
        <div className="col sidebar">
          <PersonalForm
            personalData={this.state.personalData}
            displayPersonalData={this.state.displayPersonalData}
            handlePersonalChange={this.handlePersonalChange}
            handlePersonalSubmit={this.handlePersonalSubmit}
          />
          <AboutForm
            aboutMe={this.state.aboutMe}
            displayAboutMe={this.state.displayAboutMe}
            handleAboutChange={this.handleAboutChange}
            handleAboutSubmit={this.handleAboutSubmit}
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
            languageData={this.state.languageData}
            handleLanguageChange={this.handleLanguageChange}
            handleLanguageSubmit={this.handleLanguageSubmit}
          />
          <ProjectForm
            projectData={this.state.projectData}
            handleProjectChange={this.handleProjectChange}
            handleProjectSubmit={this.handleProjectSubmit}
          />
        </div>
        <Resume data={this.state} />
      </div>
    );
  }
}
