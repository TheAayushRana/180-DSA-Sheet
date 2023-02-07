import { createContext, useState } from "react";

const ManageContext = createContext();

export const ManageProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ManageContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ManageContext.Provider>
  );
};

export default ManageContext;
