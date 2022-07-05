import React from "react";

export default function Language(props) {
  return (
    <li className="list__item">
      <p className="bold">{props.languageData.language}</p>
      <button
        type="button"
        className="delete--btn"
        onClick={(event) =>
          props.handleLanguageDelete(event, props.languageData.id)
        }
      >
        Delete
      </button>
      <p>{props.languageData.proficiency}</p>
    </li>
  );
}
