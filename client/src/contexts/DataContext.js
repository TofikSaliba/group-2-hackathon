import React, { useState, useContext } from "react";

const DataContext = React.createContext();

export function useData() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isSpinning, setIsSpinning] = useState(true);

  const value = {
    currentUser,
    setCurrentUser,
    token,
    setToken,
    isSpinning,
    setIsSpinning,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export default DataProvider;
