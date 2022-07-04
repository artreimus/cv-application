import React from "react";

export default function Language(props) {
  return (
    <li className="">
      <p className="bold">{props.languageData.language}</p>
      <p>{props.languageData.proficiency}</p>
    </li>
  );
}
