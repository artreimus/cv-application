import React from "react";

export default function Education(props) {
  return (
    <div className="">
      <p className="">{props.education.school}</p>
      <p className="">{props.education.degree}</p>
      <p className="">{props.education.startDate}</p>
      <p className="">{props.education.endDate}</p>
    </div>
  );
}
