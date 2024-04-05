import React, { useEffect, useState, createContext, useContext } from "react";

//Internal import
// import {} from "../Utils/apiFeature";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const APP_NAME = "CLEVERCONVO";
  return (
    <StateContext.Provider value={{ APP_NAME }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
