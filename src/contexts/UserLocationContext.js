import React, { useState, createContext } from "react";
export const UserLocationContext = createContext();

export const UserLocationProvider = (props) => {
  const [address, setAddress] = useState({});
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <UserLocationContext.Provider
      value={[address, setAddress, errorMsg, setErrorMsg, loading, setLoading]}
    >
      {props.children}
    </UserLocationContext.Provider>
  );
};
