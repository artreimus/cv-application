import React from "react";

export default function Personal(props) {
  let isTableOneEmpty = () => {
    if (
      props.displayPersonalData.email !== "" ||
      props.displayPersonalData.contactNumber !== "" ||
      props.displayPersonalData.address !== ""
    ) {
      return false;
    } else return true;
  };

  let isTableTwoEmpty = () => {
    if (
      props.displayPersonalData.linkedin !== "" ||
      props.displayPersonalData.github !== ""
    ) {
      return false;
    } else return true;
  };

  return (
    <div className="personal__info">
      <div className="personal__info--header">
        <p className="user__name">{props.displayPersonalData.name}</p>
        {props.displayPersonalData.title !== "" && (
          <p className="user__title">{props.displayPersonalData.title}</p>
        )}
      </div>
      <hr className="divider"></hr>
      <div className="personal__info--main row">
        <div className="col">
          {!isTableOneEmpty() && (
            <table cellSpacing={1} className="user__info">
              <tbody>
                {props.displayPersonalData.email !== "" && (
                  <tr className="info">
                    <td className="bold">Email:</td>
                    <td>{props.displayPersonalData.email}</td>
                  </tr>
                )}
                {props.displayPersonalData.contactNumber !== "" && (
                  <tr className="info">
                    <td className="bold">Phone:</td>
                    <td>{props.displayPersonalData.contactNumber}</td>
                  </tr>
                )}
                {props.displayPersonalData.address !== "" && (
                  <tr className="info">
                    <td className="bold">Address:</td>
                    <td> {props.displayPersonalData.address}</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
        <div className="col">
          {!isTableTwoEmpty() && (
            <table cellSpacing={1} className="user__info">
              <tbody>
                {props.displayPersonalData.github !== "" && (
                  <tr className="info">
                    <td className="bold">GitHub:</td>
                    <td>
                      <a
                        className="info"
                        href={`${props.displayPersonalData.github}`}
                        target="_blank"
                      >
                        {props.displayPersonalData.github}
                      </a>
                    </td>
                  </tr>
                )}
                {props.displayPersonalData.linkedin !== "" && (
                  <tr className="info">
                    <td className="bold table__title">LinkedIn:</td>
                    <td>
                      <a
                        className="info"
                        href={`${props.displayPersonalData.linkedin}`}
                        target="_blank"
                      >
                        {props.displayPersonalData.linkedin}
                      </a>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
