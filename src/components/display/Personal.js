import React from "react";

export default function Personal(props) {
  return (
    <div className="personal__info">
      <div className="personal__info--header">
        <p className="user__name">{props.displayPersonalData.name}</p>
        <p className="user__title">{props.displayPersonalData.title}</p>
      </div>
      <hr className="divider"></hr>
      <div className="personal__info--main">
        <div className="col">
          <table cellSpacing={1}>
            <tbody>
              <tr className="info">
                <td className="bold">Email:</td>
                <td>{props.displayPersonalData.email}</td>
              </tr>
              <tr className="info">
                <td className="bold">Phone:</td>
                <td>{props.displayPersonalData.contactNumber}</td>
              </tr>
              <tr className="info">
                <td className="bold">Address:</td>
                <td> {props.displayPersonalData.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col">
          <table cellSpacing={1}>
            <tbody>
              <tr className="info">
                <td className="bold">GitHub:</td>
                <td>{props.displayPersonalData.github}</td>
              </tr>
              <tr className="info">
                <td className="bold table__title">LinkedIn:</td>
                <td>
                  <a
                    className="info"
                    href="https://github.com/"
                    target="_blank"
                  >
                    {props.displayPersonalData.linkedin}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
