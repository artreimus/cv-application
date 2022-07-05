import React from "react";

export default function Education(props) {
  return (
    <div className="col display__container">
      <p>
        <span>{props.education.startDate}</span> -{" "}
        <span>{props.education.endDate}</span>
      </p>
      <p className="bold">{props.education.school}</p>
      <p className="italic">{props.education.degree}</p>
      <button
        type="button"
        className="delete--btn"
        onClick={(event) =>
          props.handleEducationDelete(event, props.education.id)
        }
      >
        Delete
      </button>
    </div>
  );
}
