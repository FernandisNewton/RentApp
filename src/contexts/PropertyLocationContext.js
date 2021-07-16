import React, { useState, createContext } from "react";
export const PropertyLocationContext = createContext();

export const PropertyLocationProvider = (props) => {
  const [propAddress, setPropAddress] = useState({});

  return (
    <PropertyLocationContext.Provider value={[propAddress, setPropAddress]}>
      {props.children}
    </PropertyLocationContext.Provider>
  );
};
