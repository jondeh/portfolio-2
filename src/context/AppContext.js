import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [isLight, setIsLight] = useState(true);
  console.log("context", isLight)

  return (
    <AppContext.Provider
      value={{
        isLight,
        setIsLight,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}