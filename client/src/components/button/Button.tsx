import React from "react";
import "./buttonStyle.css";

interface ButtonProps {
    btnText: string;
    onBtnClicked: () => void;
}

const Button = ({ btnText, onBtnClicked }: ButtonProps) => {
    return (
        <div className="btn-container" onClick={onBtnClicked}>
            {btnText}
        </div>
    );
};

export default Button;
