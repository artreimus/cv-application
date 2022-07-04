import React from "react";

export default function About(props) {
  let buttonClass = () => {
    return props.displayAboutMe !== "" ? "button__edit" : "button__submit";
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleAboutSubmit}>
        <textarea
          placeholder="Project Description"
          className="form--input textarea"
          name="aboutMe"
          onChange={props.handleAboutChange}
          value={props.aboutMe}
          required
        ></textarea>
        <button type="submit" className={buttonClass()}>
          {props.displayAboutMe !== "" ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}
