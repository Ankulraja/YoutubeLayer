import React, { createContext, useContext, useState } from "react";

const AllSchemaId = createContext();

export const AllSchemaIdProvider = ({ children }) => {
  const [ytSchemaId, setYtSchemaId] = useState(null);
  return (
    <AllSchemaId.Provider value={{ ytSchemaId, setYtSchemaId }}>
      {children}
    </AllSchemaId.Provider>
  );
};

export const useID = () => {
  const context = useContext(AllSchemaId);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
