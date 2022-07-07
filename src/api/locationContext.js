import { createContext } from "react";

const LocationContext = createContext();

export const LocationContextProvider = (props) => {
  const saveLocationHandler = (locationObj) => {
    localStorage.setItem("location", JSON.stringify(locationObj));
  };

  const context = {
    saveLocation: saveLocationHandler,
  };

  return (
    <LocationContext.Provider value={context}>
      {props.children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
