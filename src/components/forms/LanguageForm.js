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
          onChange={props.handleLanguageChange}
          value={props.languageData.language}
          required
        />
        <select
          name="proficiency"
          className="form--input"
          value={props.languageData.proficiency}
          onChange={props.handleLanguageChange}
          required
        >
          <option value="">Select Profiency</option>
          <option value="Native or Bilingual Proficiency">
            Native or Bilingual Proficiency
          </option>
          <option value="Full Professional Proficiency">
            Full Professional Proficiency
          </option>
          <option value="Limited Proficiency">Limited Proficiency</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
