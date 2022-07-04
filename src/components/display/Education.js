import React from "react";

export default function Education(props) {
  return (
    <div className="col">
      <p>
        <span>{props.education.startDate}</span> -{" "}
        <span>{props.education.endDate}</span>
      </p>
      <p className="bold">{props.education.school}</p>
      <p className="italic">{props.education.degree}</p>
    </div>
  );
}
