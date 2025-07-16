import {createContext} from "react";
import type {UserContexTeype} from "./ConstUserProvuder.tsx";
export type AuthUser = {
    name: string;
    email: string;
}
export const UserContect=createContext<UserContexTeype>({}as UserContexTeype)
