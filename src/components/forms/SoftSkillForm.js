import React from "react";

export default function SoftSkillForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleSoftSkillSubmit}>
        <input
          type="text"
          placeholder="Soft Skill"
          className="form--input"
          name="softSkill"
          onChange={props.handleSkillsChange}
          value={props.skills.softSkill}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
