import React from "react";

export default function HardSkill(props) {
  return (
    <li className="list__item">
      <p> {props.hardSkill.hardSkill}</p>
      <button
        type="button"
        className="delete--btn delete__btn--skill"
        onClick={(event) =>
          props.handleHardSkillDelete(event, props.hardSkill.id)
        }
      >
        Delete
      </button>
    </li>
  );
}
