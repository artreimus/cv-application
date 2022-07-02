import React from "react";

export default function Personal(props) {
  return (
    <div className="">
      <p className="">{props.formData.name}</p>
      <p className="">{props.formData.email}</p>
      <p className="">{props.formData.contactNumber}</p>
      <a className="">{props.formData.linkedin}</a>
      <a className="">{props.formData.github}</a>
    </div>
  );
}
