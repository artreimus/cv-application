import React from "react";

export default function HardSkillForm(props) {
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Hard Skill"
          className="form--input"
          name="hardSkill"
          onChange={props.handleSkillsChange}
          value={props.skills.hardSkill}
          required
        />
      </form>
    </div>
  );
}
