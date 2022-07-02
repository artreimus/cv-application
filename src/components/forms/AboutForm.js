import React from "react";

export default function About(props) {
  return (
    <div className="form-container">
      <form className="form">
        <textarea
          placeholder="Project Description"
          className="form--input"
          name="aboutMe"
          onChange={props.handleAboutChange}
          value={props.aboutMe}
          required
        ></textarea>
      </form>
    </div>
  );
}
