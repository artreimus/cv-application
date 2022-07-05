import React from "react";

export default function SoftSkill(props) {
  return (
    <li className="list__item">
      <p>{props.softSkill.softSkill}</p>
      <button
        type="button"
        className="delete--btn delete__btn--skill"
        onClick={(event) =>
          props.handleSoftSkillDelete(event, props.softSkill.id)
        }
      >
        Delete
      </button>
    </li>
  );
}
