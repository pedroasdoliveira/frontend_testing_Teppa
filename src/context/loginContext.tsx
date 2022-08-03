import { useState, useContext, createContext, ReactNode } from "react";
import { LoginUser, LoginContextType } from "../types/interfaces";

// interface Prop {
//   children: ReactNode;
// }

// const loginContext = createContext<LoginContextType | null>(null);

// export const useLogin = () => useContext(loginContext);

// export const loginContextProvider = ({ children }: Prop) => {
//   const [loginValue, setLoginValue] = useState({
//     email: "",
//     password: "",
//   });

//   return (
//     <loginContext.Provider value={{loginValue}}>{children}</loginContext.Provider>
//   );
// };
