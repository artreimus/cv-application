import React from "react";

export default function ProjectForm(props) {
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Project Name"
          className="form--input"
          name="projectName"
          onChange={props.handleProjectChange}
          value={props.projectData.projectName}
          required
        />
        <input
          type="textarea"
          placeholder="Project Description"
          className="form--input"
          name="projectDescription"
          onChange={props.handleProjectChange}
          value={props.projectData.projectDescription}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
