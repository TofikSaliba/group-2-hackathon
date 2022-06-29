import React, { ReactNode, useContext, useState, useEffect } from "react";
import { Region } from "../types/types";
import regionsApi from "../apis/regionsApi";

interface PreferencesProviderProps {
    children: ReactNode;
}

interface PreferencesContextValue {
    allRegions: Region[];
    selectedRegion: Region;
    setSelectedRegion: (region: Region) => void;
}

const emptyPreferencesContextValue: PreferencesContextValue = {
    allRegions: [],
    selectedRegion: { language: "", regionName: "", stories: [], _id: "" },
    setSelectedRegion: function (): void {},
};

const PreferencesContext = React.createContext<PreferencesContextValue>(
    emptyPreferencesContextValue
);

export const usePreferences = () => useContext(PreferencesContext);

const PreferencesProvider = ({ children }: PreferencesProviderProps) => {
    const [allRegions, setAllRegions] = useState<Region[]>([]);
    const [selectedRegion, setSelectedRegion] = useState<Region>(
        emptyPreferencesContextValue.selectedRegion
    );

    const getAllRegions = async () => {
        const { data } = await regionsApi.get("/getAllRegions");
        console.log(data);
        setAllRegions(data);
        setSelectedRegion(data[0]);
    };

    useEffect(() => {
        getAllRegions();
    }, []);

    const value: PreferencesContextValue = {
        allRegions,
        selectedRegion,
        setSelectedRegion,
    };
    return (
        <PreferencesContext.Provider value={value}>
            {children}
        </PreferencesContext.Provider>
    );
};

export default PreferencesProvider;
