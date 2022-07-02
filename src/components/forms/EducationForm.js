import React from "react";

export default function EducationForm(props) {
  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleEducationSubmit}>
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
          type="date"
          placeholder="Start Date"
          className="form--input"
          name="startDate"
          onChange={props.handleEducationChange}
          value={props.educationData.startDate}
          required
        />
        <input
          type="date"
          placeholder="End Date"
          className="form--input"
          name="endDate"
          onChange={props.handleEducationChange}
          value={props.educationData.endDate}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
