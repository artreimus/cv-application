import React from "react";

export default function About(props) {
  let buttonClass = () => {
    return props.displayAboutMe !== "" ? "button__edit" : "button__submit";
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handleAboutSubmit}>
        <h3 className="form--title bold">About Me</h3>
        <textarea
          placeholder="Project Description"
          className="form--input textarea"
          name="aboutMe"
          onChange={props.handleAboutChange}
          value={props.aboutMe}
        ></textarea>
        <button type="submit" className={buttonClass()}>
          {props.displayAboutMe !== "" ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}
