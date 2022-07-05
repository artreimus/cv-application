import React from "react";

export default function HardSkillForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleHardSkillSubmit}>
        <h3 className="form--title bold">Hard Skill</h3>
        <input
          type="text"
          placeholder="Hard Skill"
          className="form--input"
          name="hardSkill"
          onChange={props.handleHardSkillChange}
          value={props.hardSkillData.hardSkill}
          required
        />
        <button type="submit" className="button__submit">
          Add
        </button>
      </form>
    </div>
  );
}
