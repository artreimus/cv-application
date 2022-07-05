import React from "react";

export default function Project(props) {
  return (
    <div className="col display__container">
      <p className="bold">{props.project.projectName} </p>
      <button
        type="button"
        className="delete--btn"
        onClick={(event) => props.handleProjectDelete(event, props.project.id)}
      >
        Delete
      </button>
      <p className="justify">{props.project.projectDescription}</p>
      <div className="delete__container"></div>
    </div>
  );
}
