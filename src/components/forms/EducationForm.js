import React from "react";

export default function EducationForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleEducationSubmit}>
        <h3 className="form--title bold">Education</h3>
        <input
          type="text"
          placeholder="School"
          className="form--input"
          name="school"
          onChange={props.handleEducationChange}
          value={props.educationData.school}
          required
        />
        <input
          type="text"
          placeholder="Degree"
          className="form--input"
          name="degree"
          onChange={props.handleEducationChange}
          value={props.educationData.degree}
          required
        />
        <input
          type=""
          placeholder="Start Year"
          className="form--input"
          name="startDate"
          minLength={4}
          onChange={props.handleEducationChange}
          value={props.educationData.startDate}
          required
        />
        <input
          type="number"
          placeholder="End Year"
          className="form--input"
          name="endDate"
          onChange={props.handleEducationChange}
          value={props.educationData.endDate}
          required
        />
        <button type="submit" className="button__submit">
          Add
        </button>
      </form>
    </div>
  );
}
