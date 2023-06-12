import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const ProvideAuth = ({children}) => {
    const [isLoggedIn , setIsloggedIn] = useState(false);
    return (
        <AuthContext.Provider value={{isLoggedIn , setIsloggedIn}}>{children}</AuthContext.Provider>
    )
}
