import { createContext, useState } from "react";

export const Appaction = createContext();
export const ActionProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const loginModelHnadler = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <Appaction.Provider value={{ isLoginOpen, loginModelHnadler }}>
      {children}
    </Appaction.Provider>
  );
};
