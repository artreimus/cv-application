import React from "react";

export default function Project(props) {
  return (
    <div className="">
      <p className="">{props.project.projectName}</p>
      <p className="">{props.project.projectDescription}</p>
    </div>
  );
}
