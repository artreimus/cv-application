import React from "react";

export default function Project(props) {
  return (
    <div className="col">
      <p className="bold">{props.project.projectName}</p>
      <p className="justify">{props.project.projectDescription}</p>
    </div>
  );
}
