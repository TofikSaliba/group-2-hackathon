import React from "react";

interface SpinnerProps {
    isSpinning: boolean;
}
const Spinner = ({ isSpinning }: SpinnerProps) => {
    return <>{isSpinning && <div>Spinner</div>}</>;
};

export default Spinner;
