import React from "react";
import "./buttonStyle.css";

interface ButtonProps {
   
    btnText: string;
}

const Button = ({ btnText}:ButtonProps) => {
    return <div className="btn-container">{btnText}</div>;
};

export default Button;
