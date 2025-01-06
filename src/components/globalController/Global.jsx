import React, { createContext, useState } from "react";

export const GlobalController = createContext();

export const Global = ({children}) => {
  const [addMovie, setAddMovie] = useState("");
  const [addTheatre, setAddTheatre] = useState("");
  const [addReport, setAddReport] = useState("");
  const [addClass, setAddClass] = useState("");
  return (
    <GlobalController.Provider
      value={{ addMovie, setAddMovie, addTheatre, setAddTheatre, addReport, setAddReport, addClass, setAddClass, }}
    >
      {children}
    </GlobalController.Provider>
  );
};

export default Global;
