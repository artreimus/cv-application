import React from "react";

export default function ProjectForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleProjectSubmit}>
        <h3 className="form--title bold">Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          className="form--input"
          name="projectName"
          onChange={props.handleProjectChange}
          value={props.projectData.projectName}
          required
        />
        <textarea
          placeholder="Project Description"
          className="form--input"
          name="projectDescription"
          onChange={props.handleProjectChange}
          value={props.projectData.projectDescription}
          required
        ></textarea>
        <button type="submit" className="button__submit">
          Add
        </button>
      </form>
    </div>
  );
}
