import React from "react";
// import "./UserInput.css";

const UserInput = (props) =>
{
    const style={ border: "1px solid #44f",
                  "border-radius": "5px",
                  margin: "10px auto",
                  padding: "3px",
                  width: "90%"
                }

    return (
        <input className="user-input"
               onChange={ props.change }
               value={ props.name }
               style={ style }
        />
    )
}
export default UserInput;
