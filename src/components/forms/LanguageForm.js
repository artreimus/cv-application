import React from "react";

export default function LanguageForm(props) {
  return (
    <div className="form-container" onSubmit={props.handleLanguageSubmit}>
      <form className="form">
        <input
          type="text"
          placeholder="Language"
          className="form--input"
          name="language"
          onChange={props.handleSkillsChange}
          value={props.skills.language}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
