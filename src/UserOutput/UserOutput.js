import React from "react";
import "./UserOutput.css";

const UserOutput = (props) =>
{
    return (
        <div className="output-div">
            <p>{ props.p1 }</p>
            <p>{ props.p2 }</p>
        </div>
    )
}

export default UserOutput;
