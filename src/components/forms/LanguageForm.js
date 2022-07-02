import React from "react";

export default function LanguageForm(props) {
  return (
    <div className="form-container">
      <form className="form">
        <input
          type="text"
          placeholder="Language"
          className="form--input"
          name="Language"
          onChange={props.handleSkillsChange}
          value={props.skills.language}
          required
        />
      </form>
    </div>
  );
}
