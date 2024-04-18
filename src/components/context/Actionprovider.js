import { createContext, useState } from "react";

export const Appaction = createContext();
export const ActionProvider = ({ children }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const loginModelHnadler = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  const confirmModelHnadler = () => {
    setIsConfirmOpen(!isConfirmOpen);
  };
  // console.log("open??");
  return (
    <Appaction.Provider
      value={{
        isLoginOpen,
        loginModelHnadler,
        isConfirmOpen,
        confirmModelHnadler,
      }}
    >
      {children}
    </Appaction.Provider>
  );
};
