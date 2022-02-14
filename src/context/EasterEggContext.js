import React, { useState } from 'react';

const defaultState = {
  easterEgg: false,
  toggleEasterEgg: () => {},
};

const EasterEggContext = React.createContext(defaultState);

const EasterEggProvider = ({ children }) => {
  const [easterEgg, setEasterEgg] = useState(false);

  const toggleEasterEgg = () => {
    const easterEggState = !easterEgg;
    setEasterEgg(easterEggState);
  };

  return (
    <EasterEggContext.Provider
      value={{
        easterEgg,
        toggleEasterEgg,
      }}
    >
      {children}
    </EasterEggContext.Provider>
  );
};

export default EasterEggContext;
export { EasterEggProvider };
