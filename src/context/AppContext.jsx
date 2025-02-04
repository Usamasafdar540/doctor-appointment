import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

// Create the context
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const value = {
    doctors,
    currencySymbol,
  };

  return (
    // Pass the value to the provider so that children can consume it
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
