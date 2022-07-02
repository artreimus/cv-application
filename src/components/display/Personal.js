import React from "react";

export default function Personal(props) {
  return (
    <div className="personal__info">
      <div className="personal__info--header personal--info">
        <p className="personal__info--name">{props.personalData.name}</p>
        <p className="personal__info--title">{props.personalData.title}</p>
      </div>
      <hr></hr>
      <div className="info">
        <div className="col">
          <p className="info ">
            <span>Email:</span> {props.personalData.email}
          </p>
          <p className="info">
            <span>Phone: </span>
            {props.personalData.contactNumber}
          </p>
          <p className="info">
            <span>Address: </span>
            {props.personalData.address}
          </p>
        </div>
        <div className="col">
          <a className="info">
            <span>GitHub:</span>
            {props.personalData.github}
          </a>
          <a className="info">
            <span>LinkedIn:</span> {props.personalData.linkedin}
          </a>
        </div>
      </div>
    </div>
  );
}
