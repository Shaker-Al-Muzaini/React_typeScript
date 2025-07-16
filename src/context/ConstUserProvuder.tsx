import {type AuthUser, UserContect} from "./UserContect.tsx";
import React, {useState} from "react";
type UserContextPropos={
    children: React.ReactNode;
}
export  type UserContexTeype={
    user: AuthUser | null;
    setUser:React.Dispatch<React.SetStateAction<AuthUser | null>>;
}
export const ConstUserProvuder=({children}:UserContextPropos)=>{
    const [user,setUser]=useState<AuthUser|null>(null);
    return <UserContect.Provider value={
        {
            user,
            setUser
        }}
    >
        {children}
    </UserContect.Provider>

};