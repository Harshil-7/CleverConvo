import React, { useEffect, useState, createContext, useContext } from "react";

//Internal import
// import {} from "../Utils/apiFeature";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const isAuthenticated = false;
  return (
    <StateContext.Provider value={{ isAuthenticated }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
