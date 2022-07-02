import React from "react";

export default function SoftSkillForm(props) {
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Soft Skill"
          className="form--input"
          name="softSkill"
          onChange={props.handleSkillsChange}
          value={props.skills.softSkill}
          required
        />
      </form>
    </div>
  );
}
