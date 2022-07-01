import React, { ReactNode, useContext, useState, useEffect } from "react";
import { Region } from "../types/types";
import regionsApi from "../apis/regionsApi";

interface PreferencesProviderProps {
  children: ReactNode;
}

interface PreferencesContextValue {
  allRegions: Region[];
  selectedRegion: Region;
  isHome: boolean;
  setIsHome: (isHome: boolean) => void;
  setSelectedRegion: (region: Region) => void;
}

const emptyPreferencesContextValue: PreferencesContextValue = {
  allRegions: [],
  selectedRegion: { language: "", regionName: "", stories: [], _id: "" },
  isHome: true,
  setIsHome: function (): void {},
  setSelectedRegion: function (): void {},
};

const PreferencesContext = React.createContext<PreferencesContextValue>(
  emptyPreferencesContextValue
);

export const usePreferences = () => useContext(PreferencesContext);

const PreferencesProvider = ({ children }: PreferencesProviderProps) => {
  const [allRegions, setAllRegions] = useState<Region[]>([]);
  const [isHome, setIsHome] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState<Region>(
    emptyPreferencesContextValue.selectedRegion
  );

  const getAllRegions = async () => {
    const { data } = await regionsApi.get("/getAllRegions");
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
    isHome,
    setIsHome,
  };

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export default PreferencesProvider;
