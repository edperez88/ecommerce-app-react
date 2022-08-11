import { createContext, useState } from "react";

export const userContext = createContext()

export const UserContextProvider = ({children})=>{

    const [user, setUser] =useState(null)

    const login=()=>{

    }
    const logout=()=>{
        
    }
    const registro=()=>{

    }

    return(
        <userContext.Provider value={{user}}>
            {children}
        </userContext.Provider>
    )

}