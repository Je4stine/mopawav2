import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [visitorCount, setVisitorCount] = useState([]);

  return (
    <AppContext.Provider value={{ visitorCount, setVisitorCount }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
