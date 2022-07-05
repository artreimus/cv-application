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
        linkedin: "https://linkedin.com/in/arthur-lechoncito/",
        github: "https://github.com/artreimus",
      },
      aboutMe: "",
      educationData: {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        id: nanoid(),
      },
      projectData: {
        projectName: "",
        projectDescription: "",
        id: nanoid(),
      },
      skills: {
        hardSkill: "",
        softSkill: "",
      },
      hardSkillData: {
        hardSkill: "",
        id: nanoid(),
      },
      softSkillData: {
        softSkill: "",
        id: nanoid(),
      },
      languageData: {
        language: "",
        proficiency: "",
        id: nanoid(),
      },

      displayPersonalData: {
        name: "Arthur Reimus D. Lechoncito",
        title: "Computer Engineer",
        email: "arthurlechoncito@gmail.com",
        contactNumber: "(+639)287295730",
        address:
          "#383, Phase 4, Northern Hills, San Rafael, Tarlac City, Philippines",
        linkedin: "https://linkedin.com/in/arthur-lechoncito/",
        github: "https://github.com/artreimus",
      },
      displayAboutMe:
        "I am a highly motivated Computer Engineering student who has proficient knowledge in the technological fields of embedded systems, web development, artificial intelligence, and Web 3.0. I am looking for a technology company where I could add value and join a strong team of developers where I could use my skills to help develop highly scalable enterprise-level applications.",
      allEducations: [
        {
          school: "Mapua University",
          degree: "Computer Engineer",
          startDate: "2018",
          endDate: "2022",
          id: nanoid(),
        },
        {
          school: "Holy Angel University",
          degree: "Science Technology Engineering and Mathematics (STEM)",
          startDate: "2016",
          endDate: "2018",
          id: nanoid(),
        },
      ],
      allProjects: [
        {
          projectName: "Tongue Print Biometric System",
          projectDescription:
            "The senior thesis at Mapua University requires students to publish a study on anovel research topic. My thesis partner and I created a biometric system that can recognize the users by scanning their tongues where the accuracy rate of the prototype was 90.33%, and our study won the second runner-up for best thesis in the CPE Department.",
          id: nanoid(),
        },
        {
          projectName: "Automated Greenhouse with a compost bin",
          projectDescription:
            "The Senior engineering design at Mapua University requires students to create a unique design circuit on an 8-bit microcontroller. I created a design circuit for an automated greenhouse with a compost bin that can monitor and automatically adjust the environment of the greenhouse and the compost bin. The system also collects data and saves it on its local storage and on the Internet of Things cloud. ",
          id: nanoid(),
        },
        {
          projectName: "The Odin Project",
          projectDescription:
            "The Odin Project is an open-source coding curriculum that focuses on web development. The curriculum contained several exercises and projects, such as coding challenges and the creation of interactive websites. I have completed the front-end lessons and am currently taking the backend Javascript curriculum.",
          id: nanoid(),
        },
      ],
      allHardSkills: [
        {
          hardSkill: "Embedded Systems",
          id: nanoid(),
        },
        {
          hardSkill: "Front End Web Development",
          id: nanoid(),
        },
        {
          hardSkill: "User Experience Design",
          id: nanoid(),
        },
        {
          hardSkill: "Machine Learning",
          id: nanoid(),
        },
        {
          hardSkill: "Computer Vision",
          id: nanoid(),
        },
        {
          hardSkill: "Networking",
          id: nanoid(),
        },
        {
          hardSkill: "Web 3 Research",
          id: nanoid(),
        },
      ],
      allSoftSkills: [
        {
          softSkill: "Entrepreneurship",
          id: nanoid(),
        },
        {
          softSkill: "Leadership and Management",
          id: nanoid(),
        },
        {
          softSkill: "Problem Solving",
          id: nanoid(),
        },
        {
          softSkill: "Time Management",
          id: nanoid(),
        },
        {
          softSkill: "Creativity",
          id: nanoid(),
        },
      ],
      allLanguages: [
        {
          language: "English",
          proficiency: "Full Professional Proficiency",
          id: nanoid(),
        },
        {
          language: "Filipino",
          proficiency: "Native or Bilingual Proficiency",
          id: nanoid(),
        },
        {
          language: "Chinese",
          proficiency: "Limited Proficiency",
          id: nanoid(),
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
    const { name, value } = event.target;
    this.setState((prevState) => ({
      [name]: value,
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

  handleHardSkillChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      hardSkillData: {
        ...prevState.hardSkillData,
        [name]: value,
      },
    }));
  };

  handleSoftSkillChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      softSkillData: {
        ...prevState.softSkillData,
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

  handleHardSkillSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allHardSkills: this.state.allHardSkills.concat(this.state.hardSkillData),
    }));
  };

  handleSoftSkillSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      allSoftSkills: this.state.allSoftSkills.concat(this.state.softSkillData),
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

  handleEducationDelete = (event, id) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      allEducations: prevState.allEducations.filter(
        (education) => education.id !== id
      ),
    }));
  };

  handleProjectDelete = (event, id) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      allProjects: prevState.allProjects.filter((project) => project.id !== id),
    }));
  };

  handleHardSkillDelete = (event, id) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      allHardSkills: prevState.allHardSkills.filter(
        (hardSkill) => hardSkill.id !== id
      ),
    }));
  };

  handleSoftSkillDelete = (event, id) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      allSoftSkills: prevState.allSoftSkills.filter(
        (softSkill) => softSkill.id !== id
      ),
    }));
  };

  handleLanguageDelete = (event, id) => {
    event.stopPropagation();
    this.setState((prevState) => ({
      allLanguages: prevState.allLanguages.filter(
        (language) => language.id !== id
      ),
    }));
  };

  render() {
    // console.log(this.state.personalData);
    console.log(this.state.displayPersonalData);
    console.log(this.state.displayPersonalData.email);

    return (
      <div className="row main__container">
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
          <ProjectForm
            projectData={this.state.projectData}
            handleProjectChange={this.handleProjectChange}
            handleProjectSubmit={this.handleProjectSubmit}
          />
          <HardSkillForm
            hardSkillData={this.state.hardSkillData}
            handleHardSkillChange={this.handleHardSkillChange}
            handleHardSkillSubmit={this.handleHardSkillSubmit}
          />
          <SoftSkillForm
            softSkillData={this.state.softSkillData}
            handleSoftSkillChange={this.handleSoftSkillChange}
            handleSoftSkillSubmit={this.handleSoftSkillSubmit}
          />
          <LanguageForm
            languageData={this.state.languageData}
            handleLanguageChange={this.handleLanguageChange}
            handleLanguageSubmit={this.handleLanguageSubmit}
          />
        </div>
        <Resume
          data={this.state}
          handleEducationDelete={this.handleEducationDelete}
          handleProjectDelete={this.handleProjectDelete}
          handleHardSkillDelete={this.handleHardSkillDelete}
          handleSoftSkillDelete={this.handleSoftSkillDelete}
          handleLanguageDelete={this.handleLanguageDelete}
        />
      </div>
    );
  }
}
