import React from "react";
import "./buttonStyle.css";

const Button = ({ btnText }) => {
    return <div className="btn-container">{btnText}</div>;
};

export default Button;
