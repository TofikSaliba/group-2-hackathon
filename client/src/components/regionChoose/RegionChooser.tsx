import React from "react";
import Dropdown, { Option } from "react-dropdown";
import { usePreferences } from "../../context/Preferences.context";
import "react-dropdown/style.css";
import { Region } from "../../types/types";

const RegionChooser = () => {
    const { allRegions, selectedRegion, setSelectedRegion } = usePreferences();

    const getAllRegions = () =>
        allRegions.map((region: Region) => ({
            label: region.regionName,
            value: JSON.stringify(region),
        }));

    const onRegionChange = (selectedRegion: Option) => {
        setSelectedRegion(JSON.parse(selectedRegion.value));
    };

    return (
        <div className="selector-container">
            <h3 className="selector-label">Region</h3>
            <Dropdown
                options={getAllRegions()}
                onChange={onRegionChange}
                value={selectedRegion.regionName}
                placeholder="Select a region"
                className="language-chooser"
                menuClassName="languages-drop-down"
            />
        </div>
    );
};

export default RegionChooser;
