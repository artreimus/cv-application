import React from "react";

export default function Education(props) {
  return (
    <div className="">
      <p className="">{props.educationData.school}</p>
      <p className="">{props.educationData.degree}</p>
      <p className="">{props.educationData.startDate}</p>
      <p className="">{props.educationData.endDate}</p>
    </div>
  );
}
