import React from "react";

export default function SoftSkillForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleSoftSkillSubmit}>
        <h3 className="form--title bold">Soft Skill</h3>
        <input
          type="text"
          placeholder="Soft Skill"
          className="form--input"
          name="softSkill"
          onChange={props.handleSoftSkillChange}
          value={props.softSkillData.softSkill}
          required
        />
        <button type="submit" className="button__submit">
          Add
        </button>
      </form>
    </div>
  );
}
