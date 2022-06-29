import React from "react";
import { usePreferences } from "../../context/Preferences.context";
import "./originTitleStyle.css";

const OriginTitle = () => {
    const { selectedRegion } = usePreferences();

    return <div className="origin-title">{selectedRegion.regionName}</div>;
};

export default OriginTitle;
