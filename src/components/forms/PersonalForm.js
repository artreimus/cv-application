import React from "react";

export default function PersonalForm(props) {
  let buttonClass = () => {
    return props.displayPersonalData.name !== ""
      ? "button__edit"
      : "button__submit";
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={props.handlePersonalSubmit}>
        <h3 className="form--title bold">Personal</h3>
        <input
          type="text"
          placeholder="Name"
          className="form--input"
          name="name"
          onChange={props.handlePersonalChange}
          value={props.personalData.name}
          required
        />
        <input
          type="text"
          placeholder="Job Title"
          className="form--input"
          name="title"
          onChange={props.handlePersonalChange}
          value={props.personalData.title}
        />
        <input
          type="email"
          placeholder="Email address"
          className="form--input"
          name="email"
          onChange={props.handlePersonalChange}
          value={props.personalData.email}
        />
        <input
          type="tel"
          placeholder="Contact Number"
          className="form--input"
          name="contactNumber"
          onChange={props.handlePersonalChange}
          value={props.personalData.contactNumber}
        />
        <input
          type="text"
          placeholder="Address"
          className="form--input"
          name="address"
          onChange={props.handlePersonalChange}
          value={props.personalData.address}
        />
        <input
          type="url"
          placeholder="LinkedIn"
          className="form--input"
          name="linkedin"
          onChange={props.handlePersonalChange}
          value={props.personalData.linkedin}
        />
        <input
          type="url"
          placeholder="GitHub"
          className="form--input"
          name="github"
          onChange={props.handlePersonalChange}
          value={props.personalData.github}
        />
        <button type="submit" className={buttonClass()}>
          {props.displayPersonalData.name !== "" ? "Edit" : "Submit"}
        </button>
      </form>
    </div>
  );
}
