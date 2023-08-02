import { useState,createContext,useEffect } from "react";

export const UserContext=createContext({
       UserDetails:[],
       setUserDetails:()=>null
})




export const UserProvider=({children})=>{
    const {UserDetails,setUserDetails}=useState([])

    
   

    const value={
        UserDetails,
        setUserDetails
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}